import { createGlobalStyle } from 'styled-components'

import fannGrotesqueRegularWoff from "../assets/fonts/fann/fann-grotesque-regular-pro.woff"
import fannGrotesqueRegularWoff2 from "../assets/fonts/fann/fann-grotesque-regular-pro.woff2"
import fannGrotesqueRegularEot from "../assets/fonts/fann/fann-grotesque-regular-pro.eot"
import fannGrotesqueSemiboldWoff from "../assets/fonts/fann/fann-grotesque-semibold-pro.woff"
import fannGrotesqueSemiboldWoff2 from "../assets/fonts/fann/fann-grotesque-semibold-pro.woff2"
import fannGrotesqueSemiboldEot from "../assets/fonts/fann/fann-grotesque-semibold-pro.eot"

// Style values:
const buffer = 8 // half base line height
const timing = ".15s"
const easing = "ease-in-out"

export const theme = {
  util: {
    buffer: buffer,
    transition: `all ${timing} ${easing}`,
  },
  breakpoint: {
    xs: 640,
    sm: 768,
    md: 1024,
    lg: 1440
  },
  color: {
    black: '#222222',
    white: '#FFFFFF',
    gray: '#CCCCCA',
    primary: 'Peru',
    secondary: 'SaddleBrown'
  },
  text: {
    fontSize: 14,
    lineHeight: 16,
    fontFamily: 'Fann Grotesque Regular',
    fontFamilySemibold: 'Fann Grotesque Semibold',
  }
};

// Global styles:
export const GlobalStyle = createGlobalStyle`
  @font-face {
      font-family: 'Fann Grotesque Regular';
      font-display: block; /* No longer causing FOUT */
      src: local('Fann Grotesque Regular'), local('fannGrotesqueRegular'),
      url(${fannGrotesqueRegularEot}) format('eot'),
      url(${fannGrotesqueRegularWoff2}) format('woff2'),
      url(${fannGrotesqueRegularWoff}) format('woff');
  }
  @font-face {
      font-family: 'Fann Grotesque Semibold';
      font-display: block; /* No longer causing FOUT */
      src: local('Fann Grotesque Semibold'), local('fannGrotesqueSemibold'),
      url(${fannGrotesqueSemiboldEot}) format('eot'),
      url(${fannGrotesqueSemiboldWoff2}) format('woff2'),
      url(${fannGrotesqueSemiboldWoff}) format('woff');
  }
`
