import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  :root {
    --primary: #011627;
    --secondary: #002441;
    --green: #41EAD4;
    --red: #F71735;
    --yellow: #FF9F1C;  
  }

  body {
    height: 100vh;
    padding: 0px;
    margin: 0;
    box-sizing: border-box;
    background: var(--primary);
    color: #fff;

    font-family: 'Nunito', sans-serif;
  }
`