export const getSearchQuery = (searchString: string) => `{ "searchResults": *[name match "${searchString}*"] }`;