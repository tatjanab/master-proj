import { useParams } from "react-router-dom";
import { Product } from "../types/ProductType";
import useProductsByCategory from "./useProductsByCategory";
import { useMemo } from "react";

function useRelatedProducts() {
  const { categoryId, productId = "1" } = useParams<{
    categoryId: string;
    productId: string;
  }>();
  const { products } = useProductsByCategory(categoryId);

  const relatedProducts = useMemo(() => {
    if (!products) return [];

    return products?.filter(
      (product: Product) =>
        product.category.toLowerCase() === categoryId?.toLowerCase() &&
        parseInt(product.id) !== parseInt(productId),
    );
  }, [products, categoryId, productId]);

  return { categoryId, relatedProducts };
}

export default useRelatedProducts;
