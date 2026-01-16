import { createContext, useContext, useReducer, type ReactNode } from "react";
  
  /* =====================
     Types
  ===================== */
  
  export type CartItem = {
    slug: string;
    qty: number;
    name: string;
    price: number;
    image?: string;
  };
  
  type CartState = CartItem[];
  
  type CartAction =
    | {
        type: "ADD_ITEM";
        payload: { product: Omit<CartItem, "qty">; quantity: number };
      }
    | {
        type: "UPDATE_QTY";
        payload: { slug: string; qty: number };
      }
    | {
        type: "REMOVE_ITEM";
        payload: { slug: string };
      }
    | { type: "CLEAR" };
  
  /* =====================
     Contexts
  ===================== */
  
  const CartStateContext = createContext<CartState | undefined>(
    undefined
  );
  const CartDispatchContext = createContext<
    React.Dispatch<CartAction> | undefined
  >(undefined);
  
  /* =====================
     Reducer
  ===================== */
  
  function cartReducer(
    state: CartState,
    action: CartAction
  ): CartState {
    let newState: CartState;
  
    switch (action.type) {
      case "ADD_ITEM": {
        const { product, quantity } = action.payload;
        const existing = state.find(
          (item) => item.slug === product.slug
        );
  
        newState = existing
          ? state.map((item) =>
              item.slug === product.slug
                ? { ...item, qty: item.qty + quantity }
                : item
            )
          : [...state, { ...product, qty: quantity }];
        break;
      }
  
      case "UPDATE_QTY":
        newState = state.map((item) =>
          item.slug === action.payload.slug
            ? { ...item, qty: action.payload.qty }
            : item
        );
        break;
  
      case "REMOVE_ITEM":
        newState = state.filter(
          (item) => item.slug !== action.payload.slug
        );
        break;
  
      case "CLEAR":
        newState = [];
        break;
  
      default:
        return state;
    }
  
    if (typeof window !== "undefined") {
      localStorage.setItem("cart", JSON.stringify(newState));
    }
  
    return newState;
  }
  
  /* =====================
     Provider
  ===================== */
  
  type CartProviderProps = {
    children: ReactNode;
  };
  
  function initCart(): CartState {
    if (typeof window === "undefined") return [];
    const stored = localStorage.getItem("cart");
    return stored ? (JSON.parse(stored) as CartState) : [];
  }
  
  export function CartProvider({ children }: CartProviderProps) {
    const [state, dispatch] = useReducer(cartReducer, [], initCart);
  
    return (
      <CartStateContext.Provider value={state}>
        <CartDispatchContext.Provider value={dispatch}>
          {children}
        </CartDispatchContext.Provider>
      </CartStateContext.Provider>
    );
  }
  
  /* =====================
     Hooks
  ===================== */
  
  export function useCart() {
    const context = useContext(CartStateContext);
    if (!context) {
      throw new Error("useCart must be used within CartProvider");
    }
    return context;
  }
  
  export function useCartDispatch() {
    const context = useContext(CartDispatchContext);
    if (!context) {
      throw new Error(
        "useCartDispatch must be used within CartProvider"
      );
    }
    return context;
  }