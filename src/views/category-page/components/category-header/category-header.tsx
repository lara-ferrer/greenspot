import React from "react";
import { useParams } from "react-router-dom";
import { Header } from "../../../../components/organisms/header-section/header-section";

export const CategoryHeader = ({ title }) => {
  const { cityName, categoryName } = useParams();

  const breadcrumbLinks = [
    {
      title: 'Inicio',
      url: '/',
    },
    {
      title: cityName,
      url: `/ciudades/${cityName}`
    },
  ]

  return (
    <>
      <Header breadcrumbLinks={breadcrumbLinks} title={`${title} en ${cityName}`} />
    </>
  );
};
