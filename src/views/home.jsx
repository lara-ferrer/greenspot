import { useEffect, useState } from "react";
import "../styles/index.scss";
import Section from "../components/section/Section";
import { BusinessCard, CityCard } from "kiwi-design-system";
import { client } from "../sanity-client";
import { getSanityImageUrl } from "../sanity-images";

export const Home = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [cities, setCities] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const restaurants = await client.fetch(`*[_type == 'restaurant']`);
      const cities = await client.fetch(`*[_type == 'city']`);

      setRestaurants(restaurants);
      setCities(cities);
    };
    fetchData();
  }, []);

  return (
    <main>
      <Section title="Últimos negocios añadidos">
        {restaurants.map((restaurant, i) => (
          <BusinessCard
            key={i}
            title={restaurant.name}
            address={restaurant.address}
            categories={restaurant.categories}
            image={getSanityImageUrl(restaurant.coverImage)}
          />
        ))}
      </Section>
      <Section title="Ciudades comprometidas con la revolución verde">
        {cities.map((city, i) => (
          <CityCard
            key={i}
            city={city.cityName}
            country={city.country}
            image={getSanityImageUrl(city.coverImage)}
          />
        ))}
      </Section>
    </main>
  );
};
