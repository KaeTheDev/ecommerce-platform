export const OrderDetails = () => {
  return (
    <>
      <div className="flex flex-col bg-white p-4 rounded-2xl shadow w-full">
        <div className="flex flex-row justify-between">
          <div className="flex flex-col">
            <p className="text-md">Order ORD-2025-1247</p>
            <p className="text-sm">Placed on December 14, 2025</p>
          </div>
          <span className="text-green-600 bg-green-200 px-1 py-2 rounded-2xl text-sm text-center">
            Delivered
          </span>
        </div>

        <p className="text-sm text-gray-950 mt-2 mb-2">Order Status</p>

        <div className="flex flex-row mb-2">
          <div className="flex flex-col mr-3">
            <span>&#10003;</span>
          </div>
          <div className="flex flex-col">
            <p className="text-">Pending</p>
            <p className="text-sm">December 14, 2025 at 07:00PM</p>
          </div>
        </div>

        <div className="flex flex-row mb-2">
          <div className="flex flex-col mr-3">
            <span>&#10003;</span>
          </div>
          <div className="flex flex-col">
            <p className="text-">Processing</p>
            <p className="text-sm">December 14, 2025 at 07:00PM</p>
          </div>
        </div>

        <div className="flex flex-row mb-2">
          <div className="flex flex-col mr-3">
            <span>&#10003;</span>
          </div>
          <div className="flex flex-col">
            <p className="text-">Shipped</p>
            <p className="text-sm">December 15, 2025 at 07:00PM</p>
          </div>
        </div>

        <div className="flex flex-row mb-2">
          <div className="flex flex-col mr-3">
            <span>&#10003;</span>
          </div>
          <div className="flex flex-col">
            <p className="text-">Delivered</p>
            <p className="text-sm">December 17, 2025 at 07:00PM</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col bg-white p-4 rounded-2xl shadow w-full mt-4">
        <p className="text-sm text-gray-950 mb-2">Order Items</p>
        <div className="flex flex-row justify-between">
          <div className="flex flex-row">
            <div className="flex flex-col mr-2">IMAGE</div>
            <div className="flex flex-col">
              <p className="text-sm text-gray-950">
                Solaire Statement Necklace
              </p>
              <p className="text-sm text-gray-400">Necklaces</p>
              <p className="text-sm text-gray-400">Quantity: 1</p>
            </div>
          </div>
          <p className="text-sm text-gray-400">$24,500</p>
        </div>
        <span className="border px-5 text-gray-300 mt-2"></span>

        <div className="flex flex-row justify-between mt-2">
          <div className="flex flex-row">
            <div className="flex flex-col mr-2">IMAGE</div>
            <div className="flex flex-col">
              <p className="text-sm text-gray-950">
                Solaire Statement Necklace
              </p>
              <p className="text-sm text-gray-400">Necklaces</p>
              <p className="text-sm text-gray-400">Quantity: 1</p>
            </div>
          </div>
          <p className="text-sm text-gray-400">$8,900</p>
        </div>
        <span className="border px-5 text-gray-300 mt-2 mb-2"></span>

        <div className="flex flex-col">
          <div className="flex flex-row justify-between">
            <p className="text-sm text-gray-500">Subtotal</p>
            <p className="text-sm text-gray-500">$25,300</p>
          </div>
          <div className="flex flex-row justify-between">
            <p className="text-sm text-gray-500">Shipping</p>
            <p className="text-sm text-gray-500">Free</p>
          </div>
          <span className="border px-5 text-gray-300 mt-2 mb-2"></span>
          <div className="flex flex-row justify-between">
            <p className="text-sm text-gray-700">Total</p>
            <p className="text-sm text-gray-700">$25,300</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-4 mt-4">
  {/* Shipping Address */}
  <div className="flex flex-row bg-white p-4 rounded-2xl shadow flex-1">
    <div className="w-12 h-12 bg-gray-200 rounded-md mr-2"></div>

    <div className="flex flex-col">
      <span className="font-medium">Shipping Address</span>
      <p className="text-sm text-gray-400">123 Luxury Address</p>
      <p className="text-sm text-gray-400">Beverly Hills, CA</p>
      <p className="text-sm text-gray-400">United States</p>
    </div>
  </div>

  {/* Payment Method */}
  <div className="flex flex-row bg-white p-4 rounded-2xl shadow flex-1">
    <div className="w-12 h-12 bg-gray-200 rounded-md mr-2"></div>
    <div className="flex flex-col">
      <span className="font-medium">Payment Method</span>
      <p className="text-sm text-gray-400">**** **** **** 4242</p>
      <p className="text-sm text-gray-400">Visa</p>
    </div>
  </div>
</div>

    </>
  );
};