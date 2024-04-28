import React, { useState } from "react";
import { CategoryFilterContext } from "./category-filter-context";

export type CategoryFilterProvider = {
  categoryFilters: string[];
  addFilter: (name: any) => void;
  removeFilter: (name: any) => void;
};

export const CategoryFilterProvider = ({ children }: any) => {
  const [ categoryFilters, setCategoryFilters ] = useState([]);

  const addFilter = (name) => {
    name && setCategoryFilters([...categoryFilters, name]);
  }

  const removeFilter = (name) => {
    const matchingFilterIndex = categoryFilters.indexOf(name) + 1;

    setCategoryFilters(categoryFilters.splice(matchingFilterIndex, 1));
  }

  const provider = {
    categoryFilters,
    addFilter,
    removeFilter
  }
    return (
      <CategoryFilterContext.Provider value={ provider }>
        { children }
      </CategoryFilterContext.Provider>
    );
  };