import React from "react";
import { Checkbox } from "kiwi-design-system";
import { useSubcategoryFilterContext } from "../../../contexts/subcategory-filter-context/subcategory-filter-context";
import "./filter-bar.scss";

export const FilterBar = () => {
  const { addFilter, removeFilter } = useSubcategoryFilterContext();

  const handleFilterClick = (e: Event) => {
    const { name, checked } = e.target as HTMLInputElement;

    checked && addFilter(name);
    !checked && removeFilter(name);
  };

  return (
    <form className="grsp-filter-bar">
      <h4>Filtrar por categoría</h4>
      <Checkbox label="Flexitariano" id="flexitarian" name="flexitarian" onClick={(e) => handleFilterClick(e)} />
      <Checkbox label="Vegetariano" id="vegetarian" name="vegetarian" onClick={(e) => handleFilterClick(e)}/>
      <Checkbox label="Vegano" id="vegan" name="vegan" onClick={(e) => handleFilterClick(e)}/>
    </form>
  );
};
