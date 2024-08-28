import Header from "../components/Header";
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
      <div className='px-10 bg-gray-100 z-50 w-full py-8'>
        {isLoading && <ProductItemLoader />}
        {isError && <ErrorDisplay />}
        {productDetails && <ProductItem product={productDetails} />}
      </div>
      <div className='px-10 py-5 mb-2'>
        {isLoading ? <RelatedProductLoader /> : <RelatedProducts />}
      </div>
    </>
  );
}

export default ProductDetails;
