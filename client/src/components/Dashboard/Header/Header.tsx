import type { User } from "../../../types/User";

interface HeaderProps {
  user: User | null;
  loading: boolean;
}

const Header = ({ user, loading }: HeaderProps) => {
  return (
    <div className="bg-white border p-6 flex flex-row justify-between items-center">
      <p className="text-2xl font-medium text-gray-900 flex-1 lg:ml-0 lg:flex-none ml-3">
        Admin Panel
      </p>

      {/* User info */}
      <div className="text-right">
       {loading ? (
        <p className="text-sm text-gray-500">Loading...</p>
       ) : user ? (
        <>
        <p className="fomnt-semibold text-gray-900">
          {user.firstName} {user.lastName}
        </p>
        <p className="text-sm text-gray-600">{user.email}</p>
        </>
       ) : null}
      </div>
    </div>
  );
};

export default Header;