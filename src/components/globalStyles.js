import { createGlobalStyle } from "styled-components";
import InterVariable from "../assets/fonts/Inter-VariableFont_opsz,wght.woff2";
import InterItalic from "../assets/fonts/Inter-Italic-VariableFont_opsz,wght.woff2";

const GlobalStyle = createGlobalStyle`
:root{
  --white-color: #ffffff;
  --black-color: #000000;
  --gray-color: #323334;
  --orange-color: #ff4343;
  --OrangeDark-color: #ec1313;
} 

@font-face {
  font-family: "Inter";
  src: url(${InterVariable}) format("woff2");
  font-weight: 100 900;
  font-style: normal;
}

@font-face {
  font-family: "Inter";
  src: url(${InterItalic}) format("woff2");
  font-weight: 100 900;
  font-style: italic;
}

*, ::before, ::after{
    box-sizing: border-box;
    margin: 0;
}

body{
    min-height: 100vh;
    font-family: "Inter", sans-serif;
    font-optical-sizing: auto;
    font-weight: 400;
    font-style: normal;
    background-color: #ffc0cb;
}
`;

export default GlobalStyle;
