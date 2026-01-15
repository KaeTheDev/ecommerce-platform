const ProductInformation = () => {
  return (
    <>
      <div className="flex flex-col">
        <span>ENGAGEMENT RING</span>
        <p>Celestial Diamond Ring</p>
        <p>$3,250</p>
        <span className="border w-3xl"></span>
        <p>
          An exquisite diamond ring featuring a brilliant-cut center stone
          surrounded by a halo of smaller diamonds, set in luxurious 18K white
          gold. This timeless piece combines classic elegance with modern
          sophistication.
        </p>

        <div className="flex flex-col">
          <span>Select Ring Size</span>
          <div className="flex flex-row">
            <p className="border p-4 mr-3">5</p>
            <p className="border p-4 mr-3">6</p>
            <p className="border p-4 mr-3">7</p>
            <p className="border p-4 mr-3">8</p>
            <p className="border p-4 mr-3">9</p>
            <p className="border p-4">10</p>
          </div>
          <a className="text-sm text-gray-500 hover:text-black" href="#">
            Size Guide 🔗
          </a>
        </div>

        <span>Quantity</span>
        <p>Picker</p>
        <button className="p-4 bg-black text-white hover:bg-gray-700">
          Add to Cart
        </button>
        <div className="flex flex-row">
          <button className="py-4 px-5 bg-gray-100 mr-3">♡ Save</button>
          <button className="py-4 px-5 bg-gray-100">Share</button>
        </div>

        <span>Product Details</span>
        <p>SKU:</p>
        <p>Material:</p>
        <p>Gemstone:</p>
        <p>Weight:</p>

        <div className="border mb-2"></div>
        <div className="flex flex-row mb-3">
          <div className="w-12 h-12 bg-gray-200 rounded-md shrink-0"></div>
          <div className="flex flex-col">
            <p>Certified Authority</p>
            <p>
              Comes with a certificate of authenticity and GIA grading report
            </p>
          </div>
        </div>

        <div className="flex flex-row">
          <div className="w-12 h-12 bg-gray-200 rounded-md shrink-0"></div>
          <div className="flex flex-col">
            <p>Lifetime Warranty</p>
            <p>Comprehensive coverage for manufacturing defects</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductInformation;