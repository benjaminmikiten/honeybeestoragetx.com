import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

export const BodyStyle = createGlobalStyle`
  body{
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.bodyType};
    font-family: ${({ theme }) => theme.fonts.default};
    font-size: 16px;
  }
`;

export const GlobalStyle = createGlobalStyle`
  ${normalize}

  h1,h2,h3,h5,h6,li,p,a,address{
    margin: 0;
    padding: 0;
    font-style: normal;
    text-decoration: none;
    > sup{
      /* font-size: 1em; */
    }
    -webkit-font-smoothing: antialiased;
  }

  *,
  *:after,
  *:before {
    box-sizing: border-box;
  }


  sup {
    font-size: .5em;
  }
`;
