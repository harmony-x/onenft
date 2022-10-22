import { createGlobalStyle } from "styled-components";

export const FontStyles = createGlobalStyle`
  @font-face {
    font-family: "Stapel";
    src: url("/fonts/Stapel_Bold.woff2") format("woff2");
    font-weight: 700;
    font-style: normal;
    font-display: swap
  }

  @font-face {
    font-family: "Stapel";
    src: url("/fonts/Stapel_Medium.woff2") format("woff2");
    font-weight: 500;
    font-style: normal;
    font-display: swap
  }

  @font-face {
    font-family: "Stapel";
    src: url("/fonts/Stapel_Regular.woff2") format("woff2");
    font-weight: 400;
    font-style: normal;
    font-display: swap
  }

  @font-face {
    font-family: "Stapel";
    src: url("/fonts/Stapel_Light.woff2") format("woff2");
    font-weight: 300;
    font-style: normal;
    font-display: swap
  }
`;
