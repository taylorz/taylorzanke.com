import { useContext } from "react";
import Link from "next/link";
import SiteNav, {
  SlideCountContext,
  slideLineOffset,
  useWorkLineOffset,
} from "@/components/SiteNav";
import Head from "next/head";
import { urlFor, imageDimensions } from "@/lib/sanity";

// The stack's box: from md up it starts on the title's left edge (the
// content column, after the nav + gap-6) and is inset by the same amount on
// the right, so it stays centered in the site block. Images fit a square of
// that width: landscape fills the width, portrait fills the same height, so
// either way the long edge is the box width. Below md there's no nav, so
// the box is the content width (the viewport minus p-6 each side).
// Approximate, since the nav's width comes from its text.
const NAV_INSET = 178; // nav (~154px, incl. its pr-6) + gap-6
const BOX_MD = `100vw - ${48 + 2 * NAV_INSET}px`;
const BOX_MOBILE = "100vw - 48px";

// srcset widths: a ladder from phone (1x) to large retina screens; the
// browser picks the smallest that covers the image's rendered width × the
// screen's pixel density. Widths past the original's are dropped (Sanity
// won't upscale), with the original's own width as the top step instead.
const WIDTHS = [640, 828, 1080, 1440, 1920, 2560, 3200];

// srcset, src and sizes for one image. Its rendered width is the box width
// (landscape) or the box width × its aspect ratio (portrait, which fills
// the box's height), so `sizes` gives the browser its real width.
function stackImage(image) {
  const dims = imageDimensions(image);
  const ratio = dims ? dims.width / dims.height : 1;
  const portrait = ratio < 1;
  const maxWidth = dims?.width ?? Infinity;
  const widths = WIDTHS.filter((w) => w < maxWidth);
  if (Number.isFinite(maxWidth)) widths.push(maxWidth);
  const url = (w) =>
    urlFor(image).width(w).quality(85).auto("format").fit("max").url();
  const slot = (box) =>
    portrait ? `calc((${box}) * ${ratio.toFixed(4)})` : `calc(${box})`;
  return {
    src: url(widths.find((w) => w >= 1440) ?? widths[widths.length - 1]),
    srcSet: widths.map((w) => `${url(w)} ${w}w`).join(", "),
    sizes: `(min-width: 768px) ${slot(BOX_MD)}, ${slot(BOX_MOBILE)}`,
    dims,
    portrait,
  };
}

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

// Load order, top to bottom: the first image is preloaded from the <head>
// (so its download starts before the page's body is even parsed) and
// fetched at high priority; the second loads eagerly at normal priority, so
// it's usually ready by the time you scroll to it; the rest load lazily as
// they near the viewport, in page order. Each image's box is sized from its
// dimensions before it loads, so nothing jumps and lazy images below the
// fold don't collapse to 0px (which would make them all load at once).
// Decoding is async throughout so it never blocks rendering.
function ImageStack({ images }) {
  if (!images?.length) return null;
  const stack = images.map(stackImage);
  const first = stack[0];
  return (
    // 100px everywhere: above the first image (below md, from the title
    // row; from md, where the title row takes no space, from the window's
    // top edge: p-6 + the -mb-5/gap-10 line + pt-14), between images,
    // between the last image and the details below, and below those to the
    // window's bottom edge. The column is a size container so portrait images
    // can use its width (cqw) as their height.
    <div className="flex pt-[60px] md:pt-14">
      <Head>
        <link
          key="preload-first-image"
          rel="preload"
          as="image"
          href={first.src}
          imageSrcSet={first.srcSet}
          imageSizes={first.sizes}
          fetchpriority="high"
        />
      </Head>
      <NavSpacer side="right" />
      <div className="flex-1 min-w-0 flex flex-col gap-y-[100px] [container-type:inline-size]">
        {stack.map(({ src, srcSet, sizes, dims, portrait }, i) => (
          <img
            key={i}
            src={src}
            srcSet={srcSet}
            sizes={sizes}
            alt=""
            loading={i < 2 ? "eager" : "lazy"}
            fetchpriority={i === 0 ? "high" : undefined}
            decoding="async"
            style={
              dims ? { aspectRatio: `${dims.width} / ${dims.height}` } : {}
            }
            className={`block mx-auto ${
              portrait ? "h-[100cqw] w-auto" : "w-full h-auto"
            }`}
          />
        ))}
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
