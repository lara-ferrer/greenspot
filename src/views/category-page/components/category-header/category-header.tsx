import React from "react";
import { useParams } from "react-router-dom";
import { Header } from "../../../../components/organisms/header/header";

export const CategoryHeader = () => {
  const { cityName, categoryName } = useParams();

  const breadcrumbLinks = [
    {
      title: 'Inicio',
      url: '/',
    },
    {
      title: categoryName,
      url: `/${categoryName}/${cityName}`,
      isActive: true
    },
    {
      title: cityName,
      url: `/ciudades/${cityName}`
    },
  ]

  return (
    <>
      <Header breadcrumbLinks={breadcrumbLinks} title={`${categoryName} en ${cityName}`} />
    </>
  );
};
