const OrderForm = () => {
    return (
      <section className="p-6 sm:p-8 bg-white rounded-2xl shadow-xl border border-gray-100 max-w-3xl mx-auto">
        {/* Header */}
        <h1 className="text-2xl font-light mb-1">🔒 Secure Checkout</h1>
        <p className="text-sm text-gray-600 mb-8">
          Complete your purchase securely
        </p>
  
        <form className="space-y-10">
          {/* ================= SHIPPING INFO ================= */}
          <div className="space-y-4">
            <h2 className="text-lg font-medium">Shipping Information</h2>
  
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-medium text-gray-700 block mb-1">
                  First Name
                </label>
                <input
                  type="text"
                  placeholder="Jane"
                  className="w-full h-11 px-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-gray-400 outline-none text-sm"
                />
              </div>
  
              <div>
                <label className="text-xs font-medium text-gray-700 block mb-1">
                  Last Name
                </label>
                <input
                  type="text"
                  placeholder="Doe"
                  className="w-full h-11 px-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-gray-400 outline-none text-sm"
                />
              </div>
            </div>
  
            <div>
              <label className="text-xs font-medium text-gray-700 block mb-1">
                Email Address
              </label>
              <input
                type="email"
                placeholder="your.email@example.com"
                className="w-full h-11 px-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-gray-400 outline-none text-sm"
              />
            </div>
  
            <div>
              <label className="text-xs font-medium text-gray-700 block mb-1">
                Phone Number
              </label>
              <input
                type="tel"
                placeholder="+1 (555) 123-4567"
                className="w-full h-11 px-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-gray-400 outline-none text-sm"
              />
            </div>
          </div>
  
          {/* ================= SHIPPING ADDRESS ================= */}
          <div className="space-y-4">
            <h2 className="text-lg font-medium">Shipping Address</h2>
  
            <div>
              <label className="text-xs font-medium text-gray-700 block mb-1">
                Address
              </label>
              <input
                type="text"
                placeholder="123 Main Street"
                className="w-full h-11 px-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-gray-400 outline-none text-sm"
              />
            </div>
  
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-medium text-gray-700 block mb-1">
                  City
                </label>
                <input
                  type="text"
                  placeholder="New York"
                  className="w-full h-11 px-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-gray-400 outline-none text-sm"
                />
              </div>
  
              <div>
                <label className="text-xs font-medium text-gray-700 block mb-1">
                  State
                </label>
                <input
                  type="text"
                  placeholder="NY"
                  className="w-full h-11 px-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-gray-400 outline-none text-sm"
                />
              </div>
            </div>
  
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-medium text-gray-700 block mb-1">
                  Postal Code
                </label>
                <input
                  type="text"
                  placeholder="10001"
                  className="w-full h-11 px-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-gray-400 outline-none text-sm"
                />
              </div>
  
              <div>
                <label className="text-xs font-medium text-gray-700 block mb-1">
                  Country
                </label>
                <select className="w-full h-11 px-3 rounded-xl border border-gray-300 bg-white focus:ring-2 focus:ring-gray-400 outline-none text-sm">
                  <option value="">Select a country</option>
                  <option value="US">United States</option>
                  <option value="CA">Canada</option>
                  <option value="GB">United Kingdom</option>
                  <option value="FR">France</option>
                  <option value="DE">Germany</option>
                  <option value="IT">Italy</option>
                  <option value="ES">Spain</option>
                  <option value="AU">Australia</option>
                </select>
              </div>
            </div>
          </div>
  
          {/* ================= PAYMENT INFO ================= */}
          <div className="space-y-4 pt-6 border-t border-gray-200">
            <h2 className="text-lg font-medium">Payment Information</h2>
  
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-medium text-gray-700 block mb-1">
                  Cardholder Name
                </label>
                <input
                  type="text"
                  placeholder="Jane Doe"
                  className="w-full h-11 px-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-gray-400 outline-none text-sm"
                />
              </div>
  
              <div>
                <label className="text-xs font-medium text-gray-700 block mb-1">
                  Card Number
                </label>
                <input
                  type="text"
                  placeholder="1234 5678 9012 3456"
                  className="w-full h-11 px-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-gray-400 outline-none text-sm"
                />
              </div>
            </div>
  
            <div className="grid grid-cols-2 gap-4 max-w-md">
              <div>
                <label className="text-xs font-medium text-gray-700 block mb-1">
                  Expiration Date
                </label>
                <input
                  type="text"
                  placeholder="MM / YY"
                  className="w-full h-11 px-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-gray-400 outline-none text-sm"
                />
              </div>
  
              <div>
                <label className="text-xs font-medium text-gray-700 block mb-1">
                  CVV
                </label>
                <input
                  type="password"
                  placeholder="123"
                  className="w-full h-11 px-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-gray-400 outline-none text-sm"
                />
              </div>
            </div>
          </div>
  
          {/* ================= SUBMIT ================= */}
          <button
            type="button"
            className="w-full h-12 rounded-xl bg-black text-white text-sm font-medium hover:bg-gray-900 transition"
          >
            Place Order
          </button>
        </form>
      </section>
    );
  };
  
  export default OrderForm;