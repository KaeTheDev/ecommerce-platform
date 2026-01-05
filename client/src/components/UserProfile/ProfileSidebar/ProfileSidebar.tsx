import { useLogout } from "../../../contexts/LogoutContext";

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

const ProfileSidebar = ({
  activeTab,
  setActiveTab,
  isOpen,
  setIsOpen,
}: SidebarProps) => {

  const { requestLogout } = useLogout();

  return (
    <div
      className={`w-64 shrink-0 bg-white shadow-lg border flex flex-col h-screen z-40 
            lg:static fixed inset-y-0 left-0 transform transition-transform duration-300 ${
              isOpen ? "translate-x-0" : "-translate-x-full"
            } lg:translate-x-0`}
    >
      <div className="flex-1 p-6 mt-7 space-y-2 overflow-auto">
        {["My Profile", "My Orders", "My Reviews", "Account Settings"].map(
          (tab) => (
            <button
              key={tab}
              onClick={() => {
                setActiveTab(tab);
                setIsOpen(false);
              }}
              className={`w-full text-left py-3 px-4 rounded-xl transition-all ${
                activeTab === tab
                  ? "bg-blue-200 text-blue-800 shadow-lg"
                  : "text-gray-700 hover:bg-gray-50"
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          )
        )}
        <button
          className="w-full text-left py-3 px-4 rounded-xl transition-all text-red-700 hover:bg-red-200"
          onClick={requestLogout}
        >
          Log Out
        </button>
      </div>
    </div>
  );
};

export default ProfileSidebar;