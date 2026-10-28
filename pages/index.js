import { useEffect, useState } from "react";
import Head from "next/head";
import { getHome, urlFor } from "@/lib/sanity";
import Text from "@/components/Text";

// One slide, picked at random on each page load, centered in a square. The
// page is statically generated, so the pick happens in the browser after
// mount; picking during render would give the server and client different
// images.
export default function Home({ slides, ogImage }) {
  const [slide, setSlide] = useState(null);

  useEffect(() => {
    if (slides.length === 0) return;
    setSlide(slides[Math.floor(Math.random() * slides.length)]);
  }, [slides]);

  return (
    <div className="overflow-x-hidden">
      {ogImage && (
        <Head>
          <meta key="og:image" property="og:image" content={ogImage} />
          <meta key="twitter:image" name="twitter:image" content={ogImage} />
          <meta
            key="twitter:card"
            name="twitter:card"
            content="summary_large_image"
          />
        </Head>
      )}
      <div className="p-2 w-[100vw] h-[100dvh] flex items-center justify-center [container-type:size]">
        <div className="aspect-square w-[min(100cqw,100cqh)] select-none">
          {slide && (
            <img
              src={urlFor(slide.image).width(2400).quality(80).url()}
              alt=""
              className="w-full h-full object-contain"
            />
          )}
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const home = await getHome();
  // Drop slides whose image has since been removed from the work.
  const slides = (home?.slides || []).filter((slide) => slide.image);

  return {
    props: {
      slides,
      ogImage: slides[0]
        ? urlFor(slides[0].image).width(1200).quality(80).url()
        : null,
    },
    revalidate: 60,
  };
}
