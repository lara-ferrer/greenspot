import React, { useState } from "react";
import { SubcategoryFilterContext } from "./subcategory-filter-context";

export type SubcategoryFilterProviderProps = {
  subcategoryFilters: string[];
  addFilter: (name: any) => void;
  removeFilter: (name: any) => void;
};

export const SubcategoryFilterProvider = ({ children }: any) => {
  const [ subcategoryFilters, setSubcategoryFilters ] = useState([]);

  const addFilter = (name: string) => {
    name && setSubcategoryFilters([...subcategoryFilters, name]);
  }

  const removeFilter = (name: string) => {
    const matchingFilterIndex = subcategoryFilters.indexOf(name) + 1;

    setSubcategoryFilters(subcategoryFilters.splice(matchingFilterIndex, 1));
  }

  const provider = {
    subcategoryFilters,
    addFilter,
    removeFilter
  }
    return (
      <SubcategoryFilterContext.Provider value={ provider }>
        { children }
      </SubcategoryFilterContext.Provider>
    );
  };