import CartItem from "../CartItem/CartItem"
import { useCartModal } from "../../../contexts/CartModalContext";

const CartModal = () => {
  const { isCartOpen, closeCart } = useCartModal();

  if(!isCartOpen) return null;

  return (
<>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/40 z-40"
        onClick={closeCart}
      />

      {/* Modal */}
      <div className="fixed top-20 right-6 z-50">
        <div className="w-80 p-4 bg-white rounded-lg shadow-lg">
          <div className="flex flex-col space-y-4">
            
            {/* Header */}
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium">CART (1)</p>
              <p
                className="text-xs text-gray-400 cursor-pointer hover:text-black"
                onClick={closeCart}
              >
                Remove All
              </p>
            </div>

            {/* Items */}
            <CartItem />

            {/* Total */}
            <div className="flex items-center justify-between text-sm font-medium">
              <p>TOTAL</p>
              <p>$599</p>
            </div>

            {/* Checkout */}
            <button className="w-full py-2 text-sm font-medium text-white bg-black rounded hover:bg-gray-700 transition">
              CHECKOUT
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartModal;