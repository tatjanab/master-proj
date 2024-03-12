import { useEffect, useState } from "react";
import Header from "../components/Header";
import CartTable from "../components/CartTable";
import CartPaymentSummary from "../components/CartPaymentSummary";

useEffect;

function CartPage() {
  const [cartItems, setCartItems] = useState([]);
  const [totalPayment, setTotalPayment] = useState(0);

  function fetchCart() {
    let cartItems = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(cartItems);
  }

  useEffect(() => {
    fetchCart();
  }, []);

  useEffect(() => {
    if (!cartItems) return;

    const cartTotal = cartItems.reduce((acc, item) => acc + item.totalPrice, 0);
    const finalTotal = parseFloat(cartTotal.toFixed(2));
    setTotalPayment(finalTotal);
  }, [cartItems]);

  return (
    <>
      <Header />
      <div className='px-2 bg-gray-100 z-50 w-full h-screen pt-5'>
        <div className='flex flex-row w-full gap-x-2'>
          {cartItems.length === 0 ? (
            <h2>Your shopping cart is empty!</h2>
          ) : (
            <div className='flex flex-row w-full gap-x-2'>
              <div className='table w-3/4'>
                <h2 className='text-xl mb-4'>Cart</h2>

                {cartItems.map((cartItem) => (
                  <CartTable
                    key={cartItem.id}
                    title={cartItem.title}
                    price={cartItem.price}
                    quantity={cartItem.quantity}
                    currency={cartItem.currency}
                    totalPrice={cartItem.totalPrice}
                    image={cartItem.image}
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
