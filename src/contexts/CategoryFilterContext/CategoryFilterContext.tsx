import { createContext, useContext } from "react";

export const CategoryFilterContext = createContext([]);

export const useCategoryFilterContext = () => {
  const categoryFilterContext = useContext(CategoryFilterContext);

  if (categoryFilterContext === undefined) {
    throw new Error('useConfig can only be used in a ConfigProvider tree');
  }

  return categoryFilterContext;
};