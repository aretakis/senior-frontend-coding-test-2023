import styled from "@emotion/styled";

const Wrapper = styled.div`
  max-width: 960px;
  margin: 0 auto;
  padding: 2rem;
  background-color: #f5f5f5;
  font-family: sans-serif;
  color: #444;
`;

const Title = styled.h1`
  margin: 0 0 1rem;
  font-size: 2rem;
`;

export const App = () => {
  return (
    <Wrapper>
      <Title>Welcome!</Title>
      <p>
        This is the development environment of the coding test! We have added
        some sparse boilerplate for Emotion and Playwright to help you get
        started. Make sure to read the readme properly before you get coding and
        don't hesitate to get in touch with us if you have any questions.
      </p>
      <i>Good luck! ⭐️</i>
    </Wrapper>
  );
};
