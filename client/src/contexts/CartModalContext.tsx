import { createContext, useContext, useState, type ReactNode, useCallback } from "react";


/* =====================
    Types
===================== */

type CartModalContextType = {
    isCartOpen: boolean;
    openCart: () => void;
    closeCart: () => void;
    toggleCart: () => void;
};

type CartModalProviderProps = {
    children: ReactNode;
};

/* =====================
    Context
===================== */

const CartModalContext = createContext<CartModalContextType | undefined>(undefined);

/* =====================
    Provider
===================== */

export function CartModalProvider({
    children,
}: CartModalProviderProps) {
    const [isCartOpen, setIsCartOpen] = useState(false);

    const openCart = useCallback(() => setIsCartOpen(true), []);
    const closeCart = useCallback(() => setIsCartOpen(false), []);
    const toggleCart = useCallback(
        () => setIsCartOpen((prev) => !prev), []
    );

    return (
        <CartModalContext.Provider
        value={{ isCartOpen, openCart, closeCart, toggleCart }}>
            {children}
        </CartModalContext.Provider>
    );
}

/* =====================
    Hook
===================== */

export function useCartModal() {
    const context = useContext(CartModalContext);

    if(!context) {
        throw new Error("useCartModal must be used within CartModalProvider");
    }

    return context;
}