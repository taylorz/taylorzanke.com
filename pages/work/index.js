import { useState } from "react";
import Link from "next/link";
import Layout from "@/components/Layout";
import Seo from "@/components/Seo";
import { PAGES } from "@/lib/site";
import {
  getWorksWithImages,
  getTags,
  getIndividualGroups,
  responsiveImage,
  fitLongSide,
} from "@/lib/sanity";
import { numberIndividuals } from "@/lib/individuals";

const VIEWS = ["Images", "List"];

// Largest CSS widths images render at, with the content column at its
// max-w-screen-lg (1024px): 2 work cards across gap-x-6 (1 below md), and
// INDIVIDUAL_COLUMNS individuals cells across gap-x-1 (4px). Below that the
// `sizes` vw fallbacks take over (they overestimate, since the nav also
// takes width, which errs on the crisp side).
const WORK_CARD_WIDTH = 500;
// Keep in sync with the individuals grid's md:grid-cols-* class below
// (below md it's 2 columns, sized as 50vw).
const INDIVIDUAL_COLUMNS = 6;
const INDIVIDUAL_CELL_WIDTH = Math.ceil(
  (1024 - (INDIVIDUAL_COLUMNS - 1) * 4) / INDIVIDUAL_COLUMNS,
);

// A comma-separated inline list; the active item gets px-6.
function Picker({ items, active, onChange }) {
  return (
    <ul>
      {items.map((item, i) => (
        <li key={item} className="inline">
          <button
            onClick={() => onChange(item)}
            className={item === active ? "px-6" : ""}
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
// Not a tag: shows only the individuals, no works.
const INDIVIDUALS = "Individuals";

export default function Work({ works: allWorks, tags, individuals }) {
  const [view, setView] = useState("Images");
  // Picker labels are tag titles; "All" shows every work plus individuals,
  // a tag shows only its works, "Individuals" shows only individuals.
  const filters = [ALL, ...tags.map((tag) => tag.title), INDIVIDUALS];
  const [filter, setFilter] = useState(ALL);
  const works =
    filter === ALL
      ? allWorks
      : filter === INDIVIDUALS
        ? []
        : allWorks.filter((work) => work.tags?.some((t) => t.title === filter));
  const showWorks = works.length > 0;
  const showIndividuals = filter === ALL || filter === INDIVIDUALS;

  // First image of each project, in the same order as `works` (null for a
  // project with no images). Cropped to the 7:5 frame (hotspot-aware) and
  // sized for a card: half of the 1024px content column, ~500px.
  const firstImages = works.map((work) =>
    work.images?.[0]
      ? responsiveImage(work.images[0].image, WORK_CARD_WIDTH, (b, w) =>
          b
            .width(w)
            .height(Math.round((w * 5) / 7))
            .fit("crop"),
        )
      : null,
  );

  return (
    <Layout>
      <Seo {...PAGES.work} />
      <div className="pb-10">
        <div className="hidden md:grid grid-cols-3">
          <Picker items={VIEWS} active={view} onChange={setView} />
          <Picker items={filters} active={filter} onChange={setFilter} />
        </div>
        {/* Below md: no filtering (always "All"), just the view picker. */}
        <div className="md:hidden">
          <Picker items={VIEWS} active={view} onChange={setView} />
        </div>
      </div>
      {view === "Images" ? (
        <div className="flex flex-col gap-20">
          {showWorks && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-10">
              {works.map((work, i) => (
                <Link
                  key={work.slug}
                  href={`/work/${work.slug}`}
                  className="flex flex-col gap-5 justify-end"
                >
                  {firstImages[i] && (
                    <img
                      className="object-cover aspect-[7/5]"
                      {...firstImages[i]}
                      sizes={`(min-width: 1200px) ${WORK_CARD_WIDTH}px, (min-width: 768px) 50vw, 100vw`}
                      alt=""
                    />
                  )}
                  <div className="px-6">
                    <p>
                      {work.title}, {work.year}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          )}
          {/* individuals: every image of each legacy doc, unrolled, with an
              empty cell between docs. */}
          {showIndividuals && (
            <div className="grid grid-cols-2 md:grid-cols-6 gap-x-1 gap-y-5">
              {individuals.flatMap((group, g) => [
                // Empty cell between docs.
                ...(g > 0 ? [<div key={`gap-${group.id}`} />] : []),
                ...group.images.map((image, i) => (
                  <Link
                    key={`${group.id}-${i}`}
                    href={`/work/individuals/${group.id}`}
                    className="aspect-square w-full"
                  >
                    <img
                      {...responsiveImage(
                        image,
                        INDIVIDUAL_CELL_WIDTH,
                        fitLongSide(image),
                      )}
                      sizes={`(min-width: 1200px) ${INDIVIDUAL_CELL_WIDTH}px, (min-width: 768px) ${Math.ceil(100 / INDIVIDUAL_COLUMNS)}vw, 50vw`}
                      alt=""
                      className="w-full h-full object-contain object-left-bottom"
                    />
                  </Link>
                )),
              ])}
            </div>
          )}
        </div>
      ) : (
        // `works` comes from Sanity sorted newest year first.
        // Below md, wrapped lines get a 12px hanging indent (pl-3 -indent-3).
        <div>
          {showWorks && (
            <ul className="pb-10">
              {works.map((work) => (
                <li key={work.slug} className="w-fit">
                  <Link
                    href={`/work/${work.slug}`}
                    className="block max-md:pl-3 max-md:-indent-3"
                  >
                    {work.title}, {work.year}
                  </Link>
                </li>
              ))}
            </ul>
          )}
          {/* One line per individuals doc, its images numbered in parens,
              counting on across docs: (1, 2, 3), (4, 5), … */}
          {showIndividuals && (
            <ul>
              {individuals.map((group) => (
                <li key={group.id} className="w-fit">
                  <Link
                    href={`/work/individuals/${group.id}`}
                    className="block max-md:pl-3 max-md:-indent-3"
                  >
                    ({group.numbers.join(", ")})
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
  const [works, tags, individualGroups] = await Promise.all([
    getWorksWithImages(),
    getTags(),
    getIndividualGroups(),
  ]);
  // One group per legacy doc: its id, images, and running image numbers.
  const individuals = numberIndividuals(individualGroups);
  return { props: { works, tags, individuals }, revalidate: 60 };
}
