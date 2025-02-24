export type CartItem = {
  id: number;
  title: string;
  price: number;
  quantity: number;
  description: string;
  subtitle: string;
  currency: string;
  image: string;
  totalPrice: number;
};

export type handleAddToCart = (product: CartItem) => void;

export type handleProductQuantityChange = (
  productTitle: string,
  newQuantity: number,
) => void;
