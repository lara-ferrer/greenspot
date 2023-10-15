import React, { useEffect, useState } from "react";
import { Searcher as KiwiSearcher } from "kiwi-design-system";
import { getSearch } from "../../../api/getSearch";
import { SearchResults } from "../../../types/search-results";
import "./searcher.scss";

type SearcherProps = {
  placeholder: string;
};

export const Searcher = ({ placeholder }: SearcherProps) => {
  const [searchItem, setSearchItem] = useState<string>();
  const [searchResults, setSearchResults] = useState<SearchResults>();

  const handleKeyDown = (e: any) => {
    if (e.key === 'Enter') {
      const { value } = e.target;

      setSearchItem(value);
    }
  }

  useEffect(() => {
    if (searchItem && searchItem.length > 5) {
      getSearch(searchItem).then((data) => {
        setSearchResults(
          data.map(({ name, url, address, categories }) => ({
            name,
            link: url,
            address,
            categories,
          }))
        );
      });
    }
  }, [searchItem]);

  return (
    <KiwiSearcher
      placeholder={placeholder}
      results={searchResults}
      onKeyDown={(e) => handleKeyDown(e)}
    />
  );
};
