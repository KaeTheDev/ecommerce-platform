import React, {
  createContext,
  useState,
} from "react";
import type { User } from "../types/User";

export interface AuthContextType {
  user: User | null; // Current logged-in user
  isAuthenticated: boolean; // Flag for route checking
  isLoading: boolean; // While validating token
  login: (email: string, password: string) => Promise<void>;
  register: (userData: RegisterFormData) => Promise<void>;
  logout: () => void;
}

interface RegisterFormData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<User | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Login Function
  const login = async (email: string, password: string): Promise<void> => {
    setIsLoading(true);
    try {
      const res = await fetch("http://localhost:3000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      if (!res.ok) {
        throw new Error("Login failed");
      }

      const data = await res.json();

      // Save token for future requests
      localStorage.setItem("token", data.token);

      setUser(data.user);
      setIsAuthenticated(true);
    } catch (error) {
      console.error("Login error:", error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const register = async (userData: {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
  }): Promise<void> => {
    setIsLoading(true);
    try {
        const res = await fetch("http://localhost:3000/api/auth/register", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ userData }),
        });

        if(!res.ok) {
            throw new Error("Register failed");
        }

        const data = await res.json();
        
        // Save token for future requests
        localStorage.setItem("token", data.token);

        setUser(data.user);
        setIsAuthenticated(true);
    } catch (error) {
        console.error("Registration error", error);
        throw error;
    } finally {
        setIsLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);
  };

  const value: AuthContextType = {
    user,
    isAuthenticated,
    isLoading,
    login,
    register,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};