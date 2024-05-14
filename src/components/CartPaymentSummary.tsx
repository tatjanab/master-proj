import { CiLock } from "react-icons/ci";
import { CartContext } from "../contexts/CartContext";
import { useContext } from "react";

function CartPaymentSummary() {
  const { totalPayment } = useContext(CartContext);

  return (
    <div className='cart-summary flex-none'>
      <div className='flex flex-row mb-4'>
        <CiLock className='self-center mr-1' />
        <h2 className='text-xl'>Summary</h2>
      </div>
      <div className='flex flex-row justify-between mb-2'>
        <h5 className='text-light'>Subtotal</h5>
        <p>$ {totalPayment}</p>
      </div>
      <div className='flex flex-row justify-between mb-2'>
        <h5 className='text-light'>Shipping</h5>
        <p>Free</p>
      </div>
      <div className='flex flex-row justify-between mb-2'>
        <h5 className='text-light'>Estimated total</h5>
        <p>$ {totalPayment}</p>
      </div>
    </div>
  );
}

export default CartPaymentSummary;
