import { createGlobalStyle } from "styled-components";
import { defaultTheme } from "./defaultTheme";

export const GlobalStyle = createGlobalStyle`
*{
    padding:0;
    margin: 0;
    box-sizing: border-box;
}

html,
body {
  max-width: 100vw;
  overflow-x: hidden;
}

body {
    background-color: ${defaultTheme.bodyColor};
    color: ${defaultTheme.textColor};
    border: ${defaultTheme.borderColor};
}

html {
  overflow: scroll;
}

a {
  color: inherit;
  text-decoration: none;
}

::-webkit-scrollbar {
  width: 0;
  background: transparent;
}
`;
