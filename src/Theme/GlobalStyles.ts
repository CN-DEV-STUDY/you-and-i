import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  html, body, div, h1, h2 {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: var(--color__secondary);
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
    --color__primary: #132090;
    --color__secondary: #00095e; 
    --color__white: #fff;
    --color__text: #343a40;
    --box__shadow: 0 10px 15px -3px;
  }
`;

export default GlobalStyles;
