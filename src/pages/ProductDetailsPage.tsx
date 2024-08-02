import { useParams } from "react-router-dom";
import Header from "../components/Header";
import ProductItem from "../components/ProductItem";
import ProductItemLoader from "../components/ProductItemLoader";
import { Product } from "../types/ProductType.ts";
import RelatedProducts from "../components/RelatedProducts";
import RelatedProductLoader from "../components/loaders/RelatedProductLoader";
import { useQuery } from "@tanstack/react-query";

function ProductDetails() {
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

  if (isError) {
    return <div>Error fetching the product detials, please try again!</div>;
  }

  return (
    <>
      <Header />
      <div className='px-10 bg-gray-100 z-50 w-full py-8'>
        {isLoading ? (
          <ProductItemLoader />
        ) : (
          <ProductItem product={productDetails} />
        )}
      </div>
      <div className='px-10 py-5 mb-2'>
        {isLoading ? <RelatedProductLoader /> : <RelatedProducts />}
      </div>
    </>
  );
}

export default ProductDetails;
