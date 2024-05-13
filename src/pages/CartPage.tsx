import { useEffect, useState } from "react";
import Header from "../components/Header";
import CartTable from "../components/CartTable";
import CartPaymentSummary from "../components/CartPaymentSummary";
import useCart from "../hooks/useCart";

function CartPage() {
  const [cartItems, setCartItems] = useState([]);
  const [totalPayment, setTotalPayment] = useState(0);
  const { calculateTotal, removeItemFromCart, fetchCart } = useCart(
    setCartItems,
    setTotalPayment,
  );

  useEffect(() => {
    let cartItems = fetchCart();
    setCartItems(cartItems);

    calculateTotal(cartItems);
  }, []);

  return (
    <>
      <Header />
      <div className='px-2 bg-gray-100 z-50 w-full h-screen pt-5'>
        <div className='flex flex-row w-full gap-x-2'>
          {cartItems.length === 0 ? (
            <div className='flex justify-center w-full'>
              <div className='mt-5'>Your shopping cart is empty!</div>
            </div>
          ) : (
            <div className='flex flex-row w-full gap-x-2'>
              <div className='table w-3/4'>
                {cartItems.map((cartItem) => (
                  <CartTable
                    key={cartItem.id}
                    title={cartItem.title}
                    price={cartItem.price}
                    quantity={cartItem.quantity}
                    currency={cartItem.currency}
                    totalPrice={cartItem.totalPrice}
                    image={cartItem.image}
                    removeItemFromCart={removeItemFromCart}
                  />
                ))}
              </div>

              <div className='flex grow w-1/4'>
                <CartPaymentSummary totalPayment={totalPayment} />
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default CartPage;
