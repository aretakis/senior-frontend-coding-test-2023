import styled from "@emotion/styled";
import {MovieSearch} from "./MovieSearch";

const Wrapper = styled.div`
  max-width: 960px;
  margin: 0 auto;
  padding: 2rem;
  background-color: #f5f5f5;
  font-family: sans-serif;
  color: #444;
`;

export const App = () => {
  return (
    <Wrapper>
        <h1>OMDb Movie Search</h1>
        <MovieSearch/>
    </Wrapper>
  );
};
