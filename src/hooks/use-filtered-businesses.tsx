import { useEffect, useState } from "react";
import { useSubcategoryFilterContext } from "../contexts/subcategory-filter-context/subcategory-filter-context";

export const useFilteredBusinesses = (businesses) => {
  const { subcategoryFilters } = useSubcategoryFilterContext();
  const [ filteredBusinesses, setFilteredBusinesses ] = useState();

  useEffect(() => {
    if (subcategoryFilters.length) {
        const filteredBusinesses = businesses.filter(({ subcategories }) => 
        subcategories.find((subcategory) => subcategoryFilters.includes(subcategory)
        ));
  
        setFilteredBusinesses(filteredBusinesses);
    }

    if (!subcategoryFilters.length) {
        setFilteredBusinesses(businesses);
    }
  }, [businesses, subcategoryFilters]);

  return filteredBusinesses;
};
