import { getCityQuery, CityMethods } from "./queries";
import { client } from "../sanity-client";

export const getCityBusinesses = async (cityName: string) => {
  const getCityByName = getCityQuery(CityMethods.GetCityByName, { cityName });
  const { cities } = await client.fetch(getCityByName);

  const getCityBusinesses = getCityQuery(CityMethods.GetBusinesses, { cityRef: cities[0]._id });
  const { businesses } = await client.fetch(getCityBusinesses);

  return businesses;
};
