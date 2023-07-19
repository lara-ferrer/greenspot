import { Link } from "react-router-dom";
import "../styles/index.scss";
import { BusinessCard, CityCard } from "kiwi-design-system";
import { getSanityImageUrl } from "../sanity-images";
import { Header, Carousel, Section } from "../components";
import { useFetchData } from "../hooks/useFetchData";
import { Restaurant, City } from "../queries";

export const Home = () => {
  const restaurants = useFetchData(Restaurant.GetRestaurants);
  const cities = useFetchData(City.GetCities);

  const carouselItems = cities.map((city, i) => (
    <CityCard
      key={i}
      city={city.cityName}
      country={city.country}
      image={getSanityImageUrl(city.coverImage)}
    />
  ));

  return (
    <>
      <Header />
      <main>
        <Section title="Últimos negocios añadidos">
          {restaurants.map((restaurant, i) => (
            <Link to={`/business/${restaurant.url}`}>
              <BusinessCard
                key={i}
                title={restaurant.name}
                address={restaurant.address}
                categories={restaurant.categories}
                image={getSanityImageUrl(restaurant.coverImage)}
              />
            </Link>
          ))}
        </Section>
        <Section title="Ciudades comprometidas con la revolución verde">
          <Carousel carouselItems={carouselItems} />
        </Section>
      </main>
    </>
  );
};
