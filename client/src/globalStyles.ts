import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
  body {
    margin: 0;
    padding: 0;
    background:  #191919;
    color: #D6D5A8;
    font-family: "Open-Sans", Helvetica, Sans-Serif;
  }
`;

export default GlobalStyle;