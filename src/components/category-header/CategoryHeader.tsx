import React from "react";
import { useParams } from "react-router-dom";
import "./category-header.scss";

export const CategoryHeader = () => {
  const { cityName, categoryName } = useParams();

  return (
    <section className="grsp-category-header">
      <h1 className="grsp-category-header__title">
        {categoryName} en {cityName}
      </h1>
    </section>
  );
};
