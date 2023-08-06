import React from "react";
import { Checkbox } from "kiwi-design-system";
import "./filter-bar.scss";

export const FilterBar = () => {
  return (
    <form className="grsp-filter-bar">
      <h4>Filtrar por categoría</h4>
      <Checkbox label="Flexitariano" id="flexitarian" name="flexitarian" />
      <Checkbox label="Vegetariano" id="vegetarian" name="vegetarian" />
      <Checkbox label="Vegano" id="vegan" name="vegan" />
    </form>
  );
};
