import OrderSummaryItem from "./OrderSummaryItem";

const OrderSummary = () => {
    return (
      <section className="rounded-2xl border border-gray-200 bg-gray-50 p-5 text-sm space-y-5">
        <h2 className="text-base font-medium">Order Summary</h2>
  
        <div className="space-y-4">
          <OrderSummaryItem />
          <OrderSummaryItem />
          <OrderSummaryItem />
        </div>
  
        <div className="border-t border-gray-200 pt-4 space-y-2">
          <div className="flex justify-between">
            <span className="text-gray-600">Subtotal</span>
            <span>$53,500</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Shipping</span>
            <span>Free</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Tax (8%)</span>
            <span>$4,280.00</span>
          </div>
        </div>
  
        <div className="border-t border-gray-300 pt-4 flex justify-between font-medium">
          <span>Total</span>
          <span>$57,780.00</span>
        </div>
      </section>
    );
  };
  
  export default OrderSummary;