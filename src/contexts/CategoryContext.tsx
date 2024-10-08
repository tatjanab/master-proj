import { createContext, useContext, ReactNode } from "react";
import { useQuery } from "@tanstack/react-query";

type CategoryType = {
  name: string;
};

type CategoriesContextType = {
  categories: CategoryType[];
};

export const CategoriesContext = createContext<
  CategoriesContextType | undefined
>(undefined);

export const useCategoriesContext = () => {
  const context = useContext(CategoriesContext);
  if (context === undefined) {
    throw new Error(
      "useCategoriesContext must be used with a CategoryProvider",
    );
  }
  return context;
};
type CartProviderProps = {
  children: ReactNode;
};

export const CategoryProvider = ({ children }: CartProviderProps) => {
  const fetchCategories = async () => {
    const response = await fetch(
      "https://master-shop-53976-default-rtdb.asia-southeast1.firebasedatabase.app/categories.json",
    );

    const categories = await response.json();
    console.log(categories);
    return categories;
  };

  const {
    data: categoriesData,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["fetch-categories"],
    queryFn: fetchCategories,
    staleTime: Infinity,
  });

  // if (isLoading) return <p className='text-line'></p>;
  if (isError) return <div>Error fetching categories</div>;

  return (
    <CategoriesContext.Provider value={{ categories: categoriesData }}>
      {children}
    </CategoriesContext.Provider>
  );
};
