import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";

function CartIcon() {
  const { cartItems } = useContext(CartContext);

  const totalItemsInCart = cartItems.reduce((acc, product) => {
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
