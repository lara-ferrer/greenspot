import React from "react";
import { useParams } from "react-router-dom";
import { Breadcrumbs } from "kiwi-design-system";
import "./category-header.scss";
import { HeaderTemplate } from "../../../../components/organisms/header/header";

export const CategoryHeader = () => {
  const { cityName, categoryName } = useParams();

  const breadcrumbLinks = [
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
    <>
      <HeaderTemplate breadcrumbLinks={breadcrumbLinks} title={`${categoryName} en ${cityName}`} />
    </>
  );
};
