import React, { Suspense, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from "react-router-dom";
import { BusinessCard } from "kiwi-design-system";
import { getSanityImageUrl } from "../../sanity-images";
import { Business } from '../../types/business';
import { businessBps } from '../../constants/carousel-breakpoints';
import { Carousel, Section } from '../../components/organisms';
import { Layout } from '../../components/templates';
import { getCityBusinesses } from '../../api/get-city-businesses';
import { getCity } from '../../api/get-city';
import { Loading } from '../../components';
import { CityHeader } from './components/city-header/city-header';
import { City } from '../../types/city';
import '../../styles/index.scss';

const CityPage = () => {
  const { cityName } = useParams();
  const [city, setCity] = useState<City>();
  const [cityBusinesses, setCityBusinesses] = useState<Business[]>();

  useEffect(() => {
    getCity(cityName).then((data) => setCity(data));
    getCityBusinesses(cityName).then((data) => setCityBusinesses(data));
  }, []);

  const cityBusinessesCards = cityBusinesses ? cityBusinesses.map((business, i) => (
    <Link to={`/restaurantes/${business.url}`}>
      <BusinessCard
        key={i}
        title={business.name}
        address={business.address}
        categories={business.categories}
        image={getSanityImageUrl(business.coverImage)}
      />
    </Link>
  )) : [];

  const image = city && getSanityImageUrl(city.coverImage);

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
      <Section title={`Los mejores restaurantes en ${cityName}`}>
        <Carousel
          carouselItems={cityBusinessesCards}
          breakpoints={businessBps}
        />
      </Section>
    </Suspense>
  );
}

export default CityPage;