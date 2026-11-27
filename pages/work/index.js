import { useState } from "react";
import Link from "next/link";
import Layout from "@/components/Layout";
import Seo from "@/components/Seo";
import WorkRow from "@/components/WorkRow";
import { PAGES } from "@/lib/site";
import {
  getWorksWithImages,
  getTags,
  responsiveImage,
  imageDimensions,
} from "@/lib/sanity";

const VIEWS = ["List", "Images"];

// Images view: images like a contact sheet, each uncropped at its own aspect
// ratio and centered in a box one row tall (--row).
// - From md they wrap into rows ROW_LINES lines of text tall (LINE, the
//   site's 20px line height), gap-y-5 (one line) apart, so the grid keeps
//   the text's rhythm.
// - Below md, two per row (a 2-column grid), rows MOBILE_ROW_VW tall.
// From md each image's height is set by its work's type, in whole lines of
// the row: TYPE_LINES of ROW_LINES (a work with several types takes the
// largest, one with none DEFAULT_LINES), e.g. a book 15 of 16. Below md
// every image is the full row height. An image too wide for its box is its
// box's width instead.
const LINE = 20;
const ROW_LINES = 16;
const ROW_PX = ROW_LINES * LINE;
// Image height in lines per type (tag title, lowercase).
const TYPE_LINES = { installation: 16, book: 15, recording: 14 };
const DEFAULT_LINES = 15;
const linesFor = (work) =>
  Math.max(
    0,
    ...(work.tags ?? []).map((t) => TYPE_LINES[t.title?.toLowerCase()] ?? 0),
  ) || DEFAULT_LINES;
const MOBILE_ROW_VW = 30;

// A comma-separated inline list; the active item gets px-6.
function Picker({ items, active, onChange }) {
  return (
    <ul>
      {items.map((item, i) => (
        <li key={item} className="inline">
          <button
            onClick={() => onChange(item)}
            className={item === active ? "pl-6" : "hover:pl-6"}
          >
            {item}
          </button>
          {i < items.length - 1 && ", "}
        </li>
      ))}
    </ul>
  );
}

const ALL = "All";

