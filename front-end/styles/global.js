// styles/global.js
import css from "styled-jsx/css";

export default css.global`
  html {
    font-size: 62.5%;
    box-sizing: border-box;
  }
  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }
  body {
    font-size: 1.6rem;
    line-height: 1.5;
    font-family: "PT Sans", sans-serif;
    width: 100%;
    background-color: #14274e;
  }

  main {
    width: 100%;
  }
  h1,
  h2,
  h3 {
    margin: 0 0 2rem 0;
    line-height: 1.5;
  }
  h1,
  h2 {
    font-family: "Roboto Slab", serif;
    font-weight: 700;
  }
  h3 {
    font-family: "PT Sans", sans-serif;
  }
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  a {
    text-decoration: none;
  }
  img {
    max-width: 100%;
  }
`;
