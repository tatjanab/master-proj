import { Link } from "react-router-dom";
import CardLoader from "./loaders/CardLoader";
import Card from "./Card";

type Product = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  category: string;
  price: number;
  currency: string;
  image: string;
};

type CategoryContentProps = {
  loading: boolean;
  products: Product[];
  categoryId: string;
  searchQuery: string;
};

function CategoryContent({
  loading,
  products,
  categoryId,
  searchQuery,
}: CategoryContentProps) {
  let productsList: Product[] = products?.filter((product) =>
    product.title.toLowerCase().includes(searchQuery.toLowerCase()),
  );
  return (
    <>
      {loading
        ? Array.from({ length: 8 }).map((_, index) => (
            <CardLoader key={index} />
          ))
        : productsList.map((product) => (
            <div
              key={product.id}
              className='lg:w-1/4 md:w-1/2 w-full px-1 mb-2'
            >
              <Link to={`/products/${categoryId}/${product.id}`}>
                <Card
                  title={product.title}
                  subtitle={product.subtitle}
                  description={product.description}
                  price={product.price}
                  currency={product.currency}
                  image={product.image}
                />
              </Link>
            </div>
          ))}
    </>
  );
}

export default CategoryContent;
