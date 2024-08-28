import CartPaymentSummary from "../components/CartPaymentSummary";
import CheckoutForm from "../components/CheckoutForm";
import { CiLock } from "react-icons/ci";
import { Link } from "react-router-dom";

function CheckoutWithReactHookForm() {
  return (
    <>
      <div className='checkout-page px-2 bg-gray-100 w-full min-h-screen'>
        <div className='shipping-form'>
          <Link to={"/"} className='checkout-logo'>
            <h1>ILS</h1>
          </Link>

          <h1>Checkout</h1>
          <div className='form-container'>
            <h2 className='uppercase self-start'>Ship to:</h2>
            <CheckoutForm />
          </div>
          <div className='mt-10 self-start'>
            <CiLock />
            <p>
              Secure Checkout <br /> Shopping is always safe and secure
            </p>
          </div>
        </div>
        <div className='checkout-summary px-7 py-10'>
          <CartPaymentSummary />
        </div>
      </div>
    </>
  );
}

export default CheckoutWithReactHookForm;
