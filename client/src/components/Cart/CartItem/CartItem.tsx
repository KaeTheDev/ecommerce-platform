import QuantitySelector from "../../QuantitySelector/QuantitySelector"

const CartItem = () => {
  return (
    <div className="flex items-center gap-4 py-2">
      <img
        src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1200&q=80"
        alt="test product"
        className="w-20 h-20 object-cover rounded"
      />

      <div className="flex flex-col text-sm flex-1">
        <p className="font-medium">Product Name</p>
        <p className="text-gray-500">$49.99</p>
      </div>

      <QuantitySelector />
    </div>
  )
}

export default CartItem