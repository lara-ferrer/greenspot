import React, { Suspense } from "react";
import { Link } from "react-router-dom";
import { BusinessCard } from "kiwi-design-system";
import { getSanityImageUrl } from "../sanity-images";
import { useFetchData } from "../hooks/useFetchData";
import {
  RestaurantMethods,
  getRestaurantQuery,
  CityMethods,
  getCityQuery,
} from "../queries";
import { Business, City } from "../types";
import { businessBps, cityBps } from "../constants/carousel-breakpoints";
import { Loading } from "../components/atoms";
import { CityCard } from "../components/molecules";
import { MainHeader, Section, Carousel } from "../components/organisms";

export const Home = () => {
  const getRestaurants = getRestaurantQuery(RestaurantMethods.GetRestaurants);
  const restaurants: Business[] = useFetchData(getRestaurants);

  const getCities = getCityQuery(CityMethods.GetCities, {});
  const cities: City[] = useFetchData(getCities);

  const restaurantCards = restaurants
    ? restaurants.map((restaurant, i) => (
        <Link to={`/zaragoza/business/${restaurant.url}`}>
          <BusinessCard
            key={i}
            title={restaurant.name}
            address={restaurant.address}
            categories={restaurant.categories}
            image={getSanityImageUrl(restaurant.coverImage)}
          />
        </Link>
      ))
    : [];

  const cityCards = cities
    ? cities.map((city, i) => (
        <CityCard
          key={i}
          cityName={city.cityName}
          country={city.country}
          coverImage={city.coverImage}
          businessType="restaurantes"
        />
      ))
    : [];

  return (
    <>
      <MainHeader />
      <Section title="Últimos negocios añadidos" link="cities">
        <Carousel carouselItems={restaurantCards} breakpoints={businessBps} />
      </Section>
      <Section
        title="Ciudades comprometidas con la revolución verde"
        link="business"
      >
        <Suspense fallback={<Loading />}>
          <Carousel carouselItems={cityCards} breakpoints={cityBps} />
        </Suspense>
      </Section>
    </>
  );
};
