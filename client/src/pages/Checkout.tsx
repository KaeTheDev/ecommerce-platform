import OrderForm from "../components/OrderForm/OrderForm";
import OrderSummary from "../components/OrderSummary/OrderSummary";

const Checkout = () => {
    return (
      <section className="px-4 sm:px-6 lg:px-10 py-12">
        <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
          
          {/* Order Form */}
          <div className="lg:col-span-2">
            <OrderForm />
          </div>
  
          {/* Order Summary */}
          <aside className="lg:col-span-1 lg:max-w-sm w-full lg:sticky lg:top-24 h-fit">
            <OrderSummary />
          </aside>
  
        </div>
      </section>
    );
  };
export default Checkout;  