import { useQuery } from "@tanstack/react-query";
import { Product } from "../types/ProductType";

function useProductsByCategory(categoryId: string) {
  // useEffect will be replaced with useQuery because of the easy error and loading handlers
  const fetchProducts = async (): Promise<Product[]> => {
    const response = await fetch(
      "https://master-shop-53976-default-rtdb.asia-southeast1.firebasedatabase.app/products.json",
    );

    const data = await response.json();

    const filteredProducts = data.filter(
      (product: Product) =>
        product.category.toLowerCase() === categoryId.toLowerCase(),
    );

    return filteredProducts;
  };

  const { data: products, isLoading } = useQuery({
    queryKey: ["products", categoryId],
    queryFn: fetchProducts,
  });

  return { products, isLoading };
}

export default useProductsByCategory;
