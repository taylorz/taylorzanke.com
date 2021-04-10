import { createGlobalStyle } from 'styled-components'

import soehneBuchWoff from "../../static/assets/fonts/soehne/soehne-web-buch.woff"
import soehneBuchWoff2 from "../../static/assets/fonts/soehne/soehne-web-buch.woff2"
import soehneBuchEot from "../../static/assets/fonts/soehne/soehne-web-buch.eot"
import soehneHalbfettWoff from "../../static/assets/fonts/soehne/soehne-web-halbfett.woff"
import soehneHalbfettWoff2 from "../../static/assets/fonts/soehne/soehne-web-halbfett.woff2"
import soehneHalbfettEot from "../../static/assets/fonts/soehne/soehne-web-halbfett.eot"

// Style values:
const buffer = 10
const timing = ".15s"
const easing = "ease-in-out"
const stroke = "#000"
const strokeDarkened = "#adadc5"
const strokeWidth = 1

export const theme =
{
  util: {
    buffer: buffer,
    bigBuffer: `${buffer*20}`,
    bigBufferMobile: `${buffer*5}`,
    radius: 3,
    radiusMedium: 5,
    radiusLarge: 10,
    timing: timing,
    transition: `all ${timing} ${easing}`,
    shadow: "rgb(0,0,0,0.07) 0px 1px 7px 0px",
    shadowLarge: "rgb(0,0,0,0.15) 0px 50px 100px 0px",
    borderWidth: strokeWidth,
    border: `${strokeWidth}px solid ${stroke}`,
    borderLight: `${strokeWidth}px solid #fff`,
    borderDarkened: `${strokeWidth}px solid ${strokeDarkened}`,
    navWidth: 200,
    inlinePadding: `${buffer/2}px ${buffer}px`,
    inlinePaddingLarge: `${buffer}px ${buffer*2}px`,
    globalNavHeight: 70,
    headerHeight: 60,
    footerHeight: 40
  },
  breakpoint: {
    xs: 640,
    sm: 768,
    md: 1024,
    lg: 1440
  },
  color: {
    climate: '#3F35B6',
    white: '#FFFFFF',
    gray: '#CCCCCC',
    lightGreen: '#00C19F',
    darkGreen: '#025F1D',
    mustard: '#B58500',
    pink: '#EFBAE1',
    black: '#1D252D',
    darkBlue: '#003DA5',
    purple: '#9B92F5',
    //UI COLORS
    uiLightGray: '#F6F7F9',
    uiMediumGray: '#eaeaea',
    uiDarkGray: '#CED0D3',
  },
  text: {
    sizeXSmall: 14,
    sizeSmall: 18,
    size: 28,
    lineHeightXSmall: 16,
    lineHeightSmall: 20,
    lineHeight: 30,
    //TREATMENTS
    weight: "400",
    weightHeavy: "700",
    familyTextMedium: `'Soehne Halbfett', sans-serif`,
    familyTextRegular: `'Soehne Buch', sans-serif`,
  }
}
;

// Global styles:
export const GlobalStyle = createGlobalStyle`
  @font-face {
      font-family: 'Soehne Buch';
      font-display: block; /* No longer causing FOUT */
      src: local('Soehne Buch'), local('soehneBuch'),
      url(${soehneBuchEot}) format('eot'),
      url(${soehneBuchWoff2}) format('woff2'),
      url(${soehneBuchWoff}) format('woff');
  }
  @font-face {
      font-family: 'Soehne Halbfett';
      font-display: block; /* No longer causing FOUT */
      src: local('Soehne Halbfett'), local('soehneHalbfett'),
      url(${soehneHalbfettEot}) format('eot'),
      url(${soehneHalbfettWoff2}) format('woff2'),
      url(${soehneHalbfettWoff}) format('woff');
  }

  html, body {
    height: 100%;
    margin: 0 !important;
    overflow: hidden;
    background: ${props => props.theme.color.bg};
    /* font-family: ${props => props.theme.text.familyCondensed}; */
    font-family: ${props => props.theme.text.familyTextRegular};
    /* font-family: 'Untitled Sans Test'; */
    -webkit-overflow-scrolling: touch;
  }
  html {
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
  }
  body {
    margin: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    /* font-size: ${props => props.theme.text.size}px;
    line-height: ${props => props.theme.text.size}px; */
    font-family: ${props => props.theme.text.family};
    color: ${props => props.theme.text.color};
    background-color: ${props => props.theme.color.bg};
  }
  * {
    box-sizing: border-box;
  }
  input, textarea {
    font-size: ${props => props.theme.text.size}px;
    font-family: ${props => props.theme.text.family};
    color: ${props => props.theme.text.color};
  }
  textarea {
    /* line-height: 18px; */
  }
  button: {
    cursor: pointer;
  }
  a {
    text-decoration: none;
    cursor: pointer;
    color: inherit;
    &:hover {
      color: inherit;
    }
    &:visited {
      color: inherit;
    }
  }
  ::placeholder {
    color: ${props => props.theme.text.colorExtraLightened};
  }

  h1,h2,h3,h4,h5,h6,a,p,div,span {
    &.secondary {
      color: ${props => props.theme.text.colorLightened};
      /* font-size: ${props => props.theme.text.sizeSmall}px;
      line-height: ${props => props.theme.text.lineHeightSmall}px; */
      a {
        /* font-size: ${props => props.theme.text.sizeSmall}px; */
      }
    }
    &.withLabel {
      margin-top: 0;
    }
  }

  ul {
    margin: 0;
    padding: 0;
  }

  p, a, li, div {
    /* font-size: ${props => props.theme.text.size}px;
    font-weight: ${props => props.theme.text.weight}; */
  }

  p {
    /* line-height: ${props => props.theme.text.lineHeight}px; */
  }

  pre {
    /* font-family: ${props => props.theme.text.family}; */
  }
`
