import { getCityQuery, CityMethods } from "../queries";
import { client } from "../../sanity-client";

export const getCityById = async (cityRef: string) => {
  const getCityByRef = getCityQuery(CityMethods.GetCityById, { cityRef });
  const { cities } = await client.fetch(getCityByRef);

  return cities[0];
};
