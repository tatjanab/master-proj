import { createContext, useContext, useEffect, useState } from "react";
import { useToast } from "../ui/use-toast";

// Create the context
export const CartContext = createContext(undefined);

export const useCartContext = () => {
  useContext(CartContext);
};

// Provider component
export const CartProvider = ({ children }) => {
  const { toast } = useToast();
  const [cartItems, setCartItems] = useState([]);
  const [totalPayment, setTotalPayment] = useState(0);
  // const [productQuantity, setProductQuantity] = useState(1);

  useEffect(() => {
    fetchCart();
  }, []);

  useEffect(() => {
    if (!cartItems) return;

    const cartTotal = cartItems.reduce((acc, item) => acc + item.totalPrice, 0);
    const finalTotal = parseFloat(cartTotal.toFixed(2));
    setTotalPayment(finalTotal);
  }, [cartItems]);

  function fetchCart() {
    let cartItems = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(cartItems);
  }

  // TODO: handle edge case where cart is undefined, important when going back in the browser from the cart page
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
        <div>
          <p>
            <span className='font-bold'>{productTitle} </span> added to the cart
          </p>
          <p>Quantity: {productQuantity}</p>
        </div>
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
      let existingQuantity = parseInt(cart[existingItemIndex].quantity, 10);
      let quantityToAdd = parseInt(productQuantity, 10);

      console.log("Existing Quantity:", existingQuantity); // Verify parsed value
      console.log("Quantity to Add:", quantityToAdd); // Verify parsed value

      let updatedQuantity = existingQuantity + quantityToAdd;
      console.log("Updated Quantity:", updatedQuantity); // Check the result of the addition

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

      console.log(cartItem);

      console.log("new item aa " + cartItem.title);

      cart.push(cartItem);
    }

    console.log(cart);
    localStorage.setItem("cart", JSON.stringify(cart));
    setCartItems(cart);
  };

  function removeItemFromCart(title: string) {
    const updatedCartItems = cartItems.filter((item) => item.title !== title);
    console.log("Updated cart items:", updatedCartItems);
    localStorage.setItem("cart", JSON.stringify(updatedCartItems));

    console.log("item removed with title" + title);
    setCartItems(updatedCartItems);
  }

  const handleProductQuantityChange = (
    productTitle: string,
    newQuantity: number,
  ): void => {
    let cart = JSON.parse(localStorage.getItem("cart") || "[]");
    let existingItemIndex = cart.findIndex(
      (item) => item.title === productTitle,
    );

    if (existingItemIndex > -1) {
      cart[existingItemIndex].quantity = newQuantity;
      cart[existingItemIndex].totalPrice = parseFloat(
        (cart[existingItemIndex].price * newQuantity).toFixed(2),
      );
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    setCartItems(cart);
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        setCartItems,
        handleAddToCart,
        handleProductQuantityChange,
        removeItemFromCart,
        // productQuantty,
        totalPayment,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
