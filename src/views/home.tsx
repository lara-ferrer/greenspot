import React, { Suspense } from "react";
import { useFetchData } from "../hooks/useFetchData";
import {
  BusinessMethods,
  getBusinessQuery,
  CityMethods,
  getCityQuery,
} from "../api/queries";
import { Business, City } from "../types";
import { businessBps, cityBps } from "../constants/carousel-breakpoints";
import { Loading } from "../components/atoms";
import { CityCard } from "../components/molecules";
import { MainHeader, Section, Carousel } from "../components/organisms";
import { BusinessCard } from "../components/molecules/BusinessCard/BusinessCard";

const Home = () => {
  const getRestaurants = getBusinessQuery(BusinessMethods.GetBusinesses);
  const restaurants: Business[] = useFetchData(getRestaurants);

  const getCities = getCityQuery(CityMethods.GetCities, {});
  const cities: City[] = useFetchData(getCities);

  const restaurantCards = restaurants
    ? restaurants.map((restaurant, i) => (
        <BusinessCard key={i} business={restaurant} />
      ))
    : [];

  const cityCards = cities
    ? cities.map((city, i) => <CityCard key={i} city={city} />)
    : [];

  return (
    <Suspense fallback={<Loading />}>
      <MainHeader />
      <Section title="Últimos negocios añadidos">
        <Carousel carouselItems={restaurantCards} breakpoints={businessBps} />
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
