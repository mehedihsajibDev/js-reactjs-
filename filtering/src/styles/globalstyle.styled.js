import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: inherit;
  }
  html{
    box-sizing: border-box;
  }
  body{
    background-color: white;
    color: black;
  }
  img{
    width: 100%;
  }
`