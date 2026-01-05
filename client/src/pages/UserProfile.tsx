import { useSearchParams } from "react-router-dom";
import { useState } from "react";
import Header from "../components/UserProfile/Header/Header";
import ProfileOverview from "../components/UserProfile/ProfileOverview/ProfileOverview";
import MyOrders from "../components/UserProfile/MyOrders/MyOrders";
import MyReviews from "../components/UserProfile/MyReviews/MyReviews";
import AccountSettings from "../components/UserProfile/AccountSettings/AccountSettings";
import ProfileSidebar from "../components/UserProfile/ProfileSidebar/ProfileSidebar";

export const UserProfile = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const activeTab = searchParams.get("tab") || "My Profile";

    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    // Function to change tabs
    const setActiveTab = (tab: string) => {
        setSearchParams({ tab });
    };

    const renderTabContent = () => {
        switch(activeTab) {
            case "My Profile":
                return <ProfileOverview />
            case "My Orders":
                return <MyOrders />
            case "My Reviews":
                return <MyReviews />
            case "Account Settings":
                return <AccountSettings />
            default:
                return <ProfileOverview />
        }
    };

    return(
        <>
      {/* Mobile Overlay */}
      {isSidebarOpen && (
        <div className="fixed inset-0 bg-black/50 z-40 lg:hidden"
        onClick={() => setIsSidebarOpen(false)}
       /> )}

       <div className="flex min-h-screen bg-gray-50">
        <ProfileSidebar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        isOpen={isSidebarOpen}
        setIsOpen={setIsSidebarOpen}
        />

        <div className="flex-1 flex flex-col overflow-hidden ml-0">
            <Header 
            onToggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
            isSidebarOpen={isSidebarOpen}
            />
            <main className="flex-1 p-4 lg:p-8 overflow-auto">
                {renderTabContent()}
            </main>
        </div>
       </div>
        </>
    )
}