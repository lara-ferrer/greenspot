import { getCityQuery, CityMethods } from "./queries";
import { client } from "../sanity-client";

export const getCategoryBusinesses = async (cityName: string, categoryName: string) => {
  const getCityByName = getCityQuery(CityMethods.GetCityByName, { cityName });
  const { cities } = await client.fetch(getCityByName);

  const getCityBusinessesByCategory = getCityQuery(CityMethods.GetCityBusinessesByCategory, {
    cityRef: cities[0]._id,
    categoryName
  });
  const { businesses } = await client.fetch(getCityBusinessesByCategory);

  return businesses;
};
