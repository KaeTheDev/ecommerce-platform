import type { User } from "../../../types/User";

interface AccountSettingsProps {
  user: User;
}

const AccountSettings = ({ user }: AccountSettingsProps) => {
  return (
    <>
      <div className="flex flex-col bg-white p-4 rounded-2xl shadow w-full gap-4">
        <div className="flex flex-row justify-between">
          <p className="text-sm text-gray-500 mb-4">Profile Information</p>
          <p className="text-sm text-gray-500">Edit</p>
        </div>
        <div className="flex flex-row">
          <div className="w-12 h-12 bg-gray-200 rounded-md mr-2"></div>

          <div className="flex flex-col">
            <p className="text-sm text-gray-500">Full Name</p>
            <p className="text-sm text-gray-500">
              {user.firstName} {user.lastName}
            </p>
          </div>
        </div>

        <div className="flex flex-row">
          <div className="w-12 h-12 bg-gray-200 rounded-md mr-2"></div>

          <div className="flex flex-col">
            <p className="text-sm text-gray-500">Email Address</p>
            <p className="text-sm text-gray-500">{user.email}</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col bg-white p-4 rounded-2xl shadow w-full gap-4 mt-4">
        <div className="flex flex-row justify-between">
          <p className="text-sm text-gray-500">Password</p>
          <p className="text-sm text-gray-500">Change</p>
        </div>
        <p className="text-sm text-gray-500">
          Update your password to keep your account secure
        </p>
        <span className="text-gray-500">******</span>
      </div>

      <div className="flex flex-col bg-white p-4 rounded-2xl shadow w-full gap-4 mt-4 border border-red-600">
        <p className="text-sm text-gray-500">Danger Zone</p>
        <p className="text-sm text-gray-500">
          Permanently delete your account and all associated data
        </p>
        <button className="self-start bg-red-100 text-red-600 text-sm px-3 py-1.5 rounded-lg hover:bg-red-200 transition">
          Delete Account
        </button>
      </div>
    </>
  );
};
export default AccountSettings;