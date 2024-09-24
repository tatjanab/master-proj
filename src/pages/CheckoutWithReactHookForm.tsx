import CartPaymentSummary from "../components/CartPaymentSummary";
import CheckoutForm from "../components/CheckoutForm";
import { CiLock } from "react-icons/ci";
import { Link } from "react-router-dom";

function CheckoutWithReactHookForm() {
  return (
    <>
      <div className='checkout-page flex min-h-screen w-full flex-col bg-gray-100 px-0 md:flex-row md:px-2'>
        <div className='shipping-form w-full p-2 md:w-2/3 md:p-5'>
          <Link to={"/"} className='checkout-logo'>
            <h1 className='text-sm md:text-lg'>ILS</h1>
          </Link>

          <h1 className='hidden md:block'>Checkout</h1>
          <div className='mt-0 md:mt-6'>
            <h2 className='self-start uppercase'>Ship to:</h2>
            <CheckoutForm />
          </div>
          <div className='mt-10 self-start'>
            <CiLock />
            <p>
              Secure Checkout <br /> Shopping is always safe and secure
            </p>
          </div>
        </div>
        <div className='checkout-summary w-full md:w-1/3 md:px-7 md:py-10'>
          <CartPaymentSummary />
        </div>
      </div>
    </>
  );
}

export default CheckoutWithReactHookForm;
