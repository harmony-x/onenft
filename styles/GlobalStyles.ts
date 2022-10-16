import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  html,
  body {
    padding: 0;
    margin: 0;
    font-family: 'Stapel' !important;
    background-color: #242636;
    font-size: 62.5%;
  }

  a {
    color: inherit;
    text-decoration: none;
    transition: 0.3s ease-in-out;
    &:hover {
      color: rgba(5, 212, 182, 0.67);
    }
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  button {
    outline: none;
    border: none;
    background: transparent;
    height: fit-content;
    display: flex;
    align-items: center;
    cursor: pointer;
  }

  /* @media (prefers-color-scheme: dark) {
    html {
      color-scheme: dark;
    }
    body {
      color: white;
      background: black;
    }
  } */

`;
