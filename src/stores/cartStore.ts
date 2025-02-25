import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import {
  CartItem,
  handleAddToCart,
  handleProductQuantityChange,
} from "../types/CartType";

type CartStore = {
  cartItems: CartItem[];
  totalPayment: number;
  setCartItems: (cartItems: CartItem[]) => void;
  handleAddToCart: handleAddToCart;
  handleProductQuantityChange: handleProductQuantityChange;
  removeItemFromCart: (title: string) => void;
  fetchCart: () => void;
};

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      cartItems: [],
      totalPayment: 0,

      setCartItems: (items) => {
        const totalPayment = items.reduce(
          (acc, item) => acc + item.totalPrice,
          0,
        );
        set({
          cartItems: items,
          totalPayment: parseFloat(totalPayment.toFixed(2)),
        });
      },

      fetchCart: () => {
        const cartItems = get().cartItems || [];
        get().setCartItems(cartItems);
      },

      handleAddToCart: (product) => {
        set((state) => {
          const cart = [...state.cartItems];
          const existingItem = cart.find(
            (item) => item.title === product.title,
          );

          if (existingItem) {
            existingItem.quantity =
              (existingItem.quantity || 0) + (product.quantity || 1);
            existingItem.totalPrice = parseFloat(
              (existingItem.quantity * existingItem.price).toFixed(2),
            );
          } else {
            cart.push({
              ...product,
              quantity: product.quantity || 1,
              totalPrice: parseFloat(
                (product.price * (product.quantity || 1)).toFixed(2),
              ),
            });
          }

          return {
            cartItems: cart,
            totalPayment: parseFloat(
              cart.reduce((acc, item) => acc + item.totalPrice, 0).toFixed(2),
            ),
          };
        });
      },

      removeItemFromCart: (title: string) => {
        const updatedCartItems = get().cartItems.filter(
          (item) => item.title !== title,
        );
        set({
          cartItems: updatedCartItems,
          totalPayment: updatedCartItems.reduce(
            (acc, item) => acc + item.totalPrice,
            0,
          ),
        });
      },

      handleProductQuantityChange: (
        productTitle: string,
        newQuantity: number,
      ) => {
        const updatedCart = get().cartItems.map((item) =>
          item.title === productTitle
            ? {
                ...item,
                quantity: newQuantity,
                totalPrice: parseFloat((item.price * newQuantity).toFixed(2)),
              }
            : item,
        );

        set({
          cartItems: updatedCart,
          totalPayment: updatedCart.reduce(
            (acc, item) => acc + item.totalPrice,
            0,
          ),
        });
      },
    }),
    { name: "cart", storage: createJSONStorage(() => localStorage) },
  ),
);
