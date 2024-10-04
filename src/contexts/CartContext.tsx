import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { useToast } from "../ui/use-toast";
import { useMemo } from "react";
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
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCartContext must be used within a CartProvider");
  }
  return context;
};

// Provider component
export const CartProvider = ({ children }: CartProviderProps) => {
  const { toast } = useToast();
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  useEffect(() => {
    fetchCart();
  }, []);

  const totalPayment = useMemo(() => {
    if (!cartItems) return;
    return parseFloat(
      cartItems.reduce((acc, item) => acc + item.totalPrice, 0).toFixed(2),
    );
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

      let updatedQuantity = existingQuantity + quantityToAdd;

      cart[existingItemIndex].quantity = updatedQuantity;
      cart[existingItemIndex].totalPrice = parseFloat(
        (productPrice * updatedQuantity).toFixed(2),
      );
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
    setCartItems(cart);
  };

  function removeItemFromCart(title: string) {
    const updatedCartItems = cartItems.filter((item) => item.title !== title);
    localStorage.setItem("cart", JSON.stringify(updatedCartItems));

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
        totalPayment,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
