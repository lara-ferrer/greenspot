import React, { useState } from "react";
import { CategoryFilterContext } from "./CategoryFilterContext";

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
    const matchingFilter = name && categoryFilters.find((filter) => filter === name);
    const matchingFilterIndex = matchingFilter && categoryFilters.indexOf(matchingFilter);

    matchingFilter && setCategoryFilters(categoryFilters.splice(matchingFilterIndex, 1))
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