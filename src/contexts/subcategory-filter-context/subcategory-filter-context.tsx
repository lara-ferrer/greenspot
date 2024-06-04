import { createContext, useContext } from "react";
import { SubcategoryFilterProviderProps } from "./subcategory-filter-provider";

export const SubcategoryFilterContext = createContext({} as SubcategoryFilterProviderProps);

export const useSubcategoryFilterContext = () => {
  const subcategoryFilterContext = useContext(SubcategoryFilterContext);

  if (subcategoryFilterContext === undefined) {
    throw new Error('useSubcategoryFilterContext can only be used in a ConfigProvider tree');
  }

  return subcategoryFilterContext;
};