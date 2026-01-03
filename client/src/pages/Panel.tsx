import { useState, useEffect } from "react";
import Sidebar from "../components/Dashboard/Sidebar/Sidebar";
import Header from "../components/Dashboard/Header/Header";
import DashboardOverview from "../components/Dashboard/DashboardOverview/DashboardOverview";
import ProductsTab from "../components/Dashboard/ProductsTab/ProductsTab";
import OrdersTab from "../components/Dashboard/OrdersTab/OrdersTab";
import ReviewsTab from "../components/Dashboard/ReviewsTab/ReviewsTab";
import { ProductForm } from "../components/Dashboard/ProductForm/ProductForm";
import { createProduct, getProduct } from "../api/products";
import type { ProductFormData, ProductListItem } from "../types/Product";
import slugify from "slugify";

export const Panel = () => {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isProductFormOpen, setIsProductFormOpen] = useState(false);
  const [products, setProducts] = useState<ProductListItem[]>([]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    window.location.href = "/";
  };

  const handleOpenProductForm = () => setIsProductFormOpen(true);
  const handleCloseProductForm = () => setIsProductFormOpen(false);

  const renderTabContent = () => {
    switch (activeTab) {
      case "dashboard":
        return <DashboardOverview />;
      case "products":
        return <ProductsTab products={products} onOpenProductForm={handleOpenProductForm} />;
      case "orders":
        return <OrdersTab />;
      case "reviews":
        return <ReviewsTab />;
      default:
        return <DashboardOverview />;
    }
  };

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const data: { success: boolean; products: ProductListItem[] } = await getProduct();
        setProducts(data.products || []);
      } catch (err) {
        console.error("Failed to load products", err);
      }
    };
  
    loadProducts();
  }, []);

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

      {isProductFormOpen && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-6xl w-full max-h-[95vh] overflow-hidden shadow-2xl">
            {/* Modal Header */}
            <div className="sticky top-0 bg-white/90 backdrop-blur-sm p-6 border-b border-gray-200 flex justify-between items-center z-10">
              <h2 className="text-2xl font-bold text-gray-900">New Product</h2>
              <button
                onClick={handleCloseProductForm}
                className="p-2 rounded-xl hover:bg-gray-100 text-gray-500 hover:text-gray-700 transition-all"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* ProductForm */}
            <div className="max-h-[calc(95vh-80px)] overflow-y-auto p-6">
              <ProductForm
                onSubmit={async (data: ProductFormData) => {
                  try {
                    // Generate slug from product name
                    const slug = slugify(data.name, {
                      lower: true,
                      strict: true,
                    });

                    // Send data with slug to backend
                    const newProduct = await createProduct({ ...data, slug });

                    setProducts((prev) => [newProduct, ...prev]);

                    // alert("Product saved successfully!");
                    setIsProductFormOpen(false);
                  } catch (err) {
                    console.error(err);
                    alert("Error saving product");
                  }
                }}
              />
            </div>
          </div>
        </div>
      )}

      {/* TEMPORARY LOG OUT BUTTON */}
      <button
        onClick={handleLogout}
        className="fixed top-3 right-20 p-3 bg-red-500 text-white rounded-full shadow-lg hover:bg-red-600 z-50"
      >
        Log Out
      </button>
    </>
  );
};
