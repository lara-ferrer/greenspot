import React, { Suspense } from "react";
import { useFetchData } from "../../hooks/use-fetch-data";
import {
  BusinessMethods,
  getBusinessQuery,
  CityMethods,
  getCityQuery,
} from "../../api/queries";
import { businessBps, cityBps } from "../../constants/carousel-breakpoints";
import { Loading } from "../../components/atoms";
import { CityCard } from "../../components/molecules";
import { Section, Carousel } from "../../components/organisms";
import { BusinessCard } from "../../components/molecules/business-card/business-card";
import { Hero } from "./components/hero/hero";
import { Business } from "../../types/business";
import { City } from "../../types/city";

const Home = () => {
  const getBusinesses = getBusinessQuery(BusinessMethods.GetBusinesses);
  const businesses: Business[] = useFetchData(getBusinesses);

  const getCities = getCityQuery(CityMethods.GetCities, {});
  const cities: City[] = useFetchData(getCities);

  const businessesCards = businesses
    ? businesses.map((business, i) => (
        <BusinessCard key={i} business={business} />
      ))
    : [];

  const cityCards = cities
    ? cities.map((city, i) => <CityCard key={i} city={city} />)
    : [];

  return (
    <Suspense fallback={<Loading />}>
      <Hero />
      <Section title="Últimos negocios añadidos">
        <Carousel carouselItems={businessesCards} breakpoints={businessBps} />
      </Section>
      <Section
        title="Ciudades comprometidas con la revolución verde"
      >
        <Suspense fallback={<Loading />}>
          <Carousel carouselItems={cityCards} breakpoints={cityBps} />
        </Suspense>
      </Section>
    </Suspense>
  );
};

export default Home;
