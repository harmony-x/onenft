import { createGlobalStyle } from "styled-components";

export const FontStyles = createGlobalStyle`
  @font-face {
    font-family: "Stapel";
    src: url("/fonts/Stapel_Bold.otf");
    font-weight: 700;
    font-style: normal;
  }

  @font-face {
    font-family: "Stapel";
    src: url("/fonts/Stapel_Medium.otf");
    font-weight: 500;
    font-style: normal;
  }

  @font-face {
    font-family: "Stapel";
    src: url("/fonts/Stapel_Regular.otf");
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: "Stapel";
    src: url("/fonts/Stapel_Light.otf");
    font-weight: 300;
    font-style: normal;
  }
`;
