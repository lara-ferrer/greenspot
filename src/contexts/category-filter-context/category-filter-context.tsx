import { createContext, useContext } from "react";
import { CategoryFilterProvider } from "./category-filter-provider";

export const CategoryFilterContext = createContext({} as CategoryFilterProvider);

export const useCategoryFilterContext = () => {
  const categoryFilterContext = useContext(CategoryFilterContext);

  if (categoryFilterContext === undefined) {
    throw new Error('useCategoryFilterContext can only be used in a ConfigProvider tree');
  }

  return categoryFilterContext;
};