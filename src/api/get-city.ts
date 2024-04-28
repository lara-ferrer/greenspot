import { getCityQuery, CityMethods } from "./queries";
import { client } from "../sanity-client";

export const getCity = async (cityName: string) => {
  const getCityByName = getCityQuery(CityMethods.GetCityByName, { cityName });
  const { cities } = await client.fetch(getCityByName);

  return cities[0];
};
