import styled from "@emotion/styled";
import {FC} from "react";

const ImdbResult = styled.div`
  display: "flex";
  width: fit-content;
  padding: 0.3rem;
  background-color: lightgrey;
  border-radius: 0.1rem;
`;

const Title = styled.span` 
    font-weight: bold;
`;

export interface MovieDetailsProps {
    movieDetails: Any;
}

export const MovieDetails: FC<MovieDetailsProps> = ({movieDetails }) => {

    if (movieDetails) {
        return (
            <>
                <p>{movieDetails.Plot && movieDetails.Plot}</p>
                <p><Title>Actors </Title>{movieDetails.Actors && movieDetails.Actors}</p>
                <p><Title>Country </Title>{movieDetails.Country && movieDetails.Country}</p>
                <p><Title>Director </Title> {movieDetails.Director && movieDetails.Director}</p>
                <p>{movieDetails.Genre && movieDetails.Genre}</p>
                <ImdbResult>{movieDetails.imdbRating && movieDetails.imdbRating}</ImdbResult>
            </>
        );
    }

}