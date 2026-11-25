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

// Images view: 2 columns from md (1 below), each image uncropped at its own
// aspect ratio, filling its column's width. CARD_WIDTH is a column's width
// on a reference 1512px viewport (minus p-6 sides, the nav + gap-6 ~178px,
// and the gap-6 between columns), the base for each srcset (up to 3x).
const CARD_WIDTH = Math.ceil((1512 - 48 - 178 - 24) / 2);

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
  const [view, setView] = useState("Images");
  // Picker labels are tag titles; "All" shows every work, a tag only its
  // works.
  const filters = [ALL, ...tags.map((tag) => tag.title)];
  const [filter, setFilter] = useState(ALL);
  const works =
    filter === ALL
      ? allWorks
      : allWorks.filter((work) => work.tags?.some((t) => t.title === filter));
  const showWorks = works.length > 0;
  // The Images view only shows works that have an image.
  const imageWorks = works.filter((work) => work.images?.[0]?.image);

  // First image of each work in `imageWorks`, uncropped: its srcset and
  // its dimensions (to reserve its box before it loads; square if unknown).
  const firstImages = imageWorks.map((work) => {
    const image = work.images[0].image;
    const dims = imageDimensions(image) ?? { width: 1, height: 1 };
    return { ...dims, ...responsiveImage(image, CARD_WIDTH) };
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
          // Top-aligned, so in a row with images of different heights the
          // shorter one leaves space below its caption.
          <div className="grid grid-cols-1 md:grid-cols-2 items-start gap-x-6 gap-y-10">
            {imageWorks.map((work, i) => (
              <Link
                key={work._id}
                href={`/work/${work.slug}`}
                className="group flex flex-col gap-5"
              >
                <img
                  className="w-full h-auto"
                  src={firstImages[i].src}
                  srcSet={firstImages[i].srcSet}
                  sizes="(min-width: 768px) 50vw, 100vw"
                  // Reserves the box at the image's aspect ratio before it
                  // loads.
                  width={firstImages[i].width}
                  height={firstImages[i].height}
                  alt=""
                />
                {/* Indents on hover, like the nav. */}
                <p className="group-hover:indent-6">
                  {work.title}, {work.year}
                </p>
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
            <ul className="pb-10 grid grid-cols-[minmax(0,1fr)_max-content_max-content] gap-x-6 md:block">
              {works.map((work) => (
                <li
                  key={work._id}
                  className="col-span-full grid grid-cols-[subgrid] md:block"
                >
                  <Link
                    href={`/work/${work.slug}`}
                    className="group col-span-full grid grid-cols-[subgrid] md:block"
                  >
                    <span className="truncate md:hidden">{work.title}</span>
                    <span className="md:hidden">
                      {work.tags?.map((t) => t.title).join(", ")}
                    </span>
                    <span className="md:hidden">{work.year}</span>
                    {/* From md up, the row: title, type, note, year,
                        "View". On hover its text indents 24px, like the nav
                        (the columns stay put), and a work with images shows
                        "View" at the end. "View" keeps its space on every
                        row, hidden, so the years line up. */}
                    <WorkRow
                      className="hidden md:grid"
                      cellClass="group-hover:pl-6"
                      year={work.year}
                      types={work.tags?.map((t) => t.title).join(", ")}
                      title={work.title}
                      note={work.note}
                      view={
                        <span
                          className={`invisible ${work.images?.[0]?.image ? "group-hover:visible" : ""}`}
                        >
                          View
                        </span>
                      }
                    />
                  </Link>
                </li>
              ))}
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
