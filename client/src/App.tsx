import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import ProductDisplay from "./pages/ProductDisplay";
import Navbar from "./components/Navbar/Navbar";
import SiteFooter from "./components/SiteFooter/SiteFooter";
import { AuthModal } from "./components/Auth/AuthModal/AuthModal";
import {
  AdminRoute,
  CustomerRoute,
} from "./components/Routing/AdminRoute/AdminRoute";
import { LogoutProvider } from "./contexts/LogoutContext";
import { DeleteAccountProvider } from "./contexts/DeleteContext";
import { ConfirmDeleteProvider } from "./contexts/ConfirmDeleteContext";
import { CartModalProvider } from "./contexts/CartModalContext";
import UnifiedMobileDrawer from "./components/UnifiedMobileDrawer/UnifiedMobileDrawer";
import CartModal from "./components/Cart/CartModal/CartModal";
import Collections from "./pages/Collections";

function App() {
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <>
    <CartModalProvider>
    <ConfirmDeleteProvider>
        <DeleteAccountProvider>
          <LogoutProvider>
      <Navbar
        onAuthClick={() => setShowAuthModal(true)}
        onDrawerToggle={() => setDrawerOpen((prev) => !prev)}
      />

   
            
              <Routes>
                <Route path="/" element={<Home />} />

                <Route
                  path="/panel"
                  element={
                    <AdminRoute
                      drawerOpen={drawerOpen}
                      setDrawerOpen={setDrawerOpen}
                    />
                  }
                />
                <Route
                  path="/userProfile"
                  element={
                    <CustomerRoute
                      drawerOpen={drawerOpen}
                      setDrawerOpen={setDrawerOpen}
                    />
                  }
                />
                <Route path="/product/:id" element={<ProductDisplay />} />
                <Route path="/collections" element={<Collections />} />
              </Routes>

              {/* Global Footer */}
              <SiteFooter />

              <CartModal />

              <AuthModal
                isOpen={showAuthModal}
                onClose={() => setShowAuthModal(false)}
              />
              {/* Global drawer */}
              <UnifiedMobileDrawer
                isOpen={drawerOpen}
                onClose={() => setDrawerOpen(false)}
              />
          </LogoutProvider>
        </DeleteAccountProvider>
      </ConfirmDeleteProvider>
      </CartModalProvider>
    </>
  );
}

export default App;