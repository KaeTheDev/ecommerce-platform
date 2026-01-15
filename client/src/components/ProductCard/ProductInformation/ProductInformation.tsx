const ProductInformation = () => {
    return (
      <div className="flex flex-col gap-6 w-full max-w-xl">
        <div>
          <span className="text-xs tracking-widest text-gray-500">
            ENGAGEMENT RING
          </span>
          <h1 className="text-2xl font-semibold mt-1">
            Celestial Diamond Ring
          </h1>
          <p className="text-lg font-medium mt-2">$3,250</p>
        </div>
  
        <p className="text-sm text-gray-600 leading-relaxed">
          An exquisite diamond ring featuring a brilliant-cut center stone
          surrounded by a halo of smaller diamonds, set in luxurious 18K white
          gold.
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
          <a className="text-xs text-gray-500 hover:text-black w-fit" href="#">
            Size Guide →
          </a>
        </div>
  
        {/* Quantity */}
        <div className="flex flex-col gap-2">
          <span className="text-sm font-medium">Quantity</span>
          <div className="border px-4 py-2 w-24 text-center">1</div>
        </div>
  
        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-3">
          <button className="flex-1 py-4 bg-black text-white hover:bg-gray-800 transition">
            Add to Cart
          </button>
          <button className="py-4 px-5 bg-gray-100">♡ Save</button>
          <button className="py-4 px-5 bg-gray-100">Share</button>
        </div>
  
        {/* Details */}
        <div className="text-sm space-y-1">
          <p>SKU:</p>
          <p>Material:</p>
          <p>Gemstone:</p>
          <p>Weight:</p>
        </div>
  
        <div className="border-t pt-4 space-y-4">
          <div className="flex gap-4">
            <div className="w-12 h-12 bg-gray-200 rounded-md shrink-0" />
            <div>
              <p className="font-medium">Certified Authority</p>
              <p className="text-sm text-gray-600">
                Comes with a certificate of authenticity
              </p>
            </div>
          </div>
  
          <div className="flex gap-4">
            <div className="w-12 h-12 bg-gray-200 rounded-md shrink-0" />
            <div>
              <p className="font-medium">Lifetime Warranty</p>
              <p className="text-sm text-gray-600">
                Coverage for manufacturing defects
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default ProductInformation;  