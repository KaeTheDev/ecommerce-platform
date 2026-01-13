import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { createProduct, getProduct, deleteProduct, getSingleProduct, updateProduct } from "../api/products";
import type { Product, ProductTableItem } from "../types/Product";
import type { User } from "../types/User";
import slugify from "slugify";

import DashboardOverview from "../components/Dashboard/DashboardOverview/DashboardOverview";
import ProductsTab from "../components/Dashboard/ProductsTab/ProductsTab";
import OrdersTab from "../components/Dashboard/OrdersTab/OrdersTab";
import ReviewsTab from "../components/Dashboard/ReviewsTab/ReviewsTab";
import { ProductForm } from "../components/Dashboard/ProductForm/ProductForm";
import AdminSettings from "../components/Dashboard/AdminSettings/AdminSettings";
import UnifiedMobileDrawer from "../components/UnifiedMobileDrawer/UnifiedMobileDrawer";
import Sidebar from "../components/Dashboard/Sidebar/Sidebar";
import Header from "../components/Dashboard/Header/Header";

interface PanelProps {
  drawerOpen: boolean;
  setDrawerOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Panel = ({ drawerOpen, setDrawerOpen }: PanelProps) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeTab = searchParams.get("tab") || "overview";

  const [isProductFormOpen, setIsProductFormOpen] = useState(false);
  const [products, setProducts] = useState<ProductTableItem[]>([]);
  const [currentProduct, setCurrentProduct] = useState<Product | null>(null);
  const [user, setUser] = useState<User | null>(null);
  const [userLoading, setUserLoading] = useState(true);

  const setActiveTab = (tab: string) => {
    setSearchParams({ tab });
  };

  const handleEditClick = async (productId: string) => {
    try {
      const fullProduct = await getSingleProduct(productId);
      const editData = {
        ...fullProduct,
        createdAt: fullProduct.createdAt
          ? new Date(fullProduct.createdAt)
          : new Date(),
        updatedAt: fullProduct.updatedAt
          ? new Date(fullProduct.updatedAt)
          : new Date(),
      };
      setCurrentProduct(editData);
      setIsProductFormOpen(true);
    } catch (err) {
      console.error("Error fetching product:", err);
      alert("Failed to load product details");
    }
  };

  const handleSubmitProduct = async (data: Product) => {
    const slug = slugify(data.name, { lower: true, strict: true });

    if (currentProduct) {
      await updateProduct(currentProduct.id, { ...data, slug });
      const updatedTableItem: ProductTableItem = {
        id: currentProduct.id,
        name: data.name,
        price: data.price,
        status: data.status,
      };
      setProducts((prev) =>
        prev.map((p) => (p.id === currentProduct.id ? updatedTableItem : p))
      );
    } else {
      const newProduct = await createProduct({ ...data, slug });
      const newTableItem: ProductTableItem = {
        id: newProduct.id,
        name: newProduct.name,
        price: newProduct.price,
        status: newProduct.status,
      };
      setProducts((prev) => [newTableItem, ...prev]);
    }

    setIsProductFormOpen(false);
    setCurrentProduct(null);
  };

  const handleOpenProductForm = () => {
    setCurrentProduct(null);
    setIsProductFormOpen(true);
  };

  const handleCloseProductForm = () => {
    setCurrentProduct(null);
    setIsProductFormOpen(false);
  };

  const handleDeleteProduct = async (productId: string) => {
    try {
      await deleteProduct(productId);
      setProducts((prev) => prev.filter((p) => p.id !== productId));
    } catch (err) {
      console.error(err);
      alert("Failed to delete product");
    }
  };

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const data: { success: boolean; products: ProductTableItem[] } =
          await getProduct();
        setProducts(data.products || []);
      } catch (err) {
        console.error("Failed to load products", err);
      }
    };
    loadProducts();
  }, []);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if(!token) {
      setUserLoading(false); 
      return;
    }
    
    fetch("/api/users/me", {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then(res => {
      if(!res.ok) throw new Error("Unauthorized");
      return res.json();
    })
    .then(data => {
      setUser(data);
      setUserLoading(false); 
    })
    .catch(err => {
      console.error(err);
      setUser(null);
      setUserLoading(false);  
    });
  }, []);

  const renderTabContent = () => {
    switch (activeTab) {
      case "overview":
        return <DashboardOverview />;
      case "products":
        return (
          <ProductsTab
            onEdit={handleEditClick}
            onDelete={handleDeleteProduct}
            products={products}
            onOpenProductForm={handleOpenProductForm}
          />
        );
      case "orders":
        return <OrdersTab />;
      case "reviews":
        return <ReviewsTab />;
      case "admin settings":
        return user ? (
          <AdminSettings user={user} onAdminUpdate={setUser} />
        ) : (
          <p>Loading user...</p>
        );
      default:
        return <DashboardOverview />;
    }
  };

  return (
    <>
      <div className="flex min-h-screen bg-gray-50">
        {/* Sidebar */}
        <Sidebar
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          isOpen={false}
          setIsOpen={() => {}}
        className="hidden lg:flex lg:fixed lg:top-20 lg:left-0 lg:h-[calc(100vh-5rem)] w-64 border-r border-gray-200 bg-white z-30 shrink-0"
        />
  
        {/* Main area */}
        <div className="flex-1 flex flex-col `lg:ml-64.25">
          {/* Dashboard header */}
          <Header user={user} loading={userLoading} />
  
          {/* Main content */}
          <main className="flex-1 p-4 lg:p-8 overflow-auto">
            {renderTabContent()}
          </main>
        </div>
      </div>
  
      {/* Global mobile drawer */}
      <UnifiedMobileDrawer 
        isOpen={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      />
  
      {/* Product form modal */}
      {isProductFormOpen && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-6xl w-full max-h-[95vh] overflow-hidden shadow-2xl">
            <div className="sticky top-0 bg-white/90 backdrop-blur-sm p-6 border-b border-gray-200 flex justify-between items-center z-10">
              <h2 className="text-2xl font-bold text-gray-900">
                {currentProduct ? "Edit Product" : "New Product"}
              </h2>
              <button
                onClick={handleCloseProductForm}
                className="p-2 rounded-xl hover:bg-gray-100 text-gray-500 hover:text-gray-700 transition-all"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
  
            <div className="max-h-[calc(95vh-80px)] overflow-y-auto p-6">
              <ProductForm
                initialData={currentProduct ?? undefined}
                onSubmit={handleSubmitProduct}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};