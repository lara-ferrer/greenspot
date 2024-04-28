import React, { useEffect, useState } from "react";
import { BusinessCard } from "kiwi-design-system";
import { Link, useParams } from "react-router-dom";
import { getSanityImageUrl } from "../../../sanity-images";
import { Grid } from "../../templates";
import { getCategoryBusinesses } from "../../../api/get-category-businesses";
import { useFilteredBusinesses } from "../../../hooks/use-filtered-businesses";
import { Business } from "../../../types/business";

export const CategoryGrid = () => {
  const { cityName } = useParams();
  const [businesses, setBusinesses] = useState<Business[]>();

  useEffect(() => {
    getCategoryBusinesses(cityName).then((data) => setBusinesses(data));
  }, []);

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
    <Grid>{businessesCards}</Grid>
  );
};
