import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Header from "../components/Header";
import ProductItem from "../components/ProductItem";
import ProductItemLoader from "../components/ProductItemLoader";
import { ProductContext } from "../contexts/ProductContext";
import { Product } from "../types/Product.interface";
import RelatedProducts from "../components/RelatedProducts";
import RelatedProductLoader from "../components/loaders/RelatedProductLoader";

function ProductDetails() {
  const [product, setProduct] = useState<Product>(null);
  const { productId } = useParams();
  const [detailsLoading, setDetailsLoading] = useState(true);

  const getProductDetails = (productId: string) => {
    setDetailsLoading(true); // reset loading state

    axios
      .get<Product>(
        `https://master-shop-53976-default-rtdb.asia-southeast1.firebasedatabase.app/products/${productId}.json`,
      )
      .then((response) => {
        setProduct(response.data);
        setDetailsLoading(false);
      });
  };

  useEffect(() => {
    getProductDetails(productId);
  }, [productId]);

  return (
    <>
      <ProductContext.Provider value={product}>
        <Header />
        <div className='px-10 bg-gray-100 z-50 w-full py-8'>
          {detailsLoading ? <ProductItemLoader /> : <ProductItem />}
        </div>
        <div className='px-10 py-5 mb-2'>
          {detailsLoading ? <RelatedProductLoader /> : <RelatedProducts />}
        </div>
      </ProductContext.Provider>
    </>
  );
}

export default ProductDetails;
