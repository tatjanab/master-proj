import Header from "../components/Header";

import { useParams } from "react-router-dom";
import useProductsByCategory from "../hooks/useProductsByCategory";
import CategoryContent from "../components/CategoryContent";
import { useState } from "react";
import Search from "../components/Search";

function ProductCategory() {
  const { categoryId } = useParams<{ categoryId: string }>();
  const { products, isLoading, isError } = useProductsByCategory(categoryId);
  const [searchQuery, setSearchQuery] = useState<string>("");

  const categoryTitle = categoryId?.split("-").join(" ");

  if (isError) {
    return (
      <div>
        <h2>Error retrieving products. Try to refresh the page.</h2>
      </div>
    );
  }

  return (
    <>
      <Header />
      <div className='px-10 z-50 w-full'>
        <div className='flex flex-row justify-between items-center mt-8'>
          <h5>
            Shop all products for{" "}
            <span className='font-bold uppercase'>{categoryTitle}</span>
          </h5>
          <div>
            <Search setSearchQuery={setSearchQuery} searchQuery={searchQuery} />
          </div>
        </div>

        <p></p>
        <div className='flex min-h-screen flex-wrap justify-items-start pt-10'>
          <CategoryContent
            loading={isLoading}
            products={products}
            categoryId={categoryId}
            searchQuery={searchQuery}
          />
        </div>
      </div>
    </>
  );
}

export default ProductCategory;
