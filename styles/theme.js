import { createGlobalStyle } from "styled-components";

const buffer = 4;
const timing = ".15s";
const easing = "ease-in-out";

export const theme = {
  util: {
    buffer,
    timing,
    easing,
    transition: `all ${timing} ${easing}`,
  },
  zIndex: {
    lowest: -4,
    middleLow: -2,
    middle: 0,
    middleHigh: 2,
    highest: 4,
    overlays: 6,
  },
  breakpoint: {
    xs: 640,
    sm: 800,
    md: 1200,
    lg: 1440,
    xl: 1728,
  },
  color: {
    light: "#ffffff",
    medium: "#A5A5A7",
    dark: "#333333",
  },
  text: {
    family: {
      regular: "Arial, Helvetica, sans-serif",
    },
    body: {
      weight: {
        regular: 400,
      },
      size: {
        regular: 16,
      },
      lineHeight: {
        regular: 18,
      },
    },
  },
};
export const GlobalStyle = createGlobalStyle`

  body, html {
    margin: 0 !important;
    scroll-behavior: smooth;
    scroll-padding-top: ${({ theme }) => theme.util.buffer * 5}px;
    @media only screen and (max-width: ${({ theme }) =>
      theme.breakpoint.sm}px) {
    scroll-padding-top: ${({ theme }) =>
      theme.util.navHeightMobile * 2 + theme.util.buffer * 5}px;
  }
}


  html {
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
  }
  body {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  * {
    box-sizing: border-box;
  }
  a {
    cursor: pointer;
    text-decoration: none;
    &:hover {
      cursor: pointer;
    }
  }
`;
