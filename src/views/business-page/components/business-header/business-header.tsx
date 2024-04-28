import React from "react";
import { useParams } from "react-router-dom";
import { Header } from "../../../../components/organisms/header";

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
      title: businessName,
      isActive: true
    }
  ]

  return (
    <>
      <Header breadcrumbLinks={breadcrumbLinks} title={businessName} />
    </>
  );
};
