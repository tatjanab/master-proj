import { useQuery } from "@tanstack/react-query";
import { Product } from "../types/ProductType";

function useProductsByCategory(categoryId: string | undefined) {
  // useEffect will be replaced with useQuery because of the easy error and loading handlers
  const fetchProducts = async (
    categoryId: string | undefined,
  ): Promise<Product[]> => {
    const response = await fetch(
      "https://master-shop-53976-default-rtdb.asia-southeast1.firebasedatabase.app/products.json",
    );

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();
    let filteredProducts: Product[] = data.filter(
      (product: Product) =>
        product?.category.toLowerCase() === categoryId.toLowerCase(),
    );

    console.log("get category");

    return filteredProducts;
  };

  // TODO:data will never be considered stale because of staleTime param, check if you change the title of the products
  const {
    data: products,
    isLoading,
    isError,
  } = useQuery<Product[]>({
    queryKey: ["products", categoryId],
    queryFn: () => fetchProducts(categoryId),
    staleTime: Infinity,
  });

  return { products, isLoading, isError };
}

export default useProductsByCategory;
