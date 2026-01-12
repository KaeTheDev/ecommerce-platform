import type { User } from "../../../types/User";

interface HeaderProps {
  user: User;
}

const Header = ({  user }: HeaderProps) => {
  return (
    <>
      <div className="bg-white border p-6 flex flex-row justify-between items-center">
        {/* User info */}
        <div className="ml-auto lg:text-left">
          <div className="flex flex-row">
            <div className="w-12 h-12 bg-gray-200 rounded-md mr-2"></div>
            <div className="flex flex-col justify-center">
              <p className="text-sm text-gray-600">{user.email}</p>
              <p className="text-sm font-semibold capitalize text-gray-900">
                {user.role}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Page title */}
      <div className="bg-white border p-6">
        <p className="text-2xl font-medium text-gray-900">My Account</p>
        <p className="text-sm text-gray-600">
          Manage your profile, orders and preferences
        </p>
      </div>
    </>
  );
};

export default Header;