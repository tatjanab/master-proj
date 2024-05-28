import { useContext } from "react";
import Header from "../components/Header";
import CartTable from "../components/CartTable";
import CartPaymentSummary from "../components/CartPaymentSummary";
import { CartContext } from "../contexts/CartContext";
import { Link } from "react-router-dom";
import { MdOutlineRemoveShoppingCart } from "react-icons/md";

function CartPage() {
  const { cartItems, removeItemFromCart } = useContext(CartContext);

  return (
    <>
      <Header />
      <div className='px-2 bg-gray-100 z-50 w-full min-h-screen pt-5'>
        <div className='flex flex-row w-full gap-x-2'>
          {cartItems.length === 0 ? (
            <div className='flex flex-col justify-center items-center text-center w-full mt-10'>
              <MdOutlineRemoveShoppingCart className='text-4xl mb-5' />
              <p className='text-xl'>Cart: 0 items</p>
              <p className='text-sm mt-5'>Your shopping cart is empty!</p>
              <p className='text-sm'>
                Don't miss an opportunity to grab the best offers!
              </p>
              <Link to={"/"} className='mt-7 button-main outline'>
                Shop now!
              </Link>
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
                <Link to='/checkout' className='button-main thin mt-5'>
                  Go to Checkout
                </Link>
              </div>

              <div className='flex grow w-1/4'>
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
