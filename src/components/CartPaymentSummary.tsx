function CartPaymentSummary({ totalPayment }: { totalPayment: number }) {
  return (
    <div className='cart-summary flex-none'>
      <h2 className='text-xl mb-4'>Summary</h2>
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
      <button className='button-main mt-5'>Go to checkout</button>
    </div>
  );
}

export default CartPaymentSummary;
