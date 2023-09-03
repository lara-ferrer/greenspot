import React from "react";
import { useParams } from "react-router-dom";
import { HeaderTemplate } from "../HeaderTemplate";
import { Layout } from "../../../templates";

type BusinessHeaderProps = {
  businessName: string;
};

export const BusinessHeader = ({ businessName }: BusinessHeaderProps) => {
  const { cityName } = useParams();

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
      title: businessName,
      url: `/cities/${cityName}/${businessName}`,
      isActive: true
    }
  ]

  return (
    <>
      <HeaderTemplate breadcrumbLinks={breadcrumbLinks} title={businessName} />
      <Layout numberOfColumns={1}>
        <h2>cosas</h2>
      </Layout>
    </>
  );
};
