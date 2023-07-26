import React from 'react';
import '../styles/index.scss';
import { useParams } from 'react-router-dom';
import { Link } from "react-router-dom";
import { BusinessCard } from "kiwi-design-system";
import { CityHeader, Layout } from '../components';
import { useFetchData } from '../hooks/useFetchData';
import { getCityQuery, CityMethods } from '../queries';
import { City } from '../types/city';
import { getSanityImageUrl } from "../sanity-images";
import { Bussiness } from '../types/business';

export const CityPage = () => {
  const { cityName } = useParams();

  const getCityByName = getCityQuery(CityMethods.GetCityByName, { cityName });
  const city: City = useFetchData(getCityByName);

  const getBusinesses = city && getCityQuery(CityMethods.GetBusinesses, {cityRef: city[0]._id});
  const businesses: Bussiness[] = useFetchData(getBusinesses);

  const businessCards = businesses ? businesses.map((business, i) => (
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
      <CityHeader image={image} title={city && city[0].cityName} />
      <Layout numberOfColumns={2}>
        <p>Barra de filtros</p>
        <div className="d-grid">
          {businessCards}
        </div>
      </Layout>
    </>
  );
}
