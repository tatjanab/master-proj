import { Link } from "react-router-dom";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import useRelatedProducts from "../hooks/useRelatedProducts";

function RelatedProducts() {
  const { categoryId, relatedProducts, isError } = useRelatedProducts();

  if (isError) {
    return <h2>No related products found</h2>;
  }

  return (
    <div className='w-full'>
      <Carousel>
        <div className='mb-3 flex flex-row justify-between'>
          <h2 className='text-lg'>People also viewed:</h2>
          <div>
            <CarouselPrevious />
            <CarouselNext />
          </div>
        </div>
        <CarouselContent className='flex flex-row'>
          {relatedProducts?.map((product) => (
            <CarouselItem className='basis-1/2 lg:basis-1/4' key={product.id}>
              <Link to={`/products/${categoryId}/${product.id}`}>
                <div>
                  <img src={product.image} alt='product image' />
                  <p className='my-1 text-xs font-bold text-gray-500'>
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
