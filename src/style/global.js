import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    background-color: #0b9920;

    font-family: "Roboto", sans-serif;
  }


  :focus{
    outline: transparent;
    box-shadow: 0 0 0 2px #5e60ce;
  }
`

const colors = {
  primary: "#ffffff",
  background: "#121212",
  accent: "#ffcb05",
  card: "#1f1f1f",
  glass: "rgba(255, 255, 255, 0.1)",
  glassDark:"rgba(0, 0, 0, 0.178)",
  hover: "rgba(255, 255, 255, 0.2)"
};

export default colors;
