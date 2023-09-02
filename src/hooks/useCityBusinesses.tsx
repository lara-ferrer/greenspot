import { getCityQuery, CityMethods } from "../queries";
import { Business } from "../types/business";
import { City } from "../types/city";
import { useFetchData } from "./useFetchData";

export const useCityBusinesses = (cityName: string) => {
  const getCityByName = getCityQuery(CityMethods.GetCityByName, { cityName });
  const city: City = useFetchData(getCityByName);

  const getCityBusinesses =
    city && getCityQuery(CityMethods.GetBusinesses, { cityRef: city[0]._id });
  const cityBusinesses: Business[] = useFetchData(getCityBusinesses);

  return cityBusinesses;
};
