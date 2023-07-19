import React from "react";
import { Link } from "react-router-dom";
import { BusinessCard, CityCard } from "kiwi-design-system";
import { getSanityImageUrl } from "../sanity-images";
import { Header, Carousel, Section } from "../components";
import { useFetchData } from "../hooks/useFetchData";
import { Restaurant, City } from "../queries";

export const Home = () => {
  const restaurants = useFetchData(Restaurant.GetRestaurants);
  const cities = useFetchData(City.GetCities);

  const restaurantCards = restaurants.map((restaurant, i) => (
    <Link to={`/business/${restaurant.url}`}>
      <BusinessCard
        key={i}
        title={restaurant.name}
        address={restaurant.address}
        categories={restaurant.categories}
        image={getSanityImageUrl(restaurant.coverImage)}
      />
    </Link>
  ));

  const cityCards = cities.map((city, i) => (
    <Link to={`/city/${city.cityName}`}>
      <CityCard
        key={i}
        city={city.cityName}
        country={city.country}
        image={getSanityImageUrl(city.coverImage)}
      />
    </Link>
  ));

  const restaurantsBps = {
    768: {
      slidesPerView: 2,
      spaceBetween: 50,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 100,
    },
    1920: {
      slidesPerView: 6,
      spaceBetween: 20,
    }
  }

  const cityBps = {
    768: {
      slidesPerView: 2,
      spaceBetween: 50,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 100,
    },
    1920: {
      slidesPerView: 6,
      spaceBetween: 200,
    }
  }

  return (
    <>
      <Header />
      <main>
        <Section title="Últimos negocios añadidos">
          <Carousel carouselItems={restaurantCards} breakpoints={restaurantsBps} />
        </Section>
        <Section title="Ciudades comprometidas con la revolución verde">
          <Carousel carouselItems={cityCards} breakpoints={cityBps} />
        </Section>
      </main>
    </>
  );
};
