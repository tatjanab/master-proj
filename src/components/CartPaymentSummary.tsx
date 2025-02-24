import { CiLock } from "react-icons/ci";
import { useCartStore } from "../stores/cartStore";

function CartPaymentSummary() {
  const totalPayment = useCartStore((state) => state.totalPayment);

  return (
    <div className='cart-summary flex-none'>
      <div className='mb-4 flex flex-row'>
        <CiLock className='mr-1 self-center' />
        <h2 className='text-xl'>Summary</h2>
      </div>
      <div className='mb-2 flex flex-row justify-between'>
        <h5 className='text-light'>Subtotal</h5>
        <p>$ {totalPayment}</p>
      </div>
      <div className='mb-2 flex flex-row justify-between'>
        <h5 className='text-light'>Shipping</h5>
        <p>Free</p>
      </div>
      <hr />
      <div className='my-2 flex flex-row justify-between'>
        <h5 className='text-light'>Order total</h5>
        <p>$ {totalPayment}</p>
      </div>
    </div>
  );
}

export default CartPaymentSummary;
