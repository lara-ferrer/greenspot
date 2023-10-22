import { useEffect, useState } from "react";
import { useCategoryFilterContext } from "../contexts/CategoryFilterContext/CategoryFilterContext";

export const useFilteredBusinesses = (businesses) => {
  const { categoryFilters } = useCategoryFilterContext();
  const [ filteredBusinesses, setFilteredBusinesses ] = useState();

  useEffect(() => {
    if (categoryFilters.length) {
        const filteredBusinesses = businesses.filter(({ categories }) => 
        categories.find((category) => categoryFilters.includes(category)
        ));
  
        setFilteredBusinesses(filteredBusinesses);
    }

    if (!categoryFilters.length) {
        setFilteredBusinesses(businesses);
    }
  }, [businesses, categoryFilters]);

  return filteredBusinesses;
};
