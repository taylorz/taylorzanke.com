import Head from "next/head";
import App from "next/app";
import "@/styles/globals.css";
import { getExhibitions, urlFor } from "@/lib/sanity";

export default function MyApp({ Component, pageProps, ogImage }) {
  return (
    <>
      <Head>
        <title>Taylor Zanke</title>
        <meta name="description" content="Taylor Zanke" />
        <meta property="og:title" content="Taylor Zanke" />
        <meta property="og:description" content="Taylor Zanke" />
        <meta name="twitter:title" content="Taylor Zanke" />
        <meta name="twitter:description" content="Taylor Zanke" />
        {ogImage && <meta property="og:image" content={ogImage} />}
        {ogImage && <meta name="twitter:image" content={ogImage} />}
        {ogImage && <meta name="twitter:card" content="summary_large_image" />}
      </Head>
      <main>
        <Component {...pageProps} />
      </main>
    </>
  );
}

MyApp.getInitialProps = async (appContext) => {
  const appProps = await App.getInitialProps(appContext);
  const exhibitions = await getExhibitions();
  const ogImage = exhibitions[0]?.firstImage
    ? urlFor(exhibitions[0].firstImage).width(1200).quality(80).url()
    : null;
  return { ...appProps, ogImage };
};
