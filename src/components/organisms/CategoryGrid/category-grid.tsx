import React, { useEffect, useState } from "react";
import { BusinessCard } from "kiwi-design-system";
import { Link, useParams } from "react-router-dom";
import { getSanityImageUrl } from "../../../sanity-images";
import { Grid } from "../../templates";
import { getCategoryBusinesses } from "../../../api/getCategoryBusinesses";
import { Business } from "../../../types";
import { useFilteredBusinesses } from "../../../helpers/filterBussiness";

export const CategoryGrid = () => {
  const { cityName } = useParams();
  const [businesses, setBusinesses] = useState<Business[]>();

  useEffect(() => {
    getCategoryBusinesses(cityName).then((data) => setBusinesses(data));
  });

  const filteredBusinesses: Business[] = useFilteredBusinesses(businesses);

  const businessesCards =
  filteredBusinesses &&
  filteredBusinesses.map((business, i) => (
      <Link to={`/${cityName}/business/${business.url}`} key={i}>
        <BusinessCard
          key={i}
          title={business.name}
          address={business.address}
          image={getSanityImageUrl(business.coverImage)}
        />
      </Link>
    ));

  return (
    <>
      <h2>Últimos añadidos</h2>
      <Grid>{businessesCards}</Grid>
    </>
  );
};
