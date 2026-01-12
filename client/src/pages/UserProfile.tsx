import { useSearchParams } from "react-router-dom";
import { useState, useEffect } from "react";
import type { User } from "../types/User";

import ProfileOverview from "../components/UserProfile/ProfileOverview/ProfileOverview";
import MyOrders from "../components/UserProfile/MyOrders/MyOrders";
import MyReviews from "../components/UserProfile/MyReviews/MyReviews";
import AccountSettings from "../components/UserProfile/AccountSettings/AccountSettings";
import ProfileSidebar from "../components/UserProfile/ProfileSidebar/ProfileSidebar";
import UnifiedMobileDrawer from "../components/UnifiedMobileDrawer/UnifiedMobileDrawer";

interface UserProfileProps {
  drawerOpen: boolean;
  setDrawerOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const UserProfile = ({ drawerOpen, setDrawerOpen }: UserProfileProps) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeTab = searchParams.get("tab") || "My Profile";

  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if(!token) {
      setLoading(false);
      return;
    }

    fetch("/api/users/me", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then(res => {
      if(!res.ok) throw new Error("Unauthorized");
      return res.json();
    })
    .then(data => setUser(data))
    .catch(() => setUser(null))
    .finally(() => setLoading(false));
  }, []);

  if(loading) return <div className="p-8">Loading...</div>
  if(!user) return <div className="p-8">Please Log In</div>

  const setActiveTab = (tab: string) => {
    setSearchParams({ tab });
  };

  const renderTabContent = (user: User) => {
    switch(activeTab) {
      case "My Profile":
        return <ProfileOverview user={user} />
      case "My Orders":
        return <MyOrders />
      case "My Reviews":
        return <MyReviews />
      case "Account Settings":
        return <AccountSettings user={user} onUserUpdate={setUser} />
      default:
        return <ProfileOverview user={user} />
    }
  };

  return (
    <>
      <div className="flex min-h-screen bg-gray-50">
        <ProfileSidebar
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          isOpen={false}
          setIsOpen={() => {}}
          className="hidden lg:flex lg:fixed lg:top-20 lg:left-0 lg:h-[calc(100vh-5rem)] w-64 border-r border-gray-200 bg-white z-30 shrink-0"
        />
  
        {/* Main area */}
        <div className="flex-1 flex flex-col">
          {/* Profile Header */}
          <div className="bg-white border-b border-gray-200 p-6 flex items-center justify-between">
            <h1 className="text-2xl font-bold text-gray-900">My Account</h1>
            <div className="flex items-center gap-3">
              <img 
                src={user?.avatar || "/public/assets/ProfileImage.jpg"} 
                alt={`${user?.firstName} ${user?.lastName}`}
                className="w-10 h-10 rounded-full object-cover"
              />
              <div className="text-right hidden sm:block">
                <p className="font-semibold text-gray-900 text-sm">
                  {user?.firstName} {user?.lastName}
                </p>
                <p className="text-xs text-gray-500">{user?.email}</p>
              </div>
            </div>
          </div>
  
          {/* Main content */}
          <main className="flex-1 p-4 lg:p-8 overflow-auto">
            {renderTabContent(user)}
          </main>
        </div>
      </div>
  
      <UnifiedMobileDrawer 
        isOpen={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      />
    </>
  );
};