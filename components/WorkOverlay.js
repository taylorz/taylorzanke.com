import Link from "next/link";
import SiteNav, {
  slideLineOffset,
  useWorkLineOffset,
} from "@/components/SiteNav";
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
      <div className="col-span-6 md:col-start-2 md:col-span-4 flex flex-col gap-y-10 [container-type:inline-size]">
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

// Lines its children up with Layout's content column: from md up, an
// invisible, zero-height copy of the nav (plus the nav's gap-6) sits to the
// left, so the offset matches the nav's real width. `navItem`, if given,
// shows in that nav column, on this row's first line.
function ContentColumn({ className = "", style, navItem, children }) {
  return (
    <div className={`flex ${className}`} style={style}>
      <div className="hidden md:block relative shrink-0 mr-6">
        <div aria-hidden className="invisible h-0 overflow-hidden">
          <SiteNav />
        </div>
        {navItem && <div className="absolute top-0 left-0">{navItem}</div>}
      </div>
      <div className="flex-1 min-w-0">{children}</div>
    </div>
  );
}

// Reads as a full-screen modal over /work: no nav, same type and padding as
// Layout. From md up the content spans the whole site width (nav + gap-6 +
// max-w-screen-xl content) and is centered in the viewport. The grid's first
// column sizes to an invisible, zero-height copy of the nav, so its width
// stays exact; the second holds up to 1280px. The image stack spans both
// columns (centered); the title row and text sit in the content column, as
// on Layout pages. From md up the title row floats over the images, stuck on the "Work" line of the (hidden) nav (Layout's
// work-line offset + p-6), or, for a work featured on the homepage, on the
// line of its slide number (`slide`, 1-based); it takes no space (h-0, and
// -mb-5 trims gap-10 to one line), so the images start on the nav's second
// line. That one nav
// item (the number, else Work) shows indented in the nav column beside it.
// `images` are Sanity image objects; `children` (e.g. notes, details) go
// below the images.
export default function WorkOverlay({ title, images, slide, children }) {
  const workLine = useWorkLineOffset();
  const titleLine = slide ? slideLineOffset(slide) : workLine;
  return (
    <div className="font-[Arial] text-[15px] leading-[20px] text-[green] p-6 min-h-dvh md:grid md:grid-cols-[auto_minmax(0,theme(screens.xl))] md:gap-x-6 md:justify-center">
      <div
        aria-hidden
        className="hidden md:block invisible h-0 overflow-hidden"
      >
        <SiteNav />
      </div>
      <div className="w-full md:col-span-2 flex flex-col gap-10 pb-5">
        {/* Sticky needs this full-height parent, so the row offsets itself
            with ContentColumn rather than sitting in the grid's column. */}
        <ContentColumn
          navItem={
            // The one visible nav item, indented as active: this work's
            // slide number (back to that slide), else Work.
            slide ? (
              <Link
                href={{ pathname: "/", query: { slide } }}
                as="/"
                className="block indent-6"
              >
                {slide}
              </Link>
            ) : (
              <Link href="/work" className="block indent-6">
                Work
              </Link>
            )
          }
          className="sticky z-10 top-6 md:top-[calc(24px+var(--title-line))] md:h-0 md:-mb-5 md:items-start"
          style={{ "--title-line": `${titleLine}px` }}
        >
          <div className="flex justify-between gap-6">
            <h1>{title}</h1>
            <Link href="/work" className="shrink-0">
              Close
            </Link>
          </div>
        </ContentColumn>
        <ImageStack images={images} />
        <ContentColumn>{children}</ContentColumn>
      </div>
    </div>
  );
}
