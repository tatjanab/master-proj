import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { useToast } from "../ui/use-toast";
import {
  CartContextType,
  handleAddToCart,
  handleProductQuantityChange,
  CartItem,
} from "../types/CartContextType";

type CartProviderProps = {
  children: ReactNode;
};

// Create the context
export const CartContext = createContext<CartContextType | undefined>(
  undefined,
);

export const useCartContext = () => {
  useContext(CartContext);
};
// Provider component
export const CartProvider = ({ children }: CartProviderProps) => {
  const { toast } = useToast();
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
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

  function fetchCart(): void {
    const storedCart = localStorage.getItem("cart");
    let cartItems: CartItem[] = storedCart ? JSON.parse(storedCart) : [];
    setCartItems(cartItems);
  }

  // TODO: handle edge case where cart is undefined, important when going back in the browser from the cart page
  const handleAddToCart: handleAddToCart = (
    productId,
    productTitle,
    productPrice,
    productQuantity,
    productCurrency,
    productImageUrl,
  ) => {
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
        <a href='/cart' className='mt-2 block underline underline-offset-4'>
          Go to cart
        </a>
      ),
    });
    let cart = JSON.parse(localStorage.getItem("cart") || "[]");
    let existingItemIndex = cart.findIndex(
      (item: CartItem) => item.title === productTitle,
    );

    if (existingItemIndex > -1) {
      let existingQuantity = parseInt(cart[existingItemIndex].quantity, 10);
      let quantityToAdd =
        typeof productQuantity === "string"
          ? parseInt(productQuantity, 10)
          : productQuantity;

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

  const handleProductQuantityChange: handleProductQuantityChange = (
    productTitle,
    newQuantity,
  ) => {
    let cart = JSON.parse(localStorage.getItem("cart") || "[]");
    let existingItemIndex = cart.findIndex(
      (item: CartItem) => item.title === productTitle,
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
