import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { Product } from "../types/ProductType";
import useProductsByCategory from "./useProductsByCategory";

function useRelatedProducts() {
  const { categoryId, productId = "1" } = useParams<{
    categoryId: string;
    productId: string;
  }>();
  const { products } = useProductsByCategory(categoryId);

  const getRelatedProducts = async () => {
    return products?.filter(
      (product: Product) =>
        product.category.toLowerCase() === categoryId?.toLowerCase() &&
        parseInt(product.id) !== parseInt(productId),
    );
  };

  const { data: relatedProducts, isError } = useQuery<Product[]>({
    queryKey: ["related-products"],
    queryFn: getRelatedProducts,
  });

  return { categoryId, relatedProducts, isError };
}

export default useRelatedProducts;
