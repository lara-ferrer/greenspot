import { Searcher as KiwiSearcher } from 'kiwi-design-system';
import React, { useEffect, useState } from 'react';
import { getSearch } from '../../../api/getSearch';

type SearcherProps = {
    placeholder: string;
};

export const Searcher = ({ placeholder }: SearcherProps) => {
    const [searchItem, setSearchItem] = useState<string>();
    const [searchResults, setSearchResults] = useState<any>();

    const handleInput = (e: any) => {
        const { value } = e.target;
    
        setSearchItem(value);
    };

    useEffect(() => {
        if (searchItem && searchItem.length > 5) {
            getSearch(searchItem).then((data) => {
                console.log(data)
                setSearchResults(data)
            });
        }
    }, [searchItem])

    return (
        <>
            <KiwiSearcher placeholder={ placeholder } onInput={ (e) => handleInput(e) } />
            {searchResults && <h1>{searchResults.name}</h1> }
        </>
    )
}