export enum CityMethods {
    GetCities,
    GetCityByName,
    GetBusinesses
}

export type GetCityQueryParams = {
    cityName?: string;
    cityRef?: string;
}

export const getCityQuery = (query: CityMethods, {cityName, cityRef}: GetCityQueryParams) => {
    if (query === CityMethods.GetCities) {
        return "*[_type == 'city']"
    }

    if (query === CityMethods.GetCityByName) {
        return `{ "cities": *[_type == 'city' && cityName == '${cityName}'] }`
    }

    if (query === CityMethods.GetBusinesses) {
        return `{ "businesses": *[_type == 'restaurant' && city._ref == '${cityRef}'] }`;
    }
}