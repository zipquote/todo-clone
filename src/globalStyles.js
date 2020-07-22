import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  :root {
    --primary-color: #346fef;
  }

  html {
    height: 100%;
    font-size: 62.5%;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
  }

  * {
    box-sizing: border-box;
  }

  body {
    font-family: 'Questrial', sans-serif;
    font-size: 1.5rem;
    height: 100%;
  }

  #root {
    height: 100%;
  }
`;
