export enum CityMethods {
    GetCities,
    GetCityByName,
    GetCityBusinesses,
    GetCityBusinessesByCategory,
    GetCityById
}

export type GetCityQueryParams = {
    cityName?: string;
    cityRef?: string;
    categoryName?: string;
}

export const getCityQuery = (query: CityMethods, {cityName, cityRef, categoryName}: GetCityQueryParams) => {
    if (query === CityMethods.GetCities) {
        return "*[_type == 'city']"
    }

    if (query === CityMethods.GetCityByName) {
        return `{ "cities": *[_type == 'city' && cityName == '${cityName}'] }`
    }

    if (query === CityMethods.GetCityById) {
        return `{ "cities": *[_type == 'city' && _id == '${cityRef}'] }`
    }

    if (query === CityMethods.GetCityBusinesses) {
        return `{ "businesses": *[_type == 'business' && city._ref == '${cityRef}'] }`;
    }

    if (query === CityMethods.GetCityBusinessesByCategory) {
        return `{ "businesses": *[_type == 'business' && city._ref == '${cityRef}' && category == '${categoryName}'] }`;
    }
}