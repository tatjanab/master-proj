import Header from "../components/Header";

import { useParams } from "react-router-dom";
import useProductsByCategory from "../hooks/useProductsByCategory";
import CategoryContent from "../components/CategoryContent";

function ProductCategory() {
  const { categoryId } = useParams<{ categoryId: string }>();
  const { products, loading } = useProductsByCategory(categoryId);

  return (
    <>
      <Header />
      <div className='px-10 bg-gray-100 z-50 w-full'>
        <h5 className='pt-8'>
          Shop all products for <span className='italic'>{categoryId}</span>
        </h5>
        <p></p>
        <div className='flex min-h-screen flex-wrap justify-items-start pt-10'>
          <CategoryContent
            loading={loading}
            products={products}
            categoryId={categoryId}
          />
        </div>
      </div>
    </>
  );
}

export default ProductCategory;
