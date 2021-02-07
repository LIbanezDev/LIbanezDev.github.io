import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    font-family: Inter, serif;
  }
  h1 {
    font-size: 50px;
  }
  
  h3 {
    font-size: 30px;  
  }
  
  p {
    font-size: 23px;
  }

  li {
    font-size: 23px;
  }
`;

export const Container = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  overflow: hidden;
`;