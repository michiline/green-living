import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
    font-family: beaufort-pro;
  }
  *, *::after, *::before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-touch-callout: none;
    -webkit-tap-highlight-color: transparent;
    outline: none;
  }
`
