import { useEffect, useState } from 'react';
import '../styles/index.scss';
import Section from '../components/section/Section';
import { Card } from 'kiwi-design-system';
import { client } from '../sanity-client';
import { getSanityImageUrl } from '../sanity-images';

export const Home = () => {
  const [restaurants, setRestaurants] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const data = await client.fetch(`*[_type == 'restaurant']`);
      
      return setRestaurants(data);
    }
    fetchData();
  }, []);

  return (
    <main>
        <Section>
            <h2>Cerca de ti</h2>
            {restaurants.map((restaurant, i) => (
            <Card key={i} title={restaurant.name} address={restaurant.address} categories={restaurant.categories} image={getSanityImageUrl(restaurant.coverImage)} />
            ))}
      </Section>
    </main>
  );
}
