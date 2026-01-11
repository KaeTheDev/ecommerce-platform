import type { User } from "../../../types/User";

interface HeaderProps {
  onToggleSidebar: () => void;
  isSidebarOpen: boolean;
  user: User;
}

const Header = ({ onToggleSidebar, isSidebarOpen, user }: HeaderProps) => {
  return (
    <>
      <div className="bg-white border p-6 flex flex-row justify-between items-center">
        {!isSidebarOpen && (
          <button
            className="lg:hidden p-2 bg-white rounded-xl shadow-lg z-50"
            onClick={onToggleSidebar}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        )}
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