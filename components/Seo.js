import Head from "next/head";
import { SITE, pageTitle } from "@/lib/site";

// Page <head> tags. _app renders this with the site defaults; a page renders
// it again to override. Tags are keyed, so next/head keeps only the page's
// version of each. Omitted props fall back to the defaults from _app.
//
// - title: page title, e.g. "Work" -> "Work - Taylor Louie Zanke"
// - description: plain text, ideally under ~155 characters
// - image: absolute URL for the link unfurl (1200×630 reads best)
export default function Seo({ title, description, image }) {
  const fullTitle = title === undefined ? undefined : pageTitle(title);
  return (
    <Head>
      {fullTitle !== undefined && (
        <>
          <title key="title">{fullTitle}</title>
          <meta key="og:title" property="og:title" content={fullTitle} />
          <meta key="twitter:title" name="twitter:title" content={fullTitle} />
        </>
      )}
      {description && (
        <>
          <meta key="description" name="description" content={description} />
          <meta
            key="og:description"
            property="og:description"
            content={description}
          />
          <meta
            key="twitter:description"
            name="twitter:description"
            content={description}
          />
        </>
      )}
      {image && (
        <>
          <meta key="og:image" property="og:image" content={image} />
          <meta key="og:image:width" property="og:image:width" content="1200" />
          <meta
            key="og:image:height"
            property="og:image:height"
            content="630"
          />
          <meta key="twitter:image" name="twitter:image" content={image} />
        </>
      )}
    </Head>
  );
}

// Absolute canonical URL for a router path (query/hash stripped).
export const canonicalUrl = (asPath) =>
  `${SITE.url}${asPath.split(/[?#]/)[0]}`.replace(/\/$/, "") || SITE.url;
