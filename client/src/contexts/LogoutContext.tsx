import { createContext, useContext, useState, type ReactNode } from "react";

interface LogoutContextType {
  requestLogout: () => void;
}

const LogoutContext = createContext<LogoutContextType | null>(null);

export const LogoutProvider = ({ children }: { children: ReactNode }) => {
  const [showConfirm, setShowConfirm] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    window.location.href = "/";
  };

  return (
    <LogoutContext.Provider
      value={{ requestLogout: () => setShowConfirm(true) }}
    >
      {children}

      {showConfirm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
          <div className="bg-white rounded-2xl shadow-xl p-6 w-[90%] max-w-sm">
            <h2 className="text-lg text-center font-semibold mb-2">
              Are you sure you want to log out?
            </h2>
            <p className="text-sm text-center text-gray-600 mb-6">
              You will be signed out of your account.
            </p>

            <div className="flex justify-center gap-3">
              <button
                onClick={() => setShowConfirm(false)}
                className="px-4 py-2 rounded-lg border hover:bg-black hover:text-white"
              >
                Cancel
              </button>
              <button
                onClick={handleLogout}
                className="px-4 py-2 rounded-lg bg-red-600 hover:bg-red-800 text-white"
              >
                Yes, Log Out
              </button>
            </div>
          </div>
        </div>
      )}
    </LogoutContext.Provider>
  );
};

export const useLogout = () => {
  const ctx = useContext(LogoutContext);
  if (!ctx) throw new Error("useLogout must be used inside LogoutProvider");
  return ctx;
};
