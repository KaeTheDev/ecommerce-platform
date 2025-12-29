import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Dashboard } from "./pages/Dashboard";
import { Home } from "./pages/Home";
import { UserProfile } from "./pages/UserProfile";
import Navbar from "./components/Navbar/Navbar";
import { AuthModal } from "./components/AuthModal/AuthModal";

function App() {
  const [showAuthModal, setShowAuthModal] = useState(false);

  return (
    <>
    <Navbar onAuthClick={() => setShowAuthModal(true)} />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/dashboard" element={<Dashboard />}></Route>
          <Route path="/userProfile" element={<UserProfile />}></Route>
        </Routes>

        <AuthModal 
        isOpen={showAuthModal} 
        onClose={() => setShowAuthModal(false)} 
      />
    </>
  );
}

export default App;