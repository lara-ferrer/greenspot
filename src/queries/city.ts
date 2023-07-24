export enum CityMethods {
    GetCities,
    GetCityByName
}

export const getCityQuery = (query: CityMethods, cityName?: string) => {
    if (query === CityMethods.GetCities) {
        return "*[_type == 'city']"
    }

    if (query === CityMethods.GetCityByName) {
        return `*[_type == 'city' && _cityName == ${cityName}]`
    }
}