import { createContext, useContext } from "react";
import { Product } from "../types/ProductType";

export const ProductContext = createContext<Product | undefined>(undefined);

export function useProductContext() {
  const product = useContext(ProductContext);

  if (product === undefined) {
    throw new Error("useProductContext should be used with the ProductContext");
  }

  return product;
}
