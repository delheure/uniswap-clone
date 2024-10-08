import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --primary-logo: #FC74FE;
    --primary-color: #fc72ff;
    --default-background: #ffffff;
    --default-text: #222222;
    --text-gray: #7d7d7d;
    --hover-gray: #f5f5f5;
    --gray-background: #f9f9f9;
    --gray-icon: #cecece;
    --primary-button: #ffefff;
  }

  body {
    margin: 0;
    font-family: Basel,
    sans-serif,
    -apple-system,
    "Segoe UI",
    "Roboto",
    "Oxygen",
    "Ubuntu",
    "Cantarell",
    "Fira Sans",
    "Droid Sans",
    "Helvetica Neue",
    sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background: var(--background);
    color: var(--color);
  }

  * {
    font-family: Basel, sans-serif;
    box-sizing: border-box;
  }

  html {
    font-size: 16px;
    font-weight: 485;
    font-variant: none;
    font-smooth: always;
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
    -moz-osx-font-smoothing: grayscale;
    -webkit-tap-highlight-color: transparent;
  }

  body,
  html {
    min-height: 100%;
  }

  button {
    user-select: none;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;
