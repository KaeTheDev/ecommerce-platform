import { useState } from "react";
import type { User } from "../../../types/User";

interface AccountSettingsProps {
  user: User;
  onUserUpdate: (user: User) => void;
}

const AccountSettings = ({ user, onUserUpdate }: AccountSettingsProps) => {
  const [isEditingProfile, setIsEditingProfile] = useState(false);

  const [profileForm, setProfileForm] = useState({
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.email
  });

  const startEditing = () => {
    setProfileForm({
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email
    });
    setIsEditingProfile(true);
  };

  const handleProfileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProfileForm(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const isDirty = 
  profileForm.firstName !== user.firstName ||
  profileForm.lastName !== user.lastName ||
  profileForm.email !== user.email;

  const handleSaveProfile = async() => {
    const token = localStorage.getItem("token");
    if(!token) return;

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

      if(!res.ok) {
        throw new Error(updatedUser.message || "Failed to update profile");
      }

      onUserUpdate(updatedUser);
      setIsEditingProfile(false);
      // TODO Later: show success toast or message
    } catch(err) {
      console.error("Updated failed:", err);
    }
  };

  return (
    <>
 <div className="flex flex-col bg-white p-4 rounded-2xl shadow w-full gap-4">
        <div className="flex flex-row justify-between items-center">
          <p className="text-sm text-gray-500">Profile Information</p>

          {!isEditingProfile ? (
            <button
              className="text-sm text-indigo-600"
              onClick={startEditing}
            >
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
                placeholder="First name"
              />
              <input
                name="lastName"
                value={profileForm.lastName}
                onChange={handleProfileChange}
                className="border rounded-lg p-2 w-full"
                placeholder="Last name"
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

        {/* Save */}
        {isEditingProfile && (
          <button 
          onClick={handleSaveProfile}
          disabled={!isDirty}
          className={`self-start text-sm px-4 py-2 rounded-lg transition
            ${
              isDirty
                ? "bg-black text-white hover:bg-gray-800"
                : "bg-gray-300 text-gray-500 cursor-not-allowed"
            }`}>
            Save Changes
          </button>
        )}
      </div>
    </>
  );
};

export default AccountSettings;