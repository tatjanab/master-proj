import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Header from "../components/Header";
import ProductItem from "../components/ProductItem";
import ProductItemLoader from "../components/ProductItemLoader";

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
      <Header />
      <div className='px-10 bg-gray-100 z-50 w-full h-screen pt-5'>
        {detailsLoading ? (
          <ProductItemLoader />
        ) : (
          <ProductItem
            title={product.title}
            subtitle={product.subtitle}
            description={product.description}
            price={product.price}
            currency={product.currency}
            image={product.image}
          />
        )}
      </div>
    </>
  );
}

export default ProductDetails;
