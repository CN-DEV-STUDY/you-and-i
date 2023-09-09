import {createGlobalStyle} from "styled-components";

const GlobalStyles = createGlobalStyle`
  html, body, div, p, h1, h2 {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: var(--color__secondary);
    color: var(--color__white)
  }
  
  :root {
    --color__primary: #132090;
    --color__secondary: #00095e; 
    --color__white: #fff;
    
    
  }
`

export default GlobalStyles;