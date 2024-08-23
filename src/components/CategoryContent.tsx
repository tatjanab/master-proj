import { Link } from "react-router-dom";
import CardLoader from "./loaders/CardLoader";
import ErrorDisplay from "./loaders/ErrorDisplay";
import Card from "./Card";
import { Product } from "../types/ProductType";

type CategoryContentProps = {
  loading: boolean;
  error: boolean;
  products: Product[];
  categoryId: string;
  searchQuery: string;
};

function CategoryContent({
  loading,
  error,
  products,
  categoryId,
  searchQuery,
}: CategoryContentProps) {
  // filter the products based on the search query coming from the Search component
  let productsList: Product[] = products?.filter((product) =>
    product.title.toLowerCase().includes(searchQuery?.toLowerCase()),
  );

  return (
    <>
      {error && <ErrorDisplay />}
      {loading &&
        Array.from({ length: 8 }).map((_, index) => <CardLoader key={index} />)}
      {products &&
        productsList.map((product) => (
          <div key={product.id} className='lg:w-1/4 md:w-1/2 w-full px-1 mb-2'>
            <Link to={`/products/${categoryId}/${product.id}`}>
              <Card product={product} />
            </Link>
          </div>
        ))}
    </>
  );
}

export default CategoryContent;
