const OrderSummaryItem = () => {
    return (
      <div className="flex items-start justify-between mb-6">
        {/* Left: Image + details */}
        <div className="flex">
          <div className="w-16 h-16 rounded-2xl bg-linear-to-br from-black to-gray-900 flex items-center justify-center text-2xl hover:scale-110 transition-transform" />
  
          <div className="flex flex-col ml-3">
            <p className="text-sm font-medium">Etoile Diamond Bracelet</p>
            <p className="text-sm text-gray-500">Bracelets</p>
            <p className="text-sm text-gray-500">Qty: 1</p>
          </div>
        </div>
  
        {/* Right: Price */}
        <p className="text-sm font-semibold whitespace-nowrap">
          $12,500
        </p>
      </div>
    );
  };
  
  export default OrderSummaryItem;  