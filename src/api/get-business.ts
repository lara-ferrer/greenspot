import { getBusinessQuery, BusinessMethods } from "./queries";
import { client } from "../sanity-client";

export const getBusiness = async (businessUrl: string) => {
    const getBusinessByUrl = getBusinessQuery(BusinessMethods.GetBusinessesByUrl, businessUrl);
    const { business } = await client.fetch(getBusinessByUrl);

    return business[0];
}