import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import Navbar from "./components/Navbar/Navbar";
import { AuthModal } from "./components/Auth/AuthModal/AuthModal";
import {
  AdminRoute,
  CustomerRoute,
} from "./components/Routing/AdminRoute/AdminRoute";
import { LogoutProvider } from "./contexts/LogoutContext";
import { DeleteAccountProvider } from "./contexts/DeleteContext";
import { ConfirmDeleteProvider } from "./contexts/ConfirmDeleteContext";

function App() {
  const [showAuthModal, setShowAuthModal] = useState(false);

  return (
    <>
      <Navbar onAuthClick={() => setShowAuthModal(true)} />
      <ConfirmDeleteProvider>
        <DeleteAccountProvider>
          <LogoutProvider>
            <Routes>
              <Route path="/" element={<Home />} />

              <Route path="/panel" element={<AdminRoute />} />
              <Route path="/userProfile" element={<CustomerRoute />} />
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