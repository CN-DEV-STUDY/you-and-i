import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  html, body, div, h1, h2 {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  h1, h2 {
    margin: 0;
    padding: 0;
    color: var(--color__white)
  }
  
  h3, p {
    margin: 0;
    padding: 0;
    font-size: 14px;
    color: var(--color__text)
  }
  
  :root {
    --color__primary: #BEADFA;
    --color__secondary: #DFCCFB; 
    --color__white: #fff;
    --color__text: #343a40;
    --box__shadow: 0 5px 5px -1px;
  }
`;

export default GlobalStyles;
