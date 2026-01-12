import { Link } from "react-router-dom";
import { useLogout } from "../../contexts/LogoutContext";
import { useLocation } from "react-router-dom";

interface UnifiedMobileDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function UnifiedMobileDrawer({ isOpen, onClose }: UnifiedMobileDrawerProps) {
  const { requestLogout } = useLogout();
  const location = useLocation();

  // Determine if we're in admin dashboard routes
  const isAdminDashboard = location.pathname.startsWith('/admin');
  const isProfilePage = location.pathname.startsWith('/profile');

  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden" 
          onClick={onClose}
        />
      )}
      
      {/* Unified Drawer */}
      <div className={`fixed top-0 left-0 h-full w-80 bg-white shadow-xl transform transition-transform duration-300 z-50 lg:hidden ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      }`}>
        <div className="p-6 border-b flex items-center justify-between">
          <h2 className="text-xl font-bold text-gray-900">Menu</h2>
          <button onClick={onClose} className="p-1">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Section 1: Main Site Navigation */}
        <div className="py-4 border-b">
          <h3 className="px-6 py-2 font-semibold text-gray-800 text-sm uppercase tracking-wider">Site</h3>
          <div className="space-y-1 px-4">
            <Link 
              to="/" 
              onClick={onClose}
              className={`block py-3 px-4 rounded-xl transition-all ${
                location.pathname === '/' ? "bg-blue-100 text-blue-800 font-medium" : "text-gray-700 hover:bg-gray-50"
              }`}
            >
              Home
            </Link>
            <Link 
              to="/collections" 
              onClick={onClose}
              className={`block py-3 px-4 rounded-xl transition-all ${
                location.pathname === '/collections' ? "bg-blue-100 text-blue-800 font-medium" : "text-gray-700 hover:bg-gray-50"
              }`}
            >
              Collections
            </Link>
          </div>
        </div>

        {/* Section 2: Admin Dashboard (if on admin route) */}
        {isAdminDashboard && (
          <div className="py-4 border-b">
            <h3 className="px-6 py-2 font-semibold text-gray-800 text-sm uppercase tracking-wider">Admin Dashboard</h3>
            <div className="space-y-1 px-4">
              {['overview', 'products', 'orders', 'reviews', 'admin settings'].map(tab => (
                <Link
                  key={tab}
                  to={`/admin/${tab}`}
                  onClick={onClose}
                  className={`block py-3 px-4 rounded-xl transition-all text-sm ${
                    location.pathname === `/admin/${tab}` 
                      ? "bg-blue-200 text-blue-800 shadow-lg" 
                      : "text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  {tab === "admin settings" ? "Admin Settings" : tab.charAt(0).toUpperCase() + tab.slice(1)}
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Section 3: Profile (if on profile route) */}
        {isProfilePage && (
          <div className="py-4 border-b">
            <h3 className="px-6 py-2 font-semibold text-gray-800 text-sm uppercase tracking-wider">Profile</h3>
            <div className="space-y-1 px-4">
              {["My Profile", "My Orders", "My Reviews", "Account Settings"].map(tab => (
                <Link
                  key={tab}
                  to={`/profile/${tab.toLowerCase().replace(/\s+/g, '-')}`}
                  onClick={onClose}
                  className={`block py-3 px-4 rounded-xl transition-all text-sm ${
                    location.pathname.includes(tab.toLowerCase().replace(/\s+/g, '-')) 
                      ? "bg-blue-200 text-blue-800 shadow-lg" 
                      : "text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  {tab}
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Logout (always visible) */}
        <div className="py-4 px-4 absolute bottom-6 left-0 right-0">
          <button
            className="w-full text-left py-3 px-4 rounded-xl transition-all text-red-700 hover:bg-red-200"
            onClick={() => {
              requestLogout();
              onClose();
            }}
          >
            Log Out
          </button>
        </div>
      </div>
    </>
  );
}