import { useState } from "react";

export const Panel = () => {
  const [activeTab, setActiveTab] = useState("dashboard");

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    window.location.href = "/";
  };

  return (
    <>
      {/* <h1 className="text-3xl text-pink-700">Welcome to the Admin Panel!</h1> */}
      <div className="flex min-h-screen bg-gray-50">
        <div className="w-64 bg-white shadow-lg border-r flex flex-col">
          <div className="p-6 border-b">
            <p className="text-xl font-bold text-gray-900">Luxarist</p>
            <p className="text-sm text-gray-600">Admin Dashboard</p>
          </div>

          {/* Navigation Tabs */}
          <div className="flex-1 p-6 mt-7 space-y-2">
            <button
              onClick={() => setActiveTab("dashboard")}
              className={`w-full text-left py-3 px-4 rounded-xl transition-all ${
                activeTab === "dashboard"
                  ? "bg-blue-200 text-blue shadow-lg"
                  : "text-gray-700 hover:bg-gray-50"
              }`}
            >
              Dashboard
            </button>

            <button
              onClick={() => setActiveTab("products")}
              className={`w-full text-left py-3 px-4 rounded-xl transition-all ${
                activeTab === "products"
                  ? "bg-blue-200 text-blue shadow-lg"
                  : "text-gray-700 hover:bg-gray-50"
              }`}
            >
              Products
            </button>

            <button
              onClick={() => setActiveTab("orders")}
              className={`w-full text-left py-3 px-4 rounded-xl transition-all ${
                activeTab === "orders"
                  ? "bg-blue-200 text-blue shadow-lg"
                  : "text-gray-700 hover:bg-gray-50"
              }`}
            >
              Orders
            </button>

            <button
              onClick={() => setActiveTab("reviews")}
              className={`w-full text-left py-3 px-4 rounded-xl transition-all ${
                activeTab === "reviews"
                  ? "bg-blue-200 text-blue shadow-lg"
                  : "text-gray-700 hover:bg-gray-50"
              }`}
            >
              Reviews
            </button>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 flex flex-col overflow-hidden">
          {/* Header */}
          <div className="bg-white border-b p-6 flex flex-row justify-between items-center">
            <p className="text-2xl font-bold text-gray-900">Admin Panel</p>
            <div className="text-right">
              <p className="font-semibold text-gray-900">Admin User</p>
              <p className="text-sm text-gray-600">admin@luxarist.com</p>
            </div>
          </div>

          {/* Content Area */}
          <div className="flex-1 p-8 overflow-auto">
            <p className="text-3xl mb-3.5">Dashboard Overview</p>
            <p className="text-sm mb-7">
              Welcome to your store management dashboard
            </p>
            {/* Stats Cards */}
            <div className="mb-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-white p-6 rounded-2xl shadow-lg border hover:shadow-xl transition-all">
                  <p className="text-sm font-medium text-gray 600 mb-1">
                    Total Products
                  </p>
                  <p className="text-xl font-medium text-gray-900">24</p>
                </div>

                <div className="bg-white p-6 rounded-2xl shadow-lg border hover:shadow-xl transition-all">
                  <p className="text-sm font-medium text-gray 600 mb-1">
                    Active Products
                  </p>
                  <p className="text-xl font-medium text-gray-900">18</p>
                </div>

                <div className="bg-white p-6 rounded-2xl shadow-lg border hover:shadow-xl transition-all">
                  <p className="text-sm font-medium text-gray 600 mb-1">
                    Total Orders
                  </p>
                  <p className="text-xl font-medium text-gray-900">156</p>
                </div>

                <div className="bg-white p-6 rounded-2xl shadow-lg border hover:shadow-xl transition-all">
                  <p className="text-sm font-medium text-gray 600 mb-1">
                    Total Reviews
                  </p>
                  <p className="text-xl font-medium text-gray-900">42</p>
                </div>
              </div>
            </div>

            {/* Recent Activity */}
            <div className="bg-white rounded-2xl shadow-lg border p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-6">
                Recent Activity
              </h2>

              <div className="space-y-6">
                {/* 1. New order placed */}
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <span className="font-medium text-gray-900">
                      New order placed
                    </span>
                    <span className="text-sm text-gray-500">1 hour ago</span>
                  </div>
                  <div className="text-sm text-gray-600">Order #1043</div>
                </div>

                {/* 2. Product updated */}
                <div className="border-t pt-6">
                  <div className="flex justify-between items-center mb-1">
                    <span className="font-medium text-gray-900">
                      Product updated
                    </span>
                    <span className="text-sm text-gray-500">2 hours ago</span>
                  </div>
                  <div className="text-sm text-gray-600">
                    Luxury Watch Collection
                  </div>
                </div>

                {/* 3. Order shipped */}
                <div className="border-t pt-6">
                  <div className="flex justify-between items-center mb-1">
                    <span className="font-medium text-gray-900">
                      Order shipped
                    </span>
                    <span className="text-sm text-gray-500">3 hours ago</span>
                  </div>
                  <div className="text-sm text-gray-600">Order #1042</div>
                </div>

                {/* 4. New review posted */}
                <div className="border-t pt-6">
                  <div className="flex justify-between items-center mb-1">
                    <span className="font-medium text-gray-900">
                      New review posted
                    </span>
                    <span className="text-sm text-gray-500">4 hours ago</span>
                  </div>
                  <div className="text-sm text-gray-600">Designer Handbag</div>
                </div>

                {/* 5. Product created */}
                <div className="border-t pt-6">
                  <div className="flex justify-between items-center mb-1">
                    <span className="font-medium text-gray-900">
                      Product created
                    </span>
                    <span className="text-sm text-gray-500">1 day ago</span>
                  </div>
                  <div className="text-sm text-gray-600">Silk Scarf Set</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <button
        onClick={handleLogout}
        className="fixed top-3 right-20 p-3 bg-red-500 text-white rounded-full shadow-lg hover:bg-red-600"
      >
        Log Out
      </button>
    </>
  );
};
