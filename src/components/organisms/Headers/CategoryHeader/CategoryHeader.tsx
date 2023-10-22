import React from "react";
import { useParams } from "react-router-dom";
import { Breadcrumbs } from "kiwi-design-system";
import "./category-header.scss";

export const CategoryHeader = () => {
  const { cityName, categoryName } = useParams();

  const links = [
    {
      title: 'Inicio',
      url: '/',
    },
    {
      title: cityName,
      url: `/cities/${cityName}`
    },
    {
      title: categoryName,
      url: `/cities/${cityName}/${categoryName}`,
      isActive: true
    }
  ]

  return (
    <section className="grsp-category-header">
      <Breadcrumbs links={links} />
      <h1 className="grsp-category-header__title">
        {categoryName} en {cityName}
      </h1>
    </section>
  );
};
