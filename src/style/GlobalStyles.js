// src/styles/GlobalStyles.js
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  body {
    font-family: 'Roboto', sans-serif;
    background-color: #f4f6f9;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  * {
    box-sizing: border-box;
  }
`;

export default GlobalStyles;
