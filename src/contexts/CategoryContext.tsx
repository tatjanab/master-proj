import { createContext, useContext, useState, useEffect } from "react";

export const CategoriesContext = createContext(undefined);

export const useCategoriesContext = () => {
  useContext(CategoriesContext);
};

export const CategoryProvider = ({ children }) => {
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
