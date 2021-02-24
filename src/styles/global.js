import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  body, button, input {
    font-family: 'Poppins', sans-serif;
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;

    &::-webkit-scrollbar {
      width: 0.5em;
    }

    &::-webkit-scrollbar-track {
      box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    }

    &::-webkit-scrollbar-thumb {
      background-color: #666b7a;
    }

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
