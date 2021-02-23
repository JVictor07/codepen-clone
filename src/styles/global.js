import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: ${(props) => props.theme.colors.dark};

    input {
      border: none;
      outline: none;
    }

    button {
      border: none;
      outline: none;
      cursor: pointer;
      background: none;
    }

    a {
      color: inherit;
      text-decoration: none;
    }

    ul,
    li {
      margin: 0;
      padding: 0;
      list-style: none;
    }
  }
`;
