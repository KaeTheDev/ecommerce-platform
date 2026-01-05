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

function App() {
  const [showAuthModal, setShowAuthModal] = useState(false);

  return (
    <>
      <Navbar onAuthClick={() => setShowAuthModal(true)} />

      <LogoutProvider>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/panel" element={<AdminRoute />} />
          <Route path="/userProfile" element={<CustomerRoute />} />
        </Routes>
      </LogoutProvider>

      <AuthModal
        isOpen={showAuthModal}
        onClose={() => setShowAuthModal(false)}
      />
    </>
  );
}

export default App;