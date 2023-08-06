import React from "react";
import { Carousel, FilterBar, Layout } from "../components";
import { CategoryHeader } from "../components";
import { BusinessCard, Checkbox } from "kiwi-design-system";
import { Link, useParams } from "react-router-dom";
import { useFetchData } from "../hooks/useFetchData";
import { getCityQuery, CityMethods } from "../queries";
import { Business } from "../types/business";
import { City } from "../types/city";
import { getSanityImageUrl } from "../sanity-images";
import { businessBps } from "../constants/carousel-breakpoints";

export const CategoryPage = () => {
  const { cityName } = useParams();

  const getCityByName = getCityQuery(CityMethods.GetCityByName, { cityName });
  const city: City = useFetchData(getCityByName);

  const getCityBusinesses =
    city && getCityQuery(CityMethods.GetBusinesses, { cityRef: city[0]._id });
  const cityBusinesses: Business[] = useFetchData(getCityBusinesses);

  const cityBusinessesCards = cityBusinesses
    ? cityBusinesses.map((business, i) => (
        <Link to={`/business/${business.url}`}>
          <BusinessCard
            key={i}
            title={business.name}
            address={business.address}
            categories={business.categories}
            image={getSanityImageUrl(business.coverImage)}
          />
        </Link>
      ))
    : [];

  return (
    <>
      <CategoryHeader />
      <Layout numberOfColumns={2}>
        <FilterBar />
        <div>
          <h2>Últimos añadidos</h2>
          <Carousel
            carouselItems={cityBusinessesCards}
            breakpoints={businessBps}
          />
        </div>
      </Layout>
    </>
  );
};
