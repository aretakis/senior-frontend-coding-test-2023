import styled from "@emotion/styled";
import {css} from "@emotion/react";
import {FC, useCallback, useEffect, useState} from "react";
import {MovieDetails} from "./MovieDetails";

const Image = styled.img`
  width: auto;
  height: 90px;
  padding: 1rem;
`;

const MovieInfo = styled.h3`
  display: "flex";
  flex-direction: "row";
  width: auto;
  margin: 0rem;
  font-size: 1.2rem;
  padding: 1rem;
  font-weight: lighter;
`;

const ImdbResult = styled.div`
  display: "flex";
  width: fit-content;
  padding: 0.3rem;
  background-color: lightgrey;
  border-radius: 0.1rem;
  `;

const Container = styled.div`
   display: flex;
   background-color: white;
   color: #444;
   margin: 0.5rem 0rem;
`;

declare type MovieSearchResult = {
    imdbID: string;
    Poster: string;
    Title: string;
    Year: string;
    imdbRating: string;
};

export interface MovieContainerProps {
    movieSearchResult: MovieSearchResult;
    showDetailedView: boolean;
}

export const MovieResultContainer: FC<MovieContainerProps> = ({movieSearchResult, showDetailedView}) => {
    const [movieDetails, setMovieDetails] = useState();

    const fetchMovieDetails = useCallback(async () => {

        const fetchMovies = async (url: string) => {
            const response = await fetch(url);
            return await response.json();
        };

        const apiKey = 'e10af0d4';
        const url = `http://www.omdbapi.com/?apikey=${apiKey}&i=${movieSearchResult.imdbID}`;
        const result = await fetchMovies(url);
        setMovieDetails(result)
    }, [movieSearchResult.imdbID]);

    useEffect(() => {
        if (!movieDetails) {
            void fetchMovieDetails();
        }
    }, [fetchMovieDetails, movieDetails, showDetailedView]);

    if (movieDetails) {
        return (
            <Container>
                <Image src={movieSearchResult.Poster && movieSearchResult.Poster}/>
                <MovieInfo>
                    <div css={css`font-weight: bold;`}>{movieSearchResult.Title && movieSearchResult.Title}</div>
                    <span>{movieSearchResult.Year && movieSearchResult.Year}</span>
                    {movieSearchResult.imdbRating && <ImdbResult> {movieSearchResult.imdbRating}</ImdbResult>}
                    {showDetailedView && movieDetails && (
                        <MovieDetails movieDetails={movieDetails}/>
                    )}
                </MovieInfo>
            </Container>
        );
    }

}