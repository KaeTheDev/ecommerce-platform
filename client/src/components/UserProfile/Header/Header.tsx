import type { User } from "../../../types/User";

interface HeaderProps {
  user: User;
}

const Header = ({ user }: HeaderProps) => {
  return (
    <div className="bg-white border-b border-gray-200">
      {/* Top section with user info */}
      <div className="p-4 sm:p-6 flex items-center justify-between gap-3">
        {/* Title */}
        <h1 className="text-xl sm:text-2xl font-bold text-gray-900">My Account</h1>

        {/* User info */}
        <div className="flex items-center gap-2 sm:gap-3">
          <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-200 rounded-md overflow-hidden shrink-0">
            <img 
              src={user?.avatar || "/assets/ProfileImage.jpg"} 
              alt={`${user?.firstName} ${user?.lastName}`}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col justify-center min-w-0 sm:block">
            <p className="text-xs sm:text-sm text-gray-600 truncate max-w-30 sm:max-w-50">
              {user.email}
            </p>
            <p className="text-xs sm:text-sm font-semibold capitalize text-gray-900">
              {user.role}
            </p>
          </div>
        </div>
      </div>

      {/* Page subtitle - visible on desktop */}
      <div className="hidden lg:block px-6 pb-6">
        <p className="text-sm text-gray-600">
          Manage your profile, orders and preferences
        </p>
      </div>
    </div>
  );
};

export default Header;