import React from 'react';
import '../styles/index.scss';
import { useParams } from 'react-router-dom';
import { RestaurantMethods, getRestaurantQuery } from "../queries";
import { useFetchData } from "../hooks/useFetchData";
import { Business } from "../types";
import { BusinessHeader } from '../components';

export const BusinessPage = () => {
  const { businessUrl } = useParams();

  const getBusinessByUrl = getRestaurantQuery(RestaurantMethods.GetRestaurantByUrl, businessUrl);
  const business: Business = useFetchData(getBusinessByUrl);

  return (
    <>
      <BusinessHeader businessName={business.name} />
      <img src={business.coverImage} alt={business.name} className="w-100" />
    </>
  );
}
