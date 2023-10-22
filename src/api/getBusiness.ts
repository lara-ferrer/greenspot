import { getRestaurantQuery, RestaurantMethods } from "../queries";
import { client } from "../sanity-client";

export const getBusiness = async (businessUrl: string) => {
    const getBusinessByUrl = getRestaurantQuery(RestaurantMethods.GetRestaurantByUrl, businessUrl);
    const { business } = await client.fetch(getBusinessByUrl);

    return business[0];
}