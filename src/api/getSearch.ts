import { getSearchQuery } from "../queries/search";
import { client } from "../sanity-client";

export const getSearch = async (searchString: string) => {
  const searchQuery = getSearchQuery(searchString);
  const { searchResults } = await client.fetch(searchQuery);

  return searchResults;
};
