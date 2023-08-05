import React from 'react';
import '../styles/index.scss';
import { useParams } from 'react-router-dom';
import { Link } from "react-router-dom";
import { BusinessCard } from "kiwi-design-system";
import { Carousel, CityHeader, Layout, Section } from '../components';
import { useFetchData } from '../hooks/useFetchData';
import { getCityQuery, CityMethods } from '../queries';
import { City } from '../types/city';
import { getSanityImageUrl } from "../sanity-images";
import { Business } from '../types/business';
import { businessBps } from '../constants/carousel-breakpoints';

export const CityPage = () => {
  const { cityName } = useParams();

  const getCityByName = getCityQuery(CityMethods.GetCityByName, { cityName });
  const city: City = useFetchData(getCityByName);

  const getCityBusinesses = city && getCityQuery(CityMethods.GetBusinesses, {cityRef: city[0]._id});
  const cityBusinesses: Business[] = useFetchData(getCityBusinesses);

  const cityBusinessesCards = cityBusinesses ? cityBusinesses.map((business, i) => (
    <Link to={`/business/${business.url}`}>
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
    <>
      <CityHeader image={image} name={city && city[0].cityName} />
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
    </>
  );
}
