import { useCartStore } from "../stores/cartStore";
import { CartItem } from "../types/CartType";
function CartIcon() {
  const cartItems = useCartStore((state) => state.cartItems);

  const totalItemsInCart = cartItems.reduce(
    (acc: number, product: CartItem) => {
      // Ensure quantity is treated as a number
      const quantity =
        typeof product.quantity === "string"
          ? parseInt(product.quantity, 10)
          : product.quantity || 0;

      return acc + quantity;
    },
    0,
  );

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
