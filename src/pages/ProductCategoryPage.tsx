import Header from "../components/Header";
import useProductsByCategory from "../hooks/useProductsByCategory";
import CategoryContent from "../components/CategoryContent";
import Search from "../components/Search";
import useProductFilters from "../hooks/useProductFilters";

function ProductCategory() {
  const { search, categoryId, setSearchParams } = useProductFilters();
  const { products, isLoading, isError } = useProductsByCategory(categoryId);

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
          <div className='w-1/5'>
            <Search searchParams={search} setSearchParams={setSearchParams} />
          </div>
        </div>

        <p></p>
        <div className='flex min-h-screen flex-wrap justify-items-start pt-10'>
          <CategoryContent
            loading={isLoading}
            products={products}
            categoryId={categoryId}
            searchQuery={search}
          />
        </div>
      </div>
    </>
  );
}

export default ProductCategory;
