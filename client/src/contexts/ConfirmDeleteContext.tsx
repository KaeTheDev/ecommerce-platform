import { createContext, useContext, useState, type ReactNode } from "react";

interface ConfirmDeleteOptions {
    title: string;
    message: string;
    confirmText?: string;
    onConfirm: () => void;
}

interface ConfirmDeleteContextType {
    requestConfirm: (options: ConfirmDeleteOptions) => void;
}

const ConfirmDeleteContext = createContext<ConfirmDeleteContextType |null>(null);


export const ConfirmDeleteProvider = ({ children }: { children: ReactNode }) => {
    const [options, setOptions] = useState<ConfirmDeleteOptions | null>(null);

    const close = () => setOptions(null);

    return (
        <ConfirmDeleteContext.Provider
        value={{
            requestConfirm: (opts) => setOptions(opts),
        }}
        >
            {children}

            {options && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
                    <div className="bg-white rounded-2xl shadow-xl p-6 w-[90%] max-w-sm">
                        <h2 className="text-lg font-semibold text-center mb-2">
                            {options.title}
                        </h2>
                        <p className="text-sm text-center text-gray-600 mb-6">
                            {options.message}
                        </p>

                        <div className="flex justify-center gap-3">
                            <button 
                            onClick={close}
                            className="px-4 py-2 rounded-lg border hover:bg-black hover:text-white">
                                Cancel
                            </button>
                            <button 
                            onClick={() => {
                                options.onConfirm();
                                close();
                            }}
                            className="px-4 py-2 rounded-lg bg-red-600 hover:bg-red-800 text-white">
                                {options.confirmText ?? "Delete"}
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </ConfirmDeleteContext.Provider>
    );
};

export const useConfirmDelete = () => {
    const ctx = useContext(ConfirmDeleteContext);
    if(!ctx) throw new Error("useConfirmDelete must be used inside ConfirmDeleteProvider");
    return ctx;
};