import { getCityQuery, CityMethods } from "../queries";
import { client } from "../sanity-client";

export const getCityBusinesses = async (cityName: string) => {
  const getCityByName = getCityQuery(CityMethods.GetCityByName, { cityName });
  const { city } = await client.fetch(getCityByName);

  return city;
};
