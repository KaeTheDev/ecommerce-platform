import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Dashboard } from "./pages/Dashboard";
import { Home } from "./pages/Home";
import { UserProfile } from "./pages/UserProfile";
import Navbar from "./components/Navbar/Navbar";
import { AuthModal } from "./components/AuthModal/AuthModal";
import { ProtectedRoute } from "./components/ProtectedRoute/ProtectedRoute";

function App() {
  const [showAuthModal, setShowAuthModal] = useState(false);

  return (
    <>
      <Navbar onAuthClick={() => setShowAuthModal(true)} />
      <Routes>
        <Route path="/" element={<Home />}></Route>

        <Route element={<ProtectedRoute />}>
          <Route path="/dashboard" element={<Dashboard />}></Route>
          <Route path="/userProfile" element={<UserProfile />}></Route>
        </Route>
      </Routes>

      <AuthModal
        isOpen={showAuthModal}
        onClose={() => setShowAuthModal(false)}
      />
    </>
  );
}

export default App;