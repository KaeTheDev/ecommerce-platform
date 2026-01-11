import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDeleteAccount } from "../../../contexts/DeleteContext";
import type { User } from "../../../types/User";

interface AccountSettingsProps {
  user: User;
  onUserUpdate: (user: User) => void;
}

const AccountSettings = ({ user, onUserUpdate }: AccountSettingsProps) => {
  const navigate = useNavigate();

  /* ================= PROFILE ================= */
  const [isEditingProfile, setIsEditingProfile] = useState(false);

  const [profileForm, setProfileForm] = useState({
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.email,
  });

  const startEditing = () => {
    setProfileForm({
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
    });
    setIsEditingProfile(true);
  };

  const handleProfileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProfileForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const isDirty =
    profileForm.firstName !== user.firstName ||
    profileForm.lastName !== user.lastName ||
    profileForm.email !== user.email;

  const handleSaveProfile = async () => {
    const token = localStorage.getItem("token");
    if (!token) return;

    try {
      const res = await fetch("/api/users/me", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(profileForm),
      });

      const updatedUser = await res.json();

      if (!res.ok) {
        throw new Error(updatedUser.message || "Failed to update profile");
      }

      onUserUpdate(updatedUser);
      setIsEditingProfile(false);
    } catch (err) {
      console.error("Profile update failed:", err);
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

  const passwordMismatch =
    passwordForm.newPassword !== passwordForm.confirmPassword;

  const passwordDirty =
    passwordForm.currentPassword ||
    passwordForm.newPassword ||
    passwordForm.confirmPassword;

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

      if (!res.ok) {
        throw new Error(data.error || "Failed to update password");
      }

      // 🔐 LOG OUT AFTER PASSWORD CHANGE
      localStorage.removeItem("token");
      navigate("/");
    } catch (err) {
      console.error("Password update failed:", err);
    }
  };

  /* ================= DELETE ACCOUNT ================= */

  const { requestDeleteAccount } = useDeleteAccount();

  return (
    <>
      {/* ================= PROFILE ================= */}
      <div className="flex flex-col bg-white p-4 rounded-2xl shadow w-full gap-4">
        <div className="flex justify-between items-center">
          <p className="text-sm text-gray-500">Profile Information</p>

          {!isEditingProfile ? (
            <button className="text-sm text-indigo-600" onClick={startEditing}>
              Edit
            </button>
          ) : (
            <button
              className="text-sm text-gray-500"
              onClick={() => setIsEditingProfile(false)}
            >
              Cancel
            </button>
          )}
        </div>

        {/* Full Name */}
        <div>
          <p className="text-sm text-gray-500">Full Name</p>
          {isEditingProfile ? (
            <div className="flex gap-2 mt-1">
              <input
                name="firstName"
                value={profileForm.firstName}
                onChange={handleProfileChange}
                className="border rounded-lg p-2 w-full"
              />
              <input
                name="lastName"
                value={profileForm.lastName}
                onChange={handleProfileChange}
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
          {isEditingProfile ? (
            <input
              name="email"
              value={profileForm.email}
              onChange={handleProfileChange}
              className="border rounded-lg p-2 w-full mt-1"
            />
          ) : (
            <p className="text-sm text-gray-900">{user.email}</p>
          )}
        </div>

        {isEditingProfile && (
          <button
            onClick={handleSaveProfile}
            disabled={!isDirty}
            className={`self-start text-sm px-4 py-2 rounded-lg transition
              ${
                isDirty
                  ? "bg-black text-white hover:bg-gray-800"
                  : "bg-gray-300 text-gray-500 cursor-not-allowed"
              }`}
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
                setPasswordForm({
                  currentPassword: "",
                  newPassword: "",
                  confirmPassword: "",
                });
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
          <div className="flex flex-col gap-3">
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

            {passwordMismatch && (
              <p className="text-sm text-red-600">
                Passwords do not match
              </p>
            )}

            <button
              onClick={handleSavePassword}
              disabled={!passwordDirty || passwordMismatch}
              className={`self-start text-sm px-4 py-2 rounded-lg transition
                ${
                  passwordDirty && !passwordMismatch
                    ? "bg-black text-white hover:bg-gray-800"
                    : "bg-gray-300 text-gray-500 cursor-not-allowed"
                }`}
            >
              Save Password
            </button>
          </div>
        )}
      </div>

      {/* Delete */}


      <div className="flex flex-col bg-white p-4 rounded-2xl shadow w-full gap-4 mt-4 border border-red-600">
        <p className="text-sm text-gray-500">Danger Zone</p>
        <p className="text-sm text-gray-500">
          Permanently delete your account and all associated data
        </p>
        <button className="self-start bg-red-100 text-red-600 text-sm px-3 py-1.5 rounded-lg hover:bg-red-200 transition"
        onClick={requestDeleteAccount}
        >
          Delete Account
        </button>
      </div>

    </>
  );
};

export default AccountSettings;