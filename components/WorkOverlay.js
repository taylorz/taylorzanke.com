import { useContext } from "react";
import Link from "next/link";
import SiteNav, {
  SlideCountContext,
  slideLineOffset,
  useWorkLineOffset,
} from "@/components/SiteNav";
import { responsiveImage, fitLongSide, imageDimensions } from "@/lib/sanity";

// The stack's box: from md up it starts on the title's left edge (the
// content column, after the nav + gap-6) and is inset by the same amount on
// the right, so it stays centered in the site block. Images fit a square of
// that width: landscape fills the width, portrait fills the same height, so
// either way the long edge is the box width. Below md there's no nav, so
// the box is the full width (the title starts at the left edge too).
//
// The site has no max width, so `sizes` is all viewport-based. STACK_BOX is
// the box at a reference 1512px viewport, the base for the srcset (which
// goes up to 3x it, enough for very wide screens). Approximate, since the
// nav's width comes from its text.
const NAV_INSET = 178; // nav (~154px, incl. its pr-6) + gap-6
const STACK_BOX = 1512 - 48 - 2 * NAV_INSET;
// From md the box is the viewport minus p-6 and the inset on both sides;
// below md the stack is full width.
const SIZES = `(min-width: 768px) calc(100vw - ${
  48 + 2 * NAV_INSET
}px), 100vw`;

// An invisible, zero-height copy of the nav, so a sibling can be offset by
// exactly the nav's real width (plus gap-6, as margin on `side`). From md
// only.
function NavSpacer({ side = "right", children }) {
  return (
    <div
      className={`hidden md:block relative shrink-0 ${
        side === "right" ? "mr-6" : "ml-6"
      }`}
    >
      <div aria-hidden className="invisible h-0 overflow-hidden">
        <SiteNav />
      </div>
      {children}
    </div>
  );
}

// Loading: the first image is fetched eagerly at high priority; the rest
// load lazily as they near the viewport. Each image's box is sized from its
// dimensions before it loads, so nothing jumps and lazy images below the
// fold don't collapse to 0px (which would make them all load at once).
function ImageStack({ images }) {
  if (!images?.length) return null;
  return (
    // 100px everywhere: above the first image (below md, from the title
    // row; from md, where the title row takes no space, from the window's
    // top edge: p-6 + the -mb-5/gap-10 line + pt-14), between images,
    // between the last image and the details below, and below those to the
    // window's bottom edge. The column is a size container so portrait images
    // can use its width (cqw) as their height.
    <div className="flex pt-[60px] md:pt-14">
      <NavSpacer side="right" />
      <div className="flex-1 min-w-0 flex flex-col gap-y-[100px] [container-type:inline-size]">
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
      <NavSpacer side="left" />
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
      <NavSpacer>
        {navItem && <div className="absolute top-0 left-0">{navItem}</div>}
      </NavSpacer>
      <div className="flex-1 min-w-0">{children}</div>
    </div>
  );
}

// Reads as a full-screen modal over /work: no nav, same type and padding as
// Layout. From md up the content spans the whole site width (nav + gap-6 +
// content), with no max width, like Layout. The grid's first
// column sizes to an invisible, zero-height copy of the nav, so its width
// stays exact; the second takes the rest. The image stack starts on the
// content column's left edge and is inset the same on the right, so it
// stays centered; the title row and text sit in the content column, as
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
  const slideCount = useContext(SlideCountContext);
  const titleLine = slide ? slideLineOffset(slide) : workLine;
  return (
    <div className="font-[Arial] text-[15px] leading-[20px] text-[green] p-6 min-h-dvh md:grid md:grid-cols-[auto_minmax(0,1fr)] md:gap-x-6">
      <div
        aria-hidden
        className="hidden md:block invisible h-0 overflow-hidden"
      >
        <SiteNav />
      </div>
      <div
        className="w-full md:col-span-2 flex flex-col gap-10 pb-[76px]"
        style={{ "--title-line": `${titleLine}px` }}
      >
        {/* Sticky needs this full-height parent, so the row offsets itself
            with ContentColumn rather than sitting in the grid's column. */}
        <ContentColumn
          navItem={
            // The nav's slide numbers, each on its own nav line (offset up
            // from this row, which sits on the title line), linking back to
            // that slide, then Work on its nav line (gap-5 below, as in the
            // nav). The active item is indented: a featured work's number,
            // else Work.
            <div
              className="flex flex-col gap-5"
              style={{ marginTop: slideLineOffset(1) - titleLine }}
            >
              <ul>
                {Array.from({ length: slideCount }, (_, i) => i + 1).map(
                  (n) => (
                    <li
                      key={n}
                      className={`w-fit ${n === slide ? "indent-6" : "hover:indent-6"}`}
                    >
                      <Link
                        href={{ pathname: "/", query: { slide: n } }}
                        as="/"
                        className="block"
                      >
                        {n}
                      </Link>
                    </li>
                  ),
                )}
              </ul>
              <Link
                href="/work"
                className={`block w-fit ${slide ? "hover:indent-6" : "indent-6"}`}
              >
                Work
              </Link>
            </div>
          }
          className="sticky z-10 top-6 md:top-[calc(24px+var(--title-line))] md:h-0 md:-mb-5 md:items-start"
        >
          <div className="flex justify-between gap-6">
            <h1>{title}</h1>
            <Link href="/work" className="shrink-0">
              Close
            </Link>
          </div>
        </ContentColumn>
        <ImageStack images={images} />
        {/* In the page flow, spaced like the images: five lines below the
            last image (gap-10 + mt-[60px]) and five below the details
            (pb-[76px] + p-6). */}
        <ContentColumn className="mt-[60px]">
          {children}
        </ContentColumn>
      </div>
    </div>
  );
}
