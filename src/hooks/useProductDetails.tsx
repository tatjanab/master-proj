import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { Product } from "../types/ProductType.ts";

function useProductDetails() {
  const { productId } = useParams<{ productId: string }>();
  const getProductDetails = async (productId: string) => {
    const response = await fetch(
      `https://master-shop-53976-default-rtdb.asia-southeast1.firebasedatabase.app/products/${productId}.json`,
    );
    const data = await response.json();

    return data;
  };

  const {
    data: productDetails,
    isLoading,
    isError,
  } = useQuery<Product>({
    queryKey: ["product", productId],
    queryFn: () => getProductDetails(productId!),
    staleTime: Infinity,
    enabled: !!productId, // ensure the query runs only when productId is available
  });

  return { productDetails, isLoading, isError };
}

export default useProductDetails;
