import Header from "../components/Header";
import useProductsByCategory from "../hooks/useProductsByCategory";
import CategoryContent from "../components/CategoryContent";
import Search from "../components/Search";
import useProductFilters from "../hooks/useProductFilters";

function ProductCategory() {
  const { search, categoryId, setSearchParams } = useProductFilters();
  const { products, isLoading, isError } = useProductsByCategory(categoryId);

  const categoryTitle = categoryId?.split("-").join(" ");

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
            error={isError}
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
