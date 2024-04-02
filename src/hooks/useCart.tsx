import { useToast } from "../ui/use-toast";
import { useState } from "react";
import { useEffect } from "react";

function useCart() {
  const { toast } = useToast();
  const [cartItems, setCartItems] = useState([]);
  const [totalPayment, setTotalPayment] = useState(0);

  useEffect(() => {
    fetchCart();
  }, []);

  useEffect(() => {
    if (!cartItems) return;

    const cartTotal = cartItems.reduce((acc, item) => acc + item.totalPrice, 0);
    const finalTotal = parseFloat(cartTotal.toFixed(2));
    setTotalPayment(finalTotal);
  }, [cartItems]);

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
      let productQuantity = parseInt(cart[existingItemIndex].quantity, 10);
      let updatedQuantity = productQuantity + productQuantity;
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

    localStorage.setItem("cart", JSON.stringify(cart));
    console.log(cart);
  };

  function fetchCart() {
    let cartItems = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(cartItems);
  }

  function removeItemFromCart(title: string) {
    const updatedCartItems = cartItems.filter((item) => item.title !== title);
    console.log("Updated cart items:", updatedCartItems);
    localStorage.setItem("cart", JSON.stringify(updatedCartItems));

    console.log("item removed with title" + title);
    setCartItems(updatedCartItems);
  }

  return { handleAddToCart, fetchCart, removeItemFromCart };
}

export default useCart;
