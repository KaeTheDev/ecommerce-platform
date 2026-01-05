import { useState } from "react";
import { LoginForm } from "../LoginForm/LoginForm";
import { RegisterForm } from "../RegisterForm/RegisterForm";
import type { RegistrationFormData } from "../../../types/Registration";
import { useNavigate } from "react-router-dom";
import type { LoginFormData } from "../../../types/Login";

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AuthModal = ({ isOpen, onClose }: AuthModalProps) => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<"login" | "register">("login");

  if (!isOpen) return null;

   // Close when clicking outside modal
   const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleRegisterSubmit = async (formData: RegistrationFormData) => 
  {
    try {
      const response = await fetch('http://localhost:3000/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          password: formData.password,
          adminPasscode: formData.adminPasscode || undefined,
        }),
      });
  
      if (response.ok) {

        const data = await response.json();
        console.log('User Registered!', data);

        // Save JWT to localStorage
        localStorage.setItem('token', data.token);
        localStorage.setItem('user', JSON.stringify(data.user));

        // Redirect based on role
        if(data.user?.role === 'customer') {
          navigate('/userProfile');
        } else {
          navigate('/panel');
        }
        // Registration success - close modal, (ADD LATER: show success message)
        onClose();
      } else {
        const error = await response.json();
        console.error('Registration Failed:', error);
        // Show error to user (add toast/error state later)
      }
    } catch (error) {
      console.error('Network error:', error);
    }
  };

  const handleLoginSubmit = async (formData: LoginFormData) => {
    try {
      const response = await fetch('http://localhost:3000/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: formData.email,
          password: formData.password
        }),
      });

      if (response.ok) {
        const data = await response.json();

        // Save JWT to localStorage
        localStorage.setItem('token', data.token);
        localStorage.setItem('user', JSON.stringify(data.user));

        // Redirect based on role
        if(data.user?.role === 'customer') {
          navigate('/userProfile');
        } else {
          navigate('/panel');
        }
        // Registration success - close modal, (ADD LATER: show success message)
        onClose();
      } else {
        const error = await response.json();
        console.error('Login Failed:', error);
        // Show error to user (add toast/error state later)
      }
    } catch (error) {
      console.error('Network error:', error);
    }
  };

  return (
    <div
      className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={handleBackdropClick}
    >
      <div
        className="bg-white rounded-2xl shadow-2xl max-w-md w-full border border-gray-100"
        onClick={(e) => e.stopPropagation()}
      >
        <img src="/assets/LuxaristLogo.png" alt="Luxarist Logo" className="mx-auto h-15"  />
        {/* Header with tabs */}
        <div className="p-6 pb-0 border-b border-gray-100">
          {/* Tabs */}
          <div className="flex mb-4">
            <button
              onClick={() => setActiveTab("login")}
              className={`flex-1 py-3 px-4 rounded-xl text-sm font-medium transition-all ${
                activeTab === "login"
                  ? "bg-black text-white shadow-lg"
                  : "text-gray-500 hover:text-gray-700 hover:bg-gray-50"
              }`}
            >
              Login
            </button>
            <button
              onClick={() => setActiveTab("register")}
              className={`flex-1 py-3 px-4 rounded-xl text-sm font-medium transition-all ml-2 ${
                activeTab === "register"
                  ? "bg-black text-white shadow-lg"
                  : "text-gray-500 hover:text-gray-700 hover:bg-gray-50"
              }`}
            >
              Register
            </button>
          </div>
        </div>

        {/* Form content */}
        <div className="p-6">
          {activeTab === "login" ? <LoginForm onSubmit={handleLoginSubmit}/> : <RegisterForm onSubmit={handleRegisterSubmit}/>}
        </div>
      </div>
    </div>
  );
};