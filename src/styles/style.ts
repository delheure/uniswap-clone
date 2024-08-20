import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --primary-color: #fc72ff;
    --default-background: #ffffff;
    --default-text: #222222;

    --unselected: #bdbdbd;
    --selected: #363062;
    --income: #5bdaa4;
    --toggle-unselected: #6b6b6b;
    --toggle-selected: #ffffff;
    --text-normal: #000000;
    --notification: #595959;
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
    font-font: Basel, sans-serif;
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
`;
