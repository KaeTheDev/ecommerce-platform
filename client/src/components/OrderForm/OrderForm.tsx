const OrderForm = () => {
  return (
    <section className="px-4 py-10">
      <h1 className="text-2xl font-light mb-1">🔒 Secure Checkout</h1>
      <p className="text-sm text-gray-600 mb-6">
        Complete your purchase securely
      </p>

      <form className="max-w-xl p-6 space-y-8 bg-white rounded-2xl shadow-xl border border-gray-100">
        {/* Contact Info */}
        <div className="space-y-4">
          <h2 className="text-lg font-medium">Contact Information</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="text-xs font-medium text-gray-700 block mb-1">
                First Name
              </label>
              <input
                type="text"
                name="firstName"
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
                name="lastName"
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
              name="email"
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
              name="phoneNumber"
              placeholder="+1 (555) 123-4567"
              className="w-full h-11 px-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-gray-400 outline-none text-sm"
            />
          </div>
        </div>

        {/* Shipping Address */}
        <div className="space-y-4">
          <h2 className="text-lg font-medium">Shipping Address</h2>

          <div>
            <label className="text-xs font-medium text-gray-700 block mb-1">
              Address
            </label>
            <input
              type="text"
              name="address"
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
                name="city"
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
                name="state"
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
                name="postalCode"
                placeholder="10001"
                className="w-full h-11 px-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-gray-400 outline-none text-sm"
              />
            </div>

            <div>
              <label className="text-xs font-medium text-gray-700 block mb-1">
                Country
              </label>
              <select
                name="country"
                className="w-full h-11 px-3 rounded-xl border border-gray-300 bg-white focus:ring-2 focus:ring-gray-400 outline-none text-sm"
              >
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

        {/* Payment */}
        <div className="space-y-4">
          <h2 className="text-lg font-medium">Payment Details</h2>

          <div>
            <label className="text-xs font-medium text-gray-700 block mb-1">
              Cardholder Name
            </label>
            <input
              type="text"
              name="cardHolderName"
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
              name="cardNumber"
              placeholder="1234 5678 9012 3456"
              className="w-full h-11 px-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-gray-400 outline-none text-sm"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-xs font-medium text-gray-700 block mb-1">
                Expiration Date
              </label>
              <input
                type="text"
                name="expirationDate"
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
                name="cvv"
                placeholder="123"
                className="w-full h-11 px-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-gray-400 outline-none text-sm"
              />
            </div>
          </div>
        </div>

        {/* Submit */}
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
