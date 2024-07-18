export type CartItem = {
  id: number;
  title: string;
  price: number;
  quantity: number;
  productCurrency: string;
  image: string;
  totalPrice: number;
};

export type handleAddToCart = (
  productId: number,
  productTitle: string,
  productPrice: number,
  productQuantity: number,
  productCurrency: string,
  productImageUrl: string,
) => void;

export type handleProductQuantityChange = (
  productTitle: string,
  newQuantity: string,
) => void;

export type CartContextType = {
  cartItems: CartItem[];
  setCartItems: React.Dispatch<React.SetStateAction<CartItem[]>>;
  handleAddToCart: handleAddToCart;
  removeItemFromCart: (title: string) => void;
  handleProductQuantityChange: handleProductQuantityChange;
  totalPayment: number;
};