export default function Work({ works: allWorks, tags }) {
  const [view, setView] = useState("List");
  // Picker labels are tag titles; "All" shows every work, a tag only its
  // works.
  const filters = [ALL, ...tags.map((tag) => tag.title)];
  const [filter, setFilter] = useState(ALL);
  const works =
    filter === ALL
      ? allWorks
      : allWorks.filter((work) => work.tags?.some((t) => t.title === filter));
  const showWorks = works.length > 0;
  // The Images view only shows works that have an image (so their page has
  // something to show), in the list's order (newest year first, then by
  // title).
  const imageWorks = works.filter((work) => work.images?.[0]?.image);

  // Each work's image in the Images view: its main image if set in Sanity,
  // else its first image. Its srcset and its dimensions (to reserve its box
  // before it loads; square if unknown). Its height and width from md; the
  // width gives the srcset base (at the reference viewport, at least the
  // mobile full width) and `sizes`.
  const cardImages = imageWorks.map((work) => {
    const image = work.mainImage?.asset ? work.mainImage : work.images[0].image;
    const dims = imageDimensions(image) ?? { width: 1, height: 1 };
    const ratio = dims.width / dims.height;
    const lines = linesFor(work);
    const widthPx = Math.round(lines * LINE * ratio);
    const mobileWidthVw = Math.min(50, MOBILE_ROW_VW * ratio);
    return {
      ...dims,
      ...responsiveImage(image, Math.max(768, widthPx)),
      lines,
      sizes: `(min-width: 768px) ${widthPx}px, ${mobileWidthVw.toFixed(1)}vw`,
    };
  });

  return (
    <Layout>
      <Seo {...PAGES.work} />
      <div className="pb-10">
        {/* Views in the first of 6 columns, filters across the rest. */}
        <div className="grid md:grid-cols-12 gap-x-6">
          <div className="col-span-5">
            <Picker items={VIEWS} active={view} onChange={setView} />
          </div>
          <div className="col-span-7">
            <Picker items={filters} active={filter} onChange={setFilter} />
          </div>
        </div>
      </div>
      {view === "Images" ? (
        imageWorks.length > 0 && (
          // Just the images. Below md two per row, 6px apart across
          // (gap-x-1.5) and 24px down (gap-y-6); from md they wrap into
          // rows, 24px apart across (gap-x-6) and one line down (gap-y-5).
          // --row is the row height at each size. No captions, so each
          // image's alt is its title.
          <div
            className="grid grid-cols-2 gap-x-1.5 gap-y-6 md:flex md:flex-wrap md:gap-x-6 md:gap-y-5 [--row:var(--row-mobile)] md:[--row:var(--row-md)]"
            style={{
              "--row-mobile": `${MOBILE_ROW_VW}vw`,
              "--row-md": `${ROW_PX}px`,
              "--row-lines": ROW_LINES,
            }}
          >
            {imageWorks.map((work, i) => (
              <Link
                key={work._id}
                href={`/work/${work.slug}`}
                // A full row tall (--row), the image centered in it.
                className="flex items-center justify-center min-w-0 h-[var(--row)]"
              >
                <img
                  // Below md the full row height; from md its type's share
                  // of the row (--lines of ROW_LINES). Width by aspect
                  // ratio, at most its box's width (object-contain keeps a
                  // too-wide one uncropped).
                  className="block w-auto max-w-full object-contain h-full md:h-[calc(var(--row)*var(--lines)/var(--row-lines))]"
                  style={{ "--lines": cardImages[i].lines }}
                  src={cardImages[i].src}
                  srcSet={cardImages[i].srcSet}
                  sizes={cardImages[i].sizes}
                  // Reserves the box at the image's aspect ratio before it
                  // loads.
                  width={cardImages[i].width}
                  height={cardImages[i].height}
                  alt={[work.title, work.year].filter(Boolean).join(", ")}
                />
              </Link>
            ))}
          </div>
        )
      ) : (
        // `works` comes from Sanity sorted newest year first.
        <div>
          {showWorks && (
            // Below md the whole list is one grid (each row a subgrid
            // spanning it): the title takes the rest and truncates; type and
            // year each take the width of their longest value, so they line
            // up on every row; columns gap-6 apart. From md up each row is
            // its own WorkRow.
            <ul className="grid grid-cols-[minmax(0,1fr)_max-content_max-content] gap-x-6 md:block">
              {works.map((work) => {
                // A work with images links to its page and reacts to hover;
                // one without is plain, unclickable text with a dithered
                // fill (see .dither in globals.css).
                const viewable = Boolean(work.images?.[0]?.image);
                const rowClass =
                  "col-span-full grid grid-cols-[subgrid] md:block";
                const cells = (
                  <>
                    <span className="truncate md:hidden">{work.title}</span>
                    <span className="md:hidden">
                      {work.tags?.map((t) => t.title).join(", ")}
                    </span>
                    <span className="md:hidden">{work.year}</span>
                    {/* From md up, the row: title, type, note, year,
                        "View". On hover a viewable row's text indents 24px,
                        like the nav (the columns stay put), and "View"
                        shows at the end. "View" keeps its space on every
                        row, hidden, so the years line up. */}
                    <WorkRow
                      className="hidden md:grid"
                      cellClass={viewable ? "group-hover:pl-6" : ""}
                      year={work.year}
                      types={work.tags?.map((t) => t.title).join(", ")}
                      title={work.title}
                      note={work.note}
                      view={
                        <span
                          className={`invisible ${viewable ? "group-hover:visible" : ""}`}
                        >
                          View
                        </span>
                      }
                    />
                  </>
                );
                return (
                  <li key={work._id} className={rowClass}>
                    {viewable ? (
                      <Link
                        href={`/work/${work.slug}`}
                        className={`group ${rowClass}`}
                      >
                        {cells}
                      </Link>
                    ) : (
                      <div className={`dither ${rowClass}`}>{cells}</div>
                    )}
                  </li>
                );
              })}
            </ul>
          )}
        </div>
      )}
    </Layout>
  );
}

export async function getStaticProps() {
  const [works, tags] = await Promise.all([getWorksWithImages(), getTags()]);
  return { props: { works, tags }, revalidate: 60 };
}
