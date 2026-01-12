import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDeleteAccount } from "../../../contexts/DeleteContext";
import type { User } from "../../../types/User";

interface AdminSettingsProps {
  user: User;
  onAdminUpdate: (user: User) => void;
}

const AdminSettings = ({ user, onAdminUpdate }: AdminSettingsProps) => {
  const navigate = useNavigate();
  const { requestDeleteAccount } = useDeleteAccount();

  /* ================= ACCOUNT ================= */
  const [isEditingAccount, setIsEditingAccount] = useState(false);
  const [accountForm, setAccountForm] = useState({
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.email,
  });

  const startEditing = () => {
    setAccountForm({
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
    });
    setIsEditingAccount(true);
  };

  const handleAccountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAccountForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const isDirty =
    accountForm.firstName !== user.firstName ||
    accountForm.lastName !== user.lastName ||
    accountForm.email !== user.email;

  const handleSaveAccount = async () => {
    const token = localStorage.getItem("token");
    if (!token) return;

    try {
      const res = await fetch("/api/users/me", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(accountForm),
      });

      const updatedAccount = await res.json();

      if (!res.ok) throw new Error(updatedAccount.message || "Failed to update account");

      onAdminUpdate(updatedAccount);
      setIsEditingAccount(false);
    } catch (err) {
      console.error("Account update failed:", err);
    }
  };

  /* ================= PASSWORD ================= */
  const [isEditingPassword, setIsEditingPassword] = useState(false);
  const [passwordForm, setPasswordForm] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPasswordForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const passwordMismatch = passwordForm.newPassword !== passwordForm.confirmPassword;
  const passwordDirty =
    passwordForm.currentPassword || passwordForm.newPassword || passwordForm.confirmPassword;

  const handleSavePassword = async () => {
    if (passwordMismatch) return;

    const token = localStorage.getItem("token");
    if (!token) return;

    try {
      const res = await fetch("/api/users/me/password", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          currentPassword: passwordForm.currentPassword,
          newPassword: passwordForm.newPassword,
        }),
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.error || "Failed to update password");

      // Clear form & log out
      setPasswordForm({ currentPassword: "", newPassword: "", confirmPassword: "" });
      localStorage.removeItem("token");
      navigate("/");
    } catch (err) {
      console.error("Password update failed:", err);
    }
  };

  return (
    <>
      {/* ================= PROFILE ================= */}
      <div className="flex flex-col bg-white p-4 rounded-2xl shadow w-full gap-4">
        <div className="flex justify-between items-center">
          <p className="text-sm text-gray-500">Profile Information</p>
          {!isEditingAccount ? (
            <button className="text-sm text-indigo-600" onClick={startEditing}>
              Edit
            </button>
          ) : (
            <button
              className="text-sm text-gray-500"
              onClick={() => setIsEditingAccount(false)}
            >
              Cancel
            </button>
          )}
        </div>

        {/* Full Name */}
        <div>
          <p className="text-sm text-gray-500">Full Name</p>
          {isEditingAccount ? (
            <div className="flex gap-2 mt-1">
              <input
                name="firstName"
                value={accountForm.firstName}
                onChange={handleAccountChange}
                className="border rounded-lg p-2 w-full"
              />
              <input
                name="lastName"
                value={accountForm.lastName}
                onChange={handleAccountChange}
                className="border rounded-lg p-2 w-full"
              />
            </div>
          ) : (
            <p className="text-sm text-gray-900">
              {user.firstName} {user.lastName}
            </p>
          )}
        </div>

        {/* Email */}
        <div>
          <p className="text-sm text-gray-500">Email Address</p>
          {isEditingAccount ? (
            <input
              name="email"
              value={accountForm.email}
              onChange={handleAccountChange}
              className="border rounded-lg p-2 w-full mt-1"
            />
          ) : (
            <p className="text-sm text-gray-900">{user.email}</p>
          )}
        </div>

        {isEditingAccount && (
          <button
            onClick={handleSaveAccount}
            disabled={!isDirty}
            className={`self-start text-sm px-4 py-2 rounded-lg transition
              ${isDirty ? "bg-black text-white hover:bg-gray-800" : "bg-gray-300 text-gray-500 cursor-not-allowed"}`}
          >
            Save Changes
          </button>
        )}
      </div>

      {/* ================= PASSWORD ================= */}
      <div className="flex flex-col bg-white p-4 rounded-2xl shadow w-full gap-4 mt-4">
        <div className="flex justify-between items-center">
          <p className="text-sm text-gray-500">Password</p>
          {!isEditingPassword ? (
            <button
              className="text-sm text-indigo-600"
              onClick={() => setIsEditingPassword(true)}
            >
              Change
            </button>
          ) : (
            <button
              className="text-sm text-gray-500"
              onClick={() => {
                setIsEditingPassword(false);
                setPasswordForm({ currentPassword: "", newPassword: "", confirmPassword: "" });
              }}
            >
              Cancel
            </button>
          )}
        </div>

        {!isEditingPassword ? (
          <>
            <p className="text-sm text-gray-500">
              Update your password to keep your account secure
            </p>
            <span className="text-gray-500">******</span>
          </>
        ) : (
          <div className="flex flex-col gap-3 mt-2">
            <input
              type="password"
              name="currentPassword"
              placeholder="Current password"
              value={passwordForm.currentPassword}
              onChange={handlePasswordChange}
              className="border rounded-lg p-2"
            />
            <input
              type="password"
              name="newPassword"
              placeholder="New password"
              value={passwordForm.newPassword}
              onChange={handlePasswordChange}
              className="border rounded-lg p-2"
            />
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm new password"
              value={passwordForm.confirmPassword}
              onChange={handlePasswordChange}
              className="border rounded-lg p-2"
            />

            {passwordMismatch && <p className="text-sm text-red-600">Passwords do not match</p>}

            <button
              onClick={handleSavePassword}
              disabled={!passwordDirty || passwordMismatch}
              className={`self-start text-sm px-4 py-2 rounded-lg transition
                ${passwordDirty && !passwordMismatch ? "bg-black text-white hover:bg-gray-800" : "bg-gray-300 text-gray-500 cursor-not-allowed"}`}
            >
              Save Password
            </button>
          </div>
        )}
      </div>

      {/* ================= DELETE ACCOUNT ================= */}
      <div className="flex flex-col bg-white p-4 rounded-2xl shadow w-full gap-4 mt-4 border border-red-600">
        <p className="text-sm text-gray-500">Danger Zone</p>
        <p className="text-sm text-gray-500">
          Permanently delete your account and all associated data
        </p>
        <button
          className="self-start bg-red-100 text-red-600 text-sm px-3 py-1.5 rounded-lg hover:bg-red-200 transition"
          onClick={requestDeleteAccount}
        >
          Delete Account
        </button>
      </div>
    </>
  );
};

export default AdminSettings;