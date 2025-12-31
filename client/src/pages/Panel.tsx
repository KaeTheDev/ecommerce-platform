import { useState } from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import Header from "../components/Header/Header";
import DashboardOverview from "../components/DashboardOverview/DashboardOverview";
import ProductsTab from "../components/ProductsTab/ProductsTab";
import OrdersTab from "../components/OrdersTab/OrdersTab";

export const Panel = () => {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    window.location.href = "/";
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case "dashboard":
        return <DashboardOverview />;
      case "products":
        return <ProductsTab />;
      case "orders":
       return <OrdersTab />;
      default:
        return <DashboardOverview />;
    }
  };

  return (
    <>
      {/* Mobile Overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      <div className="flex min-h-screen bg-gray-50">
        <Sidebar
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
      
      <button
        onClick={handleLogout}
        className="fixed top-3 right-20 p-3 bg-red-500 text-white rounded-full shadow-lg hover:bg-red-600 z-50"
      >
        Log Out
      </button>
    </>
  );
};