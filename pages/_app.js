import Head from "next/head";
import App from "next/app";
import { useRouter } from "next/router";
import "@/styles/globals.css";
import { getSiteMeta, ogImageUrl } from "@/lib/sanity";
import { SITE } from "@/lib/site";
import Seo, { canonicalUrl } from "@/components/Seo";
import { SlideCountContext } from "@/components/SiteNav";

// Site-wide <head> defaults (edit the text in lib/site.js). The unfurl image
// is the homepage slideshow's first image (work and individuals pages use
// their own first image); pages can override any of these with their own
// <Seo>.
export default function MyApp({ Component, pageProps, ogImage, slideCount }) {
  const { asPath } = useRouter();
  const url = canonicalUrl(asPath);
  return (
    <>
      <Head>
        <meta key="og:type" property="og:type" content="website" />
        <meta key="og:site_name" property="og:site_name" content={SITE.name} />
        <meta key="og:url" property="og:url" content={url} />
        <link key="canonical" rel="canonical" href={url} />
        <meta
          key="twitter:card"
          name="twitter:card"
          content="summary_large_image"
        />
      </Head>
      <Seo title={null} description={SITE.description} image={ogImage} />
      <main>
        <SlideCountContext.Provider value={slideCount}>
          <Component {...pageProps} />
        </SlideCountContext.Provider>
      </main>
    </>
  );
}

MyApp.getInitialProps = async (appContext) => {
  const appProps = await App.getInitialProps(appContext);
  const { slideCount = 0, firstSlideImage } = await getSiteMeta();
  return { ...appProps, ogImage: ogImageUrl(firstSlideImage), slideCount };
};
