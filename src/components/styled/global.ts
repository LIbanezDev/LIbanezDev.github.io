import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    font-family: Inter, serif;
  }

  p {
    font-size: 21px;
  }

  li {
    font-size: 20px;
  }
`;

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  overflow: hidden;
`;