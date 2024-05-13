import { createContext, useContext } from "react";
import { useState } from "react";
import { useToast } from "../ui/use-toast";
export const CartContext = createContext(0);

export const useCartContext = () => {
  useContext(CartContext);
};

export const CartProvider = ({ children }) => {
  const { toast } = useToast();
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (
    productId: number,
    productTitle: string,
    productPrice: number,
    productQuantity: number,
    productCurrency: string,
    productImageUrl: string,
  ): void => {
    toast({
      title: (
        <p>
          <span className='font-bold'>{productTitle} </span> added to the cart
          <span>Quantity: {productQuantity}</span>
        </p>
      ),
      description: (
        <a href='/cart' className='block mt-2 underline underline-offset-4'>
          Go to cart
        </a>
      ),
    });
    let cart = JSON.parse(localStorage.getItem("cart") || "[]");

    let existingItemIndex = cart.findIndex(
      (item) => item.title === productTitle,
    );

    if (existingItemIndex > -1) {
      let updatedQuantity = cart[existingItemIndex].quantity + productQuantity;
      cart[existingItemIndex].quantity = updatedQuantity;
      cart[existingItemIndex].totalPrice = parseFloat(
        (productPrice * updatedQuantity).toFixed(2),
      );

      console.log("new item " + updatedQuantity);
    } else {
      let cartItem = {
        id: productId,
        title: productTitle,
        price: productPrice,
        quantity: productQuantity,
        currency: productCurrency,
        image: productImageUrl,
        totalPrice: parseFloat((productPrice * productQuantity).toFixed(2)),
      };

      cart.push(cartItem);
    }

    setCartItems(cart);
  };

  const getTotalItemsInCart = (): void => {
    cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  return (
    <CartContext.Provider
      value={{ cartItems, handleAddToCart, getTotalItemsInCart }}
    >
      {children}
    </CartContext.Provider>
  );
};
