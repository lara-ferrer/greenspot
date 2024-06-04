export enum BusinessMethods {
    GetBusinesses,
    GetBusinessesByUrl
}

export const getBusinessQuery = (query: BusinessMethods, businessUrl?: string) => {
    if (query === BusinessMethods.GetBusinesses) {
        return "*[_type == 'business']"
    }

    if (query === BusinessMethods.GetBusinessesByUrl) {
        return `{ "business": *[_type == 'business' && url == '${businessUrl}'] }`
    }

    return null;
}