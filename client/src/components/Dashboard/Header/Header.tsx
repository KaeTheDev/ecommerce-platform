import type { User } from "../../../types/User";

interface HeaderProps {
  onToggleSidebar: () => void;
  isSidebarOpen: boolean;
  user: User | null;
  loading: boolean;
}

const Header = ({ onToggleSidebar, isSidebarOpen, user, loading }: HeaderProps) => {
  return (
    <div className="bg-white border p-6 flex flex-row justify-between items-center">
      {!isSidebarOpen && (
        <button 
          className="lg:hidden p-2 bg-white rounded-xl shadow-lg z-50"
          onClick={onToggleSidebar}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      )}

   
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