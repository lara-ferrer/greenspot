import React from "react";
import { Link } from "react-router-dom";
import { BusinessCard, CityCard } from "kiwi-design-system";
import { getSanityImageUrl } from "../sanity-images";
import { Header, Carousel, Section } from "../components";
import { useFetchData } from "../hooks/useFetchData";
import {
  RestaurantMethods,
  getRestaurantQuery,
  CityMethods,
  getCityQuery,
} from "../queries";
import { Business, City } from "../types";
import { businessBps, cityBps } from "../constants/carousel-breakpoints";

export const Home = () => {
  const getRestaurants = getRestaurantQuery(RestaurantMethods.GetRestaurants);
  const restaurants: Business[] = useFetchData(getRestaurants);

  const getCities = getCityQuery(CityMethods.GetCities, {});
  const cities: City[] = useFetchData(getCities);

  const restaurantCards = restaurants
    ? restaurants.map((restaurant, i) => (
        <Link to={`/business/${restaurant.url}`}>
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
        <Link to={`/cities/${city.cityName}`}>
          <CityCard
            key={i}
            city={city.cityName}
            country={city.country}
            image={getSanityImageUrl(city.coverImage)}
          />
        </Link>
      ))
    : [];

  return (
    <>
      <Header />
      <Section title="Últimos negocios añadidos" link="cities">
        <Carousel
          carouselItems={restaurantCards}
          breakpoints={businessBps}
        />
      </Section>
      <Section
        title="Ciudades comprometidas con la revolución verde"
        link="business"
      >
        <Carousel carouselItems={cityCards} breakpoints={cityBps} />
      </Section>
    </>
  );
};
