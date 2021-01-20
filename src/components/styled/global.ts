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
  margin: 50px;
  overflow: hidden;
`;