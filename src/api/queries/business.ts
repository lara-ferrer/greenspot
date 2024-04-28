export enum BusinessMethods {
    GetBusinesses,
    GetBusinessesByUrl
}

export const getBusinessQuery = (query: BusinessMethods, businessUrl?: string) => {
    if (query === BusinessMethods.GetBusinesses) {
        return "*[_type == 'restaurant']"
    }

    if (query === BusinessMethods.GetBusinessesByUrl) {
        return `{ "business": *[_type == 'restaurant' && url == '${businessUrl}'] }`
    }

    return null;
}