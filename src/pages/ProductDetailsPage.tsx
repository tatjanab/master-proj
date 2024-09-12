import Header from "../components/header/Header";
import ProductItem from "../components/ProductItem";
import ProductItemLoader from "../components/ProductItemLoader";

import RelatedProducts from "../components/RelatedProducts";
import ErrorDisplay from "../components/loaders/ErrorDisplay";
import RelatedProductLoader from "../components/loaders/RelatedProductLoader";
import useProductDetails from "../hooks/useProductDetails";

function ProductDetails() {
  const { productDetails, isLoading, isError } = useProductDetails();

  return (
    <>
      <Header />
      <div className='z-50 w-full bg-gray-100 px-10 py-8'>
        {isLoading && <ProductItemLoader />}
        {isError && <ErrorDisplay />}
        {productDetails && <ProductItem product={productDetails} />}
      </div>
      <div className='mb-2 px-10 py-5'>
        {isLoading ? <RelatedProductLoader /> : <RelatedProducts />}
      </div>
    </>
  );
}

export default ProductDetails;
