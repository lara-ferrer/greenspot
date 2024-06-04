import React, { useEffect, useState } from "react";
import { Header } from "../../../../components/organisms/header/header";
import { getCityById } from "../../../../api/city/get-city-by-id";
import { translateCategoriesToName, translateCategoriesToLink } from "../../../../utils/translations/es";

type BusinessHeaderProps = {
  businessName: string;
  cityId: string;
  categoryName: string;
};

export const BusinessHeader = ({ businessName, categoryName, cityId }: BusinessHeaderProps) => {
  const [cityName, setCityName] = useState<string>();

  useEffect(() => {
    getCityById(cityId).then((data) => setCityName(data.cityName));
  }, []);

  const breadcrumbLinks = [
    {
      title: 'Inicio',
      url: '/',
    },
    {
      title: translateCategoriesToName[categoryName],
      url: `/${cityName}/${translateCategoriesToLink[categoryName]}`
    },
    {
      title: cityName,
      url: `/ciudades/${cityName}`
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
