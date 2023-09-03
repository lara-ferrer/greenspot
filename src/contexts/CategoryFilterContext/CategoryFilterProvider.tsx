import React from "react";
import { CategoryFilterContext } from "./CategoryFilterContext";

export const CategoryFilterProvider = ({ children }: any) => {
    return (
      <CategoryFilterContext.Provider value={ [] }>
        { children }
      </CategoryFilterContext.Provider>
    );
  };