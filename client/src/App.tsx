import { Routes, Route } from "react-router-dom";
import { Dashboard } from "./pages/Dashboard";
import { Home } from "./pages/Home";
import { UserProfile } from "./pages/UserProfile";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <>
    <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/dashboard" element={<Dashboard />}></Route>
          <Route path="/userProfile" element={<UserProfile />}></Route>
        </Routes>
    </>
  );
}

export default App;