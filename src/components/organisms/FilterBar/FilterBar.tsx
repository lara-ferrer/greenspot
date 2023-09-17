import React, { useState } from "react";
import { Checkbox } from "kiwi-design-system";
import "./filter-bar.scss";
import { useCategoryFilterContext } from "../../../contexts/CategoryFilterContext/CategoryFilterContext";

export const FilterBar = () => {
  const { categoryFilters, addFilter, removeFilter } = useCategoryFilterContext();

  const handleFilterClick = (e: Event) => {
    const { name, checked } = e.target as HTMLInputElement;

    checked && addFilter(name);
    !checked && removeFilter(name);
  };

  return (
    <form className="grsp-filter-bar">
      <h4>Filtrar por categoría</h4>
      <Checkbox label="Flexitariano" id="Flexitariano" name="Flexitariano" onClick={(e) => handleFilterClick(e)} />
      <Checkbox label="Vegetariano" id="Vegetariano" name="Vegetariano" onClick={(e) => handleFilterClick(e)}/>
      <Checkbox label="Vegano" id="Vegano" name="Vegano" onClick={(e) => handleFilterClick(e)}/>
    </form>
  );
};
