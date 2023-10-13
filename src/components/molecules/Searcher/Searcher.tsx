import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
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

  const handleInput = (e: any) => {
    const { value } = e.target;

    setSearchItem(value);
  };

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
    <>
      {searchResults &&
        createPortal(<div className="grsp-searcher" />, document.getElementsByClassName('grsp')[0])}
      <KiwiSearcher
        placeholder={placeholder}
        results={searchResults}
        onInput={(e) => handleInput(e)}
      />
    </>
  );
};
