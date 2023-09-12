import styled from "@emotion/styled";
import {useState} from "react";
import {MovieResultContainer} from "./MovieResultContainer";
import {css} from "@emotion/react";

const SearchInput = styled.input`
  font-size: 1.2rem;
  padding: 0.5em;
  width: 50%;
  border-radius: 0.2rem;
  border: none;
`;

const DetailedViewCheckbox = styled.div`
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
`;

export const MovieSearch = () => {
    const [movieSearchResult, setMovieSearchResult] = useState();
    const [showDetailedView, setShowDetailedView] = useState(false);

    const url = (key, searchString) => `http://www.omdbapi.com/?apikey=${key}&s=${searchString}`;
    const fetchMovies = async (url: string) => {
        const response = await fetch(url);
        return await response.json();
    };

    const searchMovies =  async (e) => {
        const result = await fetchMovies(url('e10af0d4', e.target.value));
        setMovieSearchResult(result)
    };

    const hasMovieResponse = movieSearchResult && movieSearchResult.Response !== 'False' && movieSearchResult.Search
    const handleChange = () => {
        setShowDetailedView(!showDetailedView);
    }

    return (
        <>
            <SearchInput type="text" testId="searchInput" onChange={searchMovies} placeholder="Search OMDb"/>
            {hasMovieResponse && (
                <DetailedViewCheckbox>
                <input css={css`height: 1rem; width: 1rem;`} type="checkbox" name="showDetaildView" onClick={()=>handleChange()}/>
                <span css={css`text-align: center;`}>Detailed view</span>
            </DetailedViewCheckbox>)}
            <h3 data-testid="searchResultTitle">{hasMovieResponse && 'Searchresult'}</h3>
             {hasMovieResponse && movieSearchResult.Search.map(movie=>
                <MovieResultContainer movieSearchResult={movie} showDetailedView={showDetailedView}/>
            )}
        </>
    );
}