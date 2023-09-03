import React from "react";
import { BusinessCard } from "kiwi-design-system";
import { Link, useParams } from "react-router-dom";
import { getSanityImageUrl } from "../sanity-images";
import { CategoryHeader, FilterBar } from "../components/organisms";
import { Layout, Grid } from "../components/templates";
import { useCityBusinesses } from "../hooks/useCityBusinesses";
import { CategoryFilterProvider } from "../contexts/CategoryFilterContext/CategoryFilterProvider";

export const CategoryPage = () => {
  const { cityName } = useParams();

  const cityBusinesses = useCityBusinesses(cityName);

  const cityBusinessesCards = cityBusinesses
    ? cityBusinesses.map((business, i) => (
        <Link to={`/${cityName}/business/${business.url}`}>
          <BusinessCard
            key={i}
            title={business.name}
            address={business.address}
            categories={business.categories}
            image={getSanityImageUrl(business.coverImage)}
          />
        </Link>
      ))
    : <p>No se han encontrado negocios</p>;

  return (
    <CategoryFilterProvider>
      <CategoryHeader />
      <Layout numberOfColumns={2}>
        <FilterBar />
        <div>
          <h2>Últimos añadidos</h2>
          <Grid>
            {cityBusinessesCards}
          </Grid>
        </div>
      </Layout>
    </CategoryFilterProvider>
  );
};
