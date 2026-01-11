import { useSearchParams } from "react-router-dom";
import { useState, useEffect } from "react";
import type { User } from "../types/User";

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


    // Loading State
    if(loading) return <div className="p-8">Loading...</div>

    // Not Logged In
    if(!user) return <div className="p-8">Please Log In</div>

    // Function to change tabs
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
            user={user}
            />
            <main className="flex-1 p-4 lg:p-8 overflow-auto">
                {renderTabContent(user)}
            </main>
        </div>
       </div>
        </>
    );
};