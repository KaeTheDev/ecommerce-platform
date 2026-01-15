import { useState } from "react";

const QuantitySelector = () => {
  const [quantity, setQuantity] = useState(1);

  const decrease = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const increase = () => {
    setQuantity(quantity + 1);
  };

  return (
    <div className="flex items-center border w-fit">
      <button
        onClick={decrease}
        className="px-4 py-2 text-lg hover:bg-gray-100"
        aria-label="Decrease quantity"
      >
        −
      </button>
      <span className="px-4 py-2 text-sm">{quantity}</span>
      <button
        onClick={increase}
        className="px-4 py-2 text-lg hover:bg-gray-100"
        aria-label="Increase quantity"
      >
        +
      </button>
    </div>
  );
};

export default QuantitySelector;