import { useState, useEffect } from "react";
import axios from "axios";

interface Product {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  category: string;
  price: number;
  currency: string;
  image: string;
}

function useProductsByCategory(categoryId: string) {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchProducts = () => {
    setLoading(true); // Reset the loading state, important because otherwise navigating between different categoryId routes will not display the loader correcty and will result in bad UX

    axios
      .get<Product[]>(
        "https://master-shop-53976-default-rtdb.asia-southeast1.firebasedatabase.app/products.json",
      )
      .then((response) => {
        const filteredProducts = response.data.filter(
          (product) =>
            product.category.toLowerCase() === categoryId.toLowerCase(),
        );

        setProducts(filteredProducts);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Unable to fetch products with the category", error);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchProducts();
  }, [categoryId]);

  return { products, loading };
}

export default useProductsByCategory;
