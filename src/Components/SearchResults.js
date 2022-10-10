import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ButtonGroup from '../Modules/Button.js';
import ResultList from '../Modules/ResultList.js';

import '../Assets/Styles/SearchResults.css';

function SearchResults() {

    const { query, page } = useParams()
    const nextPage = parseInt(page) + 1
    const prevPage = parseInt(page) - 1

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [page])
    
    return (
        <div className="search-results m-3">
            <p className="text-light text-capitalize text-center h4"><strong>Results for:</strong> {query}</p>
            <div className="data-container row">
                <ResultList query={query} page={page} />
            </div>
            <div className="btn-container d-flex justify-content-center">
                <ButtonGroup
                    query={query}
                    page={page}
                    link={`search&query=${query}`}
                />

            </div>
        </div>
    )
}

export default SearchResults