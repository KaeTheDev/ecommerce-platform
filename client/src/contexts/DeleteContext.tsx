import { createContext, useContext, useState, type ReactNode } from "react";

interface DeleteAccountContextType {
  requestDeleteAccount: () => void;
}

const DeleteAccountContext = createContext<DeleteAccountContextType | null>(
  null
);

export const DeleteAccountProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [showConfirm, setShowConfirm] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDeleteAccount = async () => {
    const token = localStorage.getItem("token");
    if (!token) return;

    try {
      setIsDeleting(true);

      const res = await fetch("/api/users/me", {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Failed to delete account");
      }

      // Hard logout + cleanup
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      window.location.href = "/";
    } catch (err) {
      console.error("Account deletion failed:", err);
    } finally {
      setIsDeleting(false);
      setShowConfirm(false);
    }
  };

  return (
    <DeleteAccountContext.Provider
      value={{ requestDeleteAccount: () => setShowConfirm(true) }}
    >
      {children}

      {showConfirm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
          <div className="bg-white rounded-2xl shadow-xl p-6 w-[90%] max-w-sm">
            <h2 className="text-lg text-center font-semibold mb-2 text-red-600">
              Delete your account?
            </h2>
            <p className="text-sm text-center text-gray-600 mb-6">
              This will permanently delete you account and all associated data.
              This action cannot be undone.
            </p>
            <div className="flex justify-center gap-3">
              <button
                onClick={() => setShowConfirm(false)}
                disabled={isDeleting}
                className="px-4 py-2 rounded-lg border hover:bg-black hover:text-white disabled:opacity-50"
              >
                Cancel
              </button>

              <button
                onClick={handleDeleteAccount}
                disabled={isDeleting}
                className="px-4 py-2 rounded-lg bg-red-600 hover:bg-red-800 text-white disabled:opacity-50"
              >
                {isDeleting ? "Deleting..." : "Yes, Delete"}
              </button>
            </div>
          </div>
        </div>
      )}
    </DeleteAccountContext.Provider>
  );
};

export const useDeleteAccount = () => {
  const ctx = useContext(DeleteAccountContext);
  if (!ctx)
    throw new Error(
      "useDeleteAccount must be used inside DeleteAccountProvider"
    );
  return ctx;
};