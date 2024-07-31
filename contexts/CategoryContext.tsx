"use client";
import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

type CategoryType = {
  name: string;
};

type CategoriesContextType = {
  categories: CategoryType[];
};

type CartProviderProps = {
  children: ReactNode;
};

export const CategoriesContext = createContext<
  CategoriesContextType | undefined
>(undefined);
export const useCategoriesContext = () => {
  const context = useContext(CategoriesContext);
  if (!context) {
    throw new Error(
      "useCategoriesContext must be used within a CategoryProvider",
    );
  }
  return context;
};

export const CategoryProvider = ({ children }: CartProviderProps) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    const response = await fetch(
      "https://master-shop-53976-default-rtdb.asia-southeast1.firebasedatabase.app/categories.json",
    );

    const categories = await response.json();
    setCategories(categories);
  };

  return (
    <CategoriesContext.Provider value={{ categories }}>
      {children}
    </CategoriesContext.Provider>
  );
};
