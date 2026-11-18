import Link from "next/link";
import SiteNav from "@/components/SiteNav";
import { responsiveImage, fitLongSide, imageDimensions } from "@/lib/sanity";

// Longest side, in CSS px, an image can render at: the middle 4 of 6 columns
// of the overlay at its widest, the full site width (nav ~154px + gap-6 +
// 1280px content ≈ 1458px), i.e. 4 × 223 + 3 × 24. Approximate, since the
// nav's width comes from its text.
const STACK_BOX = 964;
// From ~1500px (the site width + p-6 sides) the box is STACK_BOX; from md
// it's 4 of 6 columns (~66vw); below md the stack is full width.
const SIZES = `(min-width: 1500px) ${STACK_BOX}px, (min-width: 768px) 66vw, 100vw`;

// Images fit a square box the width of the middle 4 of 6 columns (the full
// width below md):
// landscape fills the width, portrait fills the same height. The column is a
// size container so the image can use its width (cqw) as its height.
//
// Loading: the first image is fetched eagerly at high priority; the rest
// load lazily as they near the viewport. Each image's box is sized from its
// dimensions before it loads, so nothing jumps and lazy images below the
// fold don't collapse to 0px (which would make them all load at once).
function ImageStack({ images }) {
  if (!images?.length) return null;
  return (
    <div className="grid grid-cols-6 gap-6">
      <div className="col-span-6 md:col-start-2 md:col-span-4 flex flex-col gap-y-24 [container-type:inline-size]">
        {images.map((image, i) => {
          const dims = imageDimensions(image);
          const portrait = dims && dims.height > dims.width;
          const first = i === 0;
          return (
            <img
              key={i}
              {...responsiveImage(image, STACK_BOX, fitLongSide(image))}
              sizes={SIZES}
              alt=""
              loading={first ? "eager" : "lazy"}
              fetchpriority={first ? "high" : undefined}
              decoding={first ? "sync" : "async"}
              style={
                dims ? { aspectRatio: `${dims.width} / ${dims.height}` } : {}
              }
              className={`block mx-auto ${
                portrait ? "h-[100cqw] w-auto" : "w-full h-auto"
              }`}
            />
          );
        })}
      </div>
    </div>
  );
}

// Reads as a full-screen modal over /work: no nav, same type and padding as
// Layout. From md up the content spans the whole site width (nav + gap-6 +
// max-w-screen-xl content) and is centered in the viewport. The grid's first
// column sizes to an invisible, zero-height copy of the nav, so its width
// stays exact; the second holds up to 1280px; the content spans both.
// `images` are Sanity image objects; `children` (e.g. notes, details) go
// below the images.
export default function WorkOverlay({ title, images, children }) {
  return (
    <div className="font-[Arial] text-[15px] leading-[20px] text-[green] p-6 min-h-dvh md:grid md:grid-cols-[auto_minmax(0,theme(screens.xl))] md:gap-x-6 md:justify-center">
      <div
        aria-hidden
        className="hidden md:block invisible h-0 overflow-hidden"
      >
        <SiteNav />
      </div>
      <div className="w-full md:col-span-2 flex flex-col gap-10 pb-5">
        <div className="sticky top-6 flex justify-between gap-6">
          <h1>{title}</h1>
          <Link href="/work" className="shrink-0">
            Close
          </Link>
        </div>
        <ImageStack images={images} />
        {children}
      </div>
    </div>
  );
}
