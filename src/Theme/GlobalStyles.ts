import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
  ${reset}
  @font-face {
    font-family: 'Pretendard-Regular';
    src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff') format('woff');
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: 'LINESeedKR-Bd';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_11-01@1.0/LINESeedKR-Bd.woff2') format('woff2');
    font-weight: 700;
    font-style: normal;
  }

  @font-face {
    font-family: 'LINESeedKR-Rg';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_11-01@1.0/LINESeedKR-Rg.woff2') format('woff2');
    font-weight: 400;
    font-style: normal;
  }

  
  html, body {
    font-family: 'LINESeedKR-Rg', sans-serif;
    background-color: var(--color__tertiary);
    
  }

  ::-webkit-scrollbar {
    width: 0;  /* Remove scrollbar space */
    background: transparent;  /* Optional: just make scrollbar invisible */
  }
  
  #root{
    background-color: var(--color__primary);
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
  }
  
  :root {
    --color__primary: #313976;
    --color__secondary: #4a529e; 
    --color__tertiary: #9e92d2;
    --color__white: #fff;
    --color__text: #343a40;
    --color__text__grey: #495057;
    --color__light__grey: #e9ecef;
    --color__grey: #ced4da;
    --box__shadow: 0 5px 5px -1px;
    
  }
`;

export default GlobalStyles;
