import React from 'react';
import '../styles/index.scss';
import { useParams } from 'react-router-dom';
import { RestaurantMethods, getRestaurantQuery } from "../queries";
import { useFetchData } from "../hooks/useFetchData";
import { Business } from "../types";

export const BusinessPage = () => {
  const { businessUrl } = useParams();

  const getBusinessByUrl = getRestaurantQuery(RestaurantMethods.GetRestaurantByUrl, businessUrl);
  const business: Business = useFetchData(getBusinessByUrl);

  return (
    <main>
      <h2>{business && business[0].name}</h2>
    </main>
  );
}
