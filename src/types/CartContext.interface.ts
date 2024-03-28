export interface CartContextInterface {
  cartItems: any[];
  handleAddToCart: () => number;
  getTotalItemsInCart: (
    productId: number,
    productTitle: string,
    productPrice: number,
    productQuantity: number,
    productCurrency: string,
    productImageUrl: string,
  ) => void;
}
