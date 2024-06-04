import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCategoryBusinesses } from "../../../../api/get-category-businesses";
import { useFilteredBusinesses } from "../../../../hooks/use-filtered-businesses";
import { Business } from "../../../../types/business";
import { Grid } from "../../../../components/templates/grid/grid";
import { BusinessCard } from "../../../../components/molecules/business-card/business-card";

export const CategoryGrid = ({ categoryName }) => {
  const { cityName } = useParams();
  const [businesses, setBusinesses] = useState<Business[]>();

  useEffect(() => {
    getCategoryBusinesses(cityName, categoryName).then((data) =>
      setBusinesses(data)
    );
  }, []);

  const filteredBusinesses: Business[] = useFilteredBusinesses(businesses);

  const getBusinessesCards = () => {
    const businessesCards = filteredBusinesses.map((business, i) => (
      <a href={`/${cityName}/business/${business.url}`} key={i}>
        <BusinessCard key={i} business={business} />
      </a>
    ));

    return businessesCards;
  }

  const getCategoryGrid = () => {
    const categoryGrid = filteredBusinesses && filteredBusinesses.length > 0 ? (
      <Grid>{getBusinessesCards()}</Grid>
    ) : (
      <p>No se han encontrado resultados para tu búsqueda.</p>
    );

    return categoryGrid;
  };

  return getCategoryGrid();
};
