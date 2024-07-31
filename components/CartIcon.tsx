import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";

function CartIcon() {
  const { cartItems } = useContext(CartContext);

  // Ensure cartItems is an array before reducing
  if (!Array.isArray(cartItems)) {
    console.error("cartItems is not an array:", cartItems);
    return null; // or some fallback UI
  }

  const totalItemsInCart = cartItems.reduce((acc: number, product) => {
    return parseInt(acc + (product.quantity || 0));
  }, 0);

  return (
    <>
      {totalItemsInCart > 0 && (
        <div className='cart-number'>
          <span>{totalItemsInCart}</span>
        </div>
      )}
    </>
  );
}

export default CartIcon;
