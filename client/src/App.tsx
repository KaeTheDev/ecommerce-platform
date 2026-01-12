import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import Navbar from "./components/Navbar/Navbar";
import { AuthModal } from "./components/Auth/AuthModal/AuthModal";
import { AdminRoute, CustomerRoute } from "./components/Routing/AdminRoute/AdminRoute";
import { LogoutProvider } from "./contexts/LogoutContext";
import { DeleteAccountProvider } from "./contexts/DeleteContext";
import { ConfirmDeleteProvider } from "./contexts/ConfirmDeleteContext";

function App() {
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false); 

  return (
    <>
      <Navbar 
      onAuthClick={() => setShowAuthModal(true)} 
      onDrawerToggle={() => setDrawerOpen(prev => !prev)} 
      />
    <ConfirmDeleteProvider>
        <DeleteAccountProvider>
          <LogoutProvider>
            <Routes>
              <Route path="/" element={<Home />} />

              <Route path="/panel" element={<AdminRoute drawerOpen={drawerOpen}
                      setDrawerOpen={setDrawerOpen}  />} />
              <Route path="/userProfile" element={<CustomerRoute  drawerOpen={drawerOpen}
                      setDrawerOpen={setDrawerOpen} />} />
            </Routes>

            <AuthModal
              isOpen={showAuthModal}
              onClose={() => setShowAuthModal(false)}
            />
          </LogoutProvider>
        </DeleteAccountProvider>
      </ConfirmDeleteProvider>
    </>
  );
}

export default App;