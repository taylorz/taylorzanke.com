import { useCallback, useEffect, useState } from "react";
import Slideshow from "@/components/Slideshow";
import WorkList from "@/components/WorkList";
import { getExhibitions, getHome } from "@/lib/sanity";

// Module scope, so it survives client-side navigation but resets on a full
// page load: the slideshow plays on the first visit and only comes back on
// a refresh.
let slideshowPlayed = false;

export default function Home({ works, slideshow }) {
  const [showSlideshow, setShowSlideshow] = useState(
    () =>
      slideshow.slides.length > 0 &&
      (typeof window === "undefined" || !slideshowPlayed)
  );

  useEffect(() => {
    slideshowPlayed = true;
  }, []);

  const close = useCallback(() => setShowSlideshow(false), []);

  return (
    <>
      {showSlideshow && (
        <Slideshow slides={slideshow.slides} onClose={close} />
      )}
      <WorkList items={works} basePath="/work" />
    </>
  );
}

export async function getStaticProps() {
  const [exhibitions, home] = await Promise.all([getExhibitions(), getHome()]);

  const works = exhibitions.sort((a, b) => (b.year || 0) - (a.year || 0));

  const slideshow = {
    // Drop slides whose image has since been removed from the work.
    slides: (home?.slides || []).filter((slide) => slide.image),
  };

  return {
    props: {
      works,
      slideshow,
    },
    revalidate: 60,
  };
}
