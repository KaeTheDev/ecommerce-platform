import QuantitySelector from "../../QuantitySelector/QuantitySelector";

const ProductInformation = () => {
  return (
    <div className="flex flex-col gap-8 w-full max-w-xl">
      {/* Product Header */}
      <div className="flex flex-col gap-1">
        <span className="text-xs tracking-widest text-gray-500">
          ENGAGEMENT RING
        </span>
        <h1 className="text-2xl font-semibold">Celestial Diamond Ring</h1>
        <p className="text-lg font-medium mt-2">$3,250</p>
      </div>
      <div className="border text-gray-200"></div>
      {/* Description */}
      <p className="text-sm text-gray-600 leading-relaxed">
        An exquisite diamond ring featuring a brilliant-cut center stone
        surrounded by a halo of smaller diamonds, set in luxurious 18K white
        gold. This timeless piece combines classic elegance with modern
        sophistication.
      </p>

      {/* Ring Size */}
      <div className="flex flex-col gap-2">
        <span className="text-sm font-medium">Select Ring Size</span>
        <div className="flex flex-wrap gap-2">
          {["5", "6", "7", "8", "9", "10"].map((size) => (
            <button
              key={size}
              className="border px-4 py-2 text-sm hover:border-black transition"
            >
              {size}
            </button>
          ))}
        </div>
        <a href="#" className="text-xs text-gray-500 hover:text-black w-fit">
          Size Guide →
        </a>
      </div>

      {/* Quantity */}
      <div className="flex flex-col gap-2">
        <span className="text-sm font-medium">Quantity</span>
        <QuantitySelector />
      </div>

      {/* Add to Cart */}
      <button className="w-full py-4 bg-black text-white hover:bg-gray-800 transition">
        Add to Cart
      </button>

      {/* Save + Share */}
      <div className="flex gap-3">
        <button className="flex-1 py-3 bg-gray-100 hover:bg-gray-200 transition">
          ♡ Save
        </button>
        <button className="flex-1 py-3 bg-gray-100 hover:bg-gray-200 transition">
          Share
        </button>
      </div>

      {/* Product Details */}
      <div className="text-sm space-y-1">
        <p className="text-bold text-gray-800">Product Details</p>
        <p className="text-gray-500">SKU:</p>
        <p className="text-gray-500">Material:</p>
        <p className="text-gray-500">Gemstone:</p>
        <p className="text-gray-500">Weight:</p>
      </div>
      {/* Trust Badges */}
      <div className="border-t pt-6 space-y-4">
        <div className="flex gap-4">
          <div className="w-12 h-12 bg-gray-200 rounded-md shrink-0" />
          <div>
            <p className="font-medium">Certified Authority</p>
            <p className="text-sm text-gray-600">
              Comes with a certificate of authenticity and GIA grading report.
            </p>
          </div>
        </div>

        <div className="flex gap-4">
          <div className="w-12 h-12 bg-gray-200 rounded-md shrink-0" />
          <div>
            <p className="font-medium">Lifetime Warranty</p>
            <p className="text-sm text-gray-600">
              Comprehensive coverage for manufacturing defects.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductInformation;
