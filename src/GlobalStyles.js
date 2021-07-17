import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
    font-size: 16px;
  }
  *, *::before, *::after {
    box-sizing: inherit;
  }
	ul, li, h1, h2, h3, p, button {
    margin: 0;
		padding: 0;
  }
  ul {
    list-style: none;
  }
  button {
    background: transparent;
    border: 0;
    outline: 0;
	}
  body {
    width: min(100%, 1440px);
		margin: 0 auto;
    background: #fff;
  }

`