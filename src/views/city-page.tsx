import React, { Suspense, useEffect, useState } from 'react';
import '../styles/index.scss';
import { useParams } from 'react-router-dom';
import { Link } from "react-router-dom";
import { BusinessCard } from "kiwi-design-system";
import { getSanityImageUrl } from "../sanity-images";
import { Business } from '../types/business';
import { businessBps } from '../constants/carousel-breakpoints';
import { Carousel, CityHeader, Section } from '../components/organisms';
import { Layout } from '../components/templates';
import { getCityBusinesses } from '../api/getCityBusinesses';
import { City } from '../types';
import { getCity } from '../api/getCity';
import { Loading } from '../components';

const CityPage = () => {
  const { cityName } = useParams();
  const [city, setCity] = useState<City>();
  const [cityBusinesses, setCityBusinesses] = useState<Business[]>();

  useEffect(() => {
    getCity(cityName).then((data) => setCity(data));
    getCityBusinesses(cityName).then((data) => setCityBusinesses(data));
  }, []);

  const cityBusinessesCards = cityBusinesses ? cityBusinesses.map((business, i) => (
    <Link to={`/${cityName}/business/${business.url}`}>
      <BusinessCard
        key={i}
        title={business.name}
        address={business.address}
        categories={business.categories}
        image={getSanityImageUrl(business.coverImage)}
      />
    </Link>
  )) : [];

  const image = city && getSanityImageUrl(city[0].coverImage);

  return (
    <Suspense fallback={ <Loading/> }>
      <CityHeader image={image} name={cityName} />
      <Layout numberOfColumns={2}>
        <div>
          <h2>Descubre {cityName}</h2>
          <p>Lorem ipsum</p>
        </div>
        <div className="align-right">
          <img src={image} alt={cityName} className="w-100" />
        </div>
      </Layout>
      <Section title={`Los mejores restaurantes en ${cityName}`} link="cities">
        <Carousel
          carouselItems={cityBusinessesCards}
          breakpoints={businessBps}
        />
      </Section>
    </Suspense>
  );
}

export default CityPage;