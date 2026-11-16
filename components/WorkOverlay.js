import Link from "next/link";
import { responsiveImage, fitLongSide, imageDimensions } from "@/lib/sanity";

// Longest side, in CSS px, an image can render at: the middle 4 of 6 columns
// of the 1024px content column (gap-6), i.e. 4 × 150.67 + 3 × 24.
const STACK_BOX = 675;
// From 1072px (1024px content + p-6 sides) the box is STACK_BOX; from md
// it's 4 of 6 columns (~66vw); below md the stack is full width.
const SIZES = `(min-width: 1072px) ${STACK_BOX}px, (min-width: 768px) 66vw, 100vw`;

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
// Layout, content centered at max-w-screen-lg. `images` are Sanity image
// objects; `children` (e.g. notes, details) go below the images.
export default function WorkOverlay({ title, images, children }) {
  return (
    <div className="font-[Arial] text-[15px] leading-[20px] text-[green] p-6 min-h-dvh">
      <div className="max-w-screen-lg mx-auto flex flex-col gap-10 pb-5">
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
