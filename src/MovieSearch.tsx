import styled from "@emotion/styled";
import {useState} from "react";
import {MovieContainer} from "./MovieContainer";
import {css} from "@emotion/react";

const Input = styled.input`
  font-size: 1.2rem;
  padding: 0.5em;
  width: 50%;
  border-radius: 0.2rem;
  border: none;
`;

const Checkbox = styled.div`
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
            <Input type="text" testId="searchInput" onChange={searchMovies} placeholder="Search OMDb"/>
            <Checkbox>
                <input css={css`height: 1rem; width: 1rem;`} type="checkbox" name="showDetaildView" onClick={()=>handleChange()}/>
                <span css={css`text-align: center;`}>Show detailed view</span>
            </Checkbox>
            <h3 data-testid="searchResultTitle">{hasMovieResponse && 'Searchresult'}</h3>
             {hasMovieResponse && movieSearchResult.Search.map(movie=>
                <MovieContainer movieSearchResult={movie} showDetailedView={showDetailedView}/>
            )}
        </>
    );
}