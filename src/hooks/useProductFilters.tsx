import { useSearchParams, useParams } from "react-router-dom";
import { useEffect } from "react";

function useProductFilters() {
  const { categoryId } = useParams<{ categoryId: string }>();
  const [searchParams, setSearchParams] = useSearchParams({ search: "" });

  const search = searchParams.get("search") || "";

  useEffect(() => {
    setSearchParams({ search: "" });
  }, [categoryId]);

  return { search, categoryId, setSearchParams };
}

export default useProductFilters;
