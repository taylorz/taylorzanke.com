import Head from "next/head";
import styled, { ThemeProvider } from "styled-components";
import { GlobalStyle, theme } from "../styles/theme";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/amf.ico" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0"
        />
      </Head>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component pageProps={pageProps} />
      </ThemeProvider>
    </>
  );
}
export default MyApp;
