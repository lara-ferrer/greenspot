import React, { useEffect, useState } from "react";
import { Searcher as KiwiSearcher } from "kiwi-design-system";
import { getSearch } from "../../../api/get-search";
import { SearchResults } from "../../../types/search-results";
import { mapBusinessUrl } from "../../../utils/search";
import { translateSubcategoriesToName } from "../../../utils/translations/es";
import "./searcher-bar.scss";

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
    if (searchItem && searchItem.length > 2) {
      getSearch(searchItem).then((data) => {
        setSearchResults(
          data.map(({ name, url, address, category, subcategories }) => ({
            name,
            link: mapBusinessUrl(category, url),
            address,
            categories: translateSubcategoriesToName(subcategories),
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
      isClearable={true}
      onClear={null}
    />
  );
};
