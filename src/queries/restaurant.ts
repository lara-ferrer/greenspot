export enum RestaurantMethods {
    GetRestaurants,
    GetRestaurantByUrl
}

export const getRestaurantQuery = (query: RestaurantMethods, restaurantUrl?: string) => {
    if (query === RestaurantMethods.GetRestaurants) {
        return "*[_type == 'restaurant']"
    }

    if (query === RestaurantMethods.GetRestaurantByUrl) {
        return `*[_type == 'restaurant' && url == '${restaurantUrl}']`
    }

    return null;
}