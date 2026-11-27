import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Layout from "@/components/Layout";
import {
  getHomeSlides,
  getIndividualGroups,
  responsiveImage,
  imageDimensions,
} from "@/lib/sanity";
import { resolveSlides } from "@/lib/slides";

// Full-screen with object-cover, the image renders at whichever is larger:
// the viewport width, or the viewport height × the image's aspect ratio
// (a landscape image on a portrait screen is cropped from something much
// wider than 100vw). Telling the browser that keeps it crisp either way.
const sizesFor = (image) => {
  const dims = imageDimensions(image);
  if (!dims) return "100vw";
  const ratio = (dims.width / dims.height) * 100;
  return `max(100vw, ${ratio.toFixed(1)}vh)`;
};

// Center the cover crop on the image's hotspot when one is set in the Studio.
// Below md the crop follows the slide's Mobile alignment instead (left,
// center or right; MOBILE_ALIGN on the img, !important to beat this inline
// style).
// Full class names, so Tailwind finds them.
const MOBILE_ALIGN = {
  left: "max-md:!object-left",
  center: "max-md:!object-center",
  right: "max-md:!object-right",
};
const objectPosition = (image) =>
  image.hotspot
    ? `${image.hotspot.x * 100}% ${image.hotspot.y * 100}%`
    : "center";

// Line height (leading-[20px]) shared by the nav and the title.
const LINE = 20;
// Page padding (p-6) around the Layout.
const PAD = 24;

export default function Home({ slides }) {
  // Clicking a number on another page lands here with ?slide=n.
  const { query } = useRouter();
  const requested = Number(query.slide) || 1;
  const [slide, setSlide] = useState(
    requested >= 1 && requested <= slides.length ? requested : 1,
  );

  // Nav number under the pointer, if any. The active slide's title always
  // shows; a hovered non-active number shows its title too, on its line.
  const [hoveredSlide, setHoveredSlide] = useState(null);
  const advance = () => setSlide((n) => (n % slides.length) + 1);
  const activeHref = slides[slide - 1]?.href;
  const shownSlides = [
    slide,
    ...(hoveredSlide && hoveredSlide !== slide ? [hoveredSlide] : []),
  ];

  return (
    // Click anywhere outside the nav and links to go to the next slide
    // (wrapping).
    <div
      className="min-h-dvh cursor-pointer"
      onClick={(e) => !e.target.closest("nav, a") && advance()}
    >
      {/* Every slide is rendered so switching is instant; only the active
          one is visible. The active one loads first at high priority, the
          rest right after at low priority. */}
      {slides.map(({ image, mobileAlignment }, i) => {
        const active = i + 1 === slide;
        return (
          <img
            key={i}
            {...responsiveImage(image, 1280)}
            sizes={sizesFor(image)}
            alt=""
            loading="eager"
            fetchpriority={active ? "high" : "low"}
            style={{ objectPosition: objectPosition(image) }}
            className={`fixed inset-0 -z-10 w-full h-full object-cover ${MOBILE_ALIGN[mobileAlignment] ?? MOBILE_ALIGN.center} ${
              active ? "" : "invisible"
            }`}
          />
        );
      })}
      <Layout
        slide={slide}
        setSlide={setSlide}
        setHoveredSlide={setHoveredSlide}
      >
        {/* From md up, each slide's title sits across the content column,
            on the same line as its number in the nav: the nav's name line +
            gap-5 put number 1 two 20px lines down from the top, then one
            line per number. One line: the title on the left (truncating)
            and, for the active slide, a "View" link at the far right. */}
        {shownSlides.map((n) => {
          const { title, href } = slides[n - 1] ?? {};
          if (!title) return null;
          return (
            <div
              key={n}
              className="hidden md:flex absolute inset-x-0 justify-between gap-6"
              style={{ top: `${(n + 1) * LINE}px` }}
            >
              <p className="truncate">{title}</p>
              {n === slide && href && (
                <Link href={href} className="shrink-0">
                  View
                </Link>
              )}
            </div>
          );
        })}
        {/* Below md the content stacks under the nav, so "View" is pinned to
            the viewport instead: on the active number's line (p-6 + two
            lines + one per number), at the right page margin. No title. */}
        {activeHref && (
          <Link
            href={activeHref}
            className="md:hidden fixed right-6"
            style={{ top: `${PAD + (slide + 1) * LINE}px` }}
          >
            View
          </Link>
        )}
      </Layout>
    </div>
  );
}

export async function getStaticProps() {
  const [slides, groups] = await Promise.all([
    getHomeSlides(),
    getIndividualGroups(),
  ]);
  return {
    props: { slides: resolveSlides(slides, groups) },
    revalidate: 60,
  };
}
