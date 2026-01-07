import { OrderDetails } from "../../../pages/OrderDetails";

const MyOrders = () => {
  return (
    <>
    <div className="flex flex-col gap-4">
      {/* Orders Card Container */}
      <div className="flex flex-col bg-white p-4 rounded-2xl shadow w-full gap-4">
        {/* Header */}
        <div className="flex flex-col">
          <p className="text-md font-semibold text-black">My Orders</p>
          <span className="text-sm text-gray-400">1 total order</span>
        </div>
        {/* Single Order (clickable) */}
        <button className="flex flex-row items-start gap-4 p-4 rounded-2xl border border-gray-300 hover:border-gray-800 transition-all w-full text-left">
          {/* Icon / Image Placeholder */}
          <div className="flex flex-col">
            <span className="border rounded-2xl px-3 py-4">ICON</span>
          </div>

          {/* Order Details */}
          <div className="flex flex-col gap-1 flex-1">
            <div className="flex flex-row items-center gap-3">
              <p className="text-md font-medium">ORD-2025-1247</p>
              <span className="text-green-600 bg-green-200 px-2 py-1 rounded-2xl text-sm">
                Delivered
              </span>
            </div>
            <p className="text-sm text-gray-500">2 items</p>
            <p className="text-sm text-gray-500">Ordered on Dec. 14, 2025</p>

            <div className="flex flex-row gap-2 mt-2">
              <div className="w-12 h-12 bg-gray-200 rounded-md"></div>
              <div className="w-12 h-12 bg-gray-200 rounded-md"></div>
            </div>
          </div>

          {/* Price and Arrow */}
          <div className="flex flex-col justify-between items-end">
            <div className="flex flex-row items-center gap-2">
              <div className="text-right">
                <p className="text-sm text-gray-500">Total</p>
                <p className="text-md text-gray-500">$25,300</p>
              </div>

              {/* Gray arrow */}
              <span className="text-gray-500 font-bold text-lg flex items-center justify-center">
                &gt;
              </span>
            </div>
          </div>
        </button>
      </div>
    </div>

    {/* Shows when clicked on order item under my orders */}
    <OrderDetails /> 
    </>
  );
};

export default MyOrders;