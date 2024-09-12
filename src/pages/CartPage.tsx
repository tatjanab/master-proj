import { useContext, useEffect, useState } from "react";
import Header from "../components/header/Header";
import CartTable from "../components/CartTable";
import CartPaymentSummary from "../components/CartPaymentSummary";
import { CartContext } from "../contexts/CartContext";
import { Link } from "react-router-dom";
import { MdOutlineRemoveShoppingCart } from "react-icons/md";

function CartPage() {
  const { cartItems, removeItemFromCart, handleProductQuantityChange } =
    useContext(CartContext);
  const [quantities, setQuantities] = useState({});

  useEffect(() => {
    const initialQuantities = {};
    cartItems.forEach((item) => {
      initialQuantities[item.title] = item.quantity;
    });

    setQuantities(initialQuantities);
  }, [cartItems]);

  const handleQuantityChange = (title: string, newQuantity: number) => {
    setQuantities({
      ...quantities,
      [title]: newQuantity,
    });

    handleProductQuantityChange(title, newQuantity);
  };

  return (
    <>
      <Header />
      <div className='z-50 min-h-screen w-full bg-gray-100 px-2 pt-5'>
        <div className='flex w-full flex-row gap-x-2'>
          {cartItems.length === 0 ? (
            <div className='mt-10 flex w-full flex-col items-center justify-center text-center'>
              <MdOutlineRemoveShoppingCart className='mb-5 text-4xl' />
              <p className='text-xl'>Cart: 0 items</p>
              <p className='mt-5 text-sm'>Your shopping cart is empty!</p>
              <p className='text-sm'>
                Don't miss an opportunity to grab the best offers!
              </p>
              <Link to={"/"} className='button-main mt-7 outline'>
                Shop now!
              </Link>
            </div>
          ) : (
            <div className='flex w-full flex-row gap-x-2'>
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
                    setItemQuantity={handleQuantityChange}
                  />
                ))}
                <Link to='/checkout' className='button-main thin mt-5'>
                  Go to Checkout
                </Link>
              </div>

              <div className='flex w-1/4 grow'>
                <CartPaymentSummary />
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default CartPage;
