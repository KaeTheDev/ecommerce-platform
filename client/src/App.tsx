import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import Navbar from "./components/Navbar/Navbar";
import { AuthModal } from "./components/AuthModal/AuthModal";
import { AdminRoute, CustomerRoute } from "./components/ProtectedRoute/ProtectedRoute";

function App() {
  const [showAuthModal, setShowAuthModal] = useState(false);

  return (
    <>
      <Navbar onAuthClick={() => setShowAuthModal(true)} />
      <Routes>
        <Route path="/" element={<Home />}></Route>

          <Route path="/dashboard" element={<AdminRoute />}></Route>
          <Route path="/userProfile" element={<CustomerRoute />}></Route>
      </Routes>

      <AuthModal
        isOpen={showAuthModal}
        onClose={() => setShowAuthModal(false)}
      />
    </>
  );
}

export default App;