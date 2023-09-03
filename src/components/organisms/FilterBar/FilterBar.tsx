import React, { useState } from "react";
import { Checkbox } from "kiwi-design-system";
import "./filter-bar.scss";
import { useCategoryFilterContext } from "../../../contexts/CategoryFilterContext/CategoryFilterContext";

export const FilterBar = () => {
  const categoryFilters = useCategoryFilterContext();

  const handleFilterClick = (e: Event) => {
    const { name, checked } = e.target as HTMLInputElement;

    checked && addFilter(name);
    !checked && removeFilter(name);
  };

  const addFilter = (name) => {
    name && categoryFilters.push(name);
  }

  const removeFilter = (name) => {
  }

  console.log(categoryFilters);

  return (
    <form className="grsp-filter-bar">
      <h4>Filtrar por categoría</h4>
      <Checkbox label="Flexitariano" id="flexitarian" name="flexitarian" onClick={(e) => handleFilterClick(e)} />
      <Checkbox label="Vegetariano" id="vegetarian" name="vegetarian" onClick={(e) => handleFilterClick(e)}/>
      <Checkbox label="Vegano" id="vegan" name="vegan" onClick={(e) => handleFilterClick(e)}/>
    </form>
  );
};
