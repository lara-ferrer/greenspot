import { createContext, useContext } from "react";
import { CategoryFilterProvider } from "./CategoryFilterProvider";

export const CategoryFilterContext = createContext({} as CategoryFilterProvider);

export const useCategoryFilterContext = () => {
  const categoryFilterContext = useContext(CategoryFilterContext);

  if (categoryFilterContext === undefined) {
    throw new Error('useConfig can only be used in a ConfigProvider tree');
  }

  return categoryFilterContext;
};