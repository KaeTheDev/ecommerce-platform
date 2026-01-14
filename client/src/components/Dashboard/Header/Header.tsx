import type { User } from "../../../types/User";

interface HeaderProps {
  user: User | null;
  loading: boolean;
}

const Header = ({ user, loading }: HeaderProps) => {
  return (
    <div className="bg-white border p-3 md:p-6 flex flex-row justify-between items-center gap-2 md:gap-4">
      <p className="text-base sm:text-lg md:text-2xl font-medium text-gray-900 truncate shrink">
        Admin Panel
      </p>

      {/* User info */}
      <div className="text-right shrink-0">
       {loading ? (
        <p className="text-xs sm:text-sm text-gray-500">Loading...</p>
       ) : user ? (
        <div className="flex flex-col items-end">
          <p className="font-semibold text-gray-900 text-xs sm:text-sm md:text-base whitespace-nowrap">
            {user.firstName} {user.lastName}
          </p>
          <p className="text-xs md:text-sm text-gray-600 whitespace-nowrap">{user.email}</p>
        </div>
       ) : null}
      </div>
    </div>
  );
};

export default Header;