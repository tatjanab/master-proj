import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { Link, useParams } from "react-router-dom";
import { Product } from "../types/ProductType";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import CardLoader from "./loaders/CardLoader";

function RelatedProducts() {
  // const [relatedProducts, setRelatedProducts] = useState<Product[]>([]);
  const { categoryId, productId = "1" } = useParams<{
    categoryId: string;
    productId: string;
  }>();

  // useEffect(() => {
  //   getRelatedProducts();
  // }, [categoryId, productId]);

  const getRelatedProducts = async () => {
    const response = await fetch(
      "https://master-shop-53976-default-rtdb.asia-southeast1.firebasedatabase.app/products.json",
    );

    const data = await response.json();
    console.log("id " + categoryId);

    console.log("related products");

    return data.filter(
      (product: Product) =>
        product.category.toLowerCase() === categoryId?.toLowerCase() &&
        parseInt(product.id) !== parseInt(productId),
    );

    // setRelatedProducts(related);
  };

  const {
    data: relatedProducts,
    isLoading,
    isError,
  } = useQuery<Product[]>({
    queryFn: getRelatedProducts,
    queryKey: ["related-products"],
    staleTime: Infinity, //data will never be considered stale
  });

  if (isError) {
    return <h2>No related products found</h2>;
  }

  return (
    <div className='w-full'>
      <Carousel>
        <div className='flex flex-row justify-between mb-3'>
          <h2 className='text-lg'>People also viewed:</h2>
          <div>
            <CarouselPrevious />
            <CarouselNext />
          </div>
        </div>
        <CarouselContent className='flex flex-row'>
          {relatedProducts?.map((product) => (
            <CarouselItem className='basis-1/4' key={product.id}>
              <Link to={`/products/${categoryId}/${product.id}`}>
                <div>
                  <img src={product.image} alt='product image' />
                  <p className='font-bold text-xs text-gray-500 my-1'>
                    {product.title}
                  </p>
                  <p>
                    {product.price} {product.currency}
                  </p>
                </div>
              </Link>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}

export default RelatedProducts;
