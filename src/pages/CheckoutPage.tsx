import CartPaymentSummary from "../components/CartPaymentSummary";
import Header from "../components/Header";

function CheckoutPage() {
  return (
    <>
      <Header />
      <div className='px-7 pt-5 bg-gray-100 w-full min-h-screen flex flex-row'>
        <div className='shipping-form'></div>
        <CartPaymentSummary />
      </div>
    </>
  );
}

export default CheckoutPage;
