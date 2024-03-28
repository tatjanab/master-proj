import ProductItemContent from "./ProductItemContent";
import useCart from "../hooks/useCart";

function ProductItem() {
  const { handleAddToCart } = useCart();

  const addToCart = (
    productId: number,
    productTitle: string,
    productPrice: number,
    productQuantity: number,
    productCurrency: string,
    productImageUrl: string,
  ) => {
    handleAddToCart(
      productId,
      productTitle,
      productPrice,
      productQuantity,
      productCurrency,
      productImageUrl,
    );
  };

  return (
    <div>
      <ProductItemContent handleAddToCart={addToCart} />
    </div>
  );
}

export default ProductItem;
