import { PortableText, toPlainText } from "@portabletext/react";
import WorkOverlay from "@/components/WorkOverlay";
import Seo from "@/components/Seo";
import { truncateDescription } from "@/lib/seoText";
import {
  getHomeSlides,
  getWorkItem,
  getWorkSlugs,
  ogImageUrl,
} from "@/lib/sanity";

const WorkPage = ({ work, slide }) => {
  // Attribute rows (plus Year) sorted by label, A to Z (ignoring case); rows
  // with no value in Sanity are left out. "Filed under" (the tags) comes after,
  // on its own, a line below.
  const attributes = [
    ...(work.attributes ?? []),
    { label: "Year", value: work.year },
  ]
    .filter((d) => d.label && d.value)
    .sort((a, b) =>
      a.label.localeCompare(b.label, undefined, { sensitivity: "base" }),
    );
  // Links, each on its own line between the attributes and "Filed under":
  // every uploaded file ("File: <file name>", repeated per file),
  // then every online URL ("Online: <domain>": no https://, www., path or
  // query, e.g. "allowingmanyforms.org"; the link still goes to the full URL).
  const links = [
    ...(work.documents ?? [])
      .filter((d) => d?.url)
      .map((d) => ({
        label: "File",
        href: d.url,
        text: d.name || "Download",
      })),
    ...(work.online ?? [])
      .filter(Boolean)
      .map((url) => ({
        label: "Online",
        href: url,
        text: url.replace(/^https?:\/\/(www\.)?/, "").split(/[/?#]/)[0],
      })),
  ];
  const filedIn = work.tags
    ?.map((tag) => tag.title)
    .filter(Boolean)
    .join(", ");
  const details = [
    ...attributes,
    ...(filedIn ? [{ label: "Filed under", value: filedIn }] : []),
  ];

  // Search/unfurl text: "Title, 2025", described by its description (or, without
  // one, the detail rows), unfurling with the work's own first image.
  const seoTitle = [work.title, work.year].filter(Boolean).join(", ");
  const seoDescription = truncateDescription(
    work.description
      ? toPlainText(work.description)
      : details.map(({ label, value }) => `${label}: ${value}`).join(". "),
  );

  return (
    <WorkOverlay
      title={work.title}
      images={work.images?.map(({ image }) => image)}
      slide={slide}
    >
      <Seo
        title={seoTitle}
        description={seoDescription}
        image={ogImageUrl(work.images?.[0]?.image)}
      />
      {/* Description, attributes and "Filed under" sit two lines (gap-10)
          apart; the overlay's gap-10 keeps the group two lines from the
          images. */}
      <div className="flex flex-col gap-10">
        {work.description && (
          // Half the content column (3 of 6 columns) from md, full width
          // below; paragraphs one line apart.
          <div className="grid grid-cols-6 gap-x-6">
            <div className="col-span-6 md:col-span-3 flex flex-col gap-5">
              <PortableText value={work.description} />
            </div>
          </div>
        )}
        {attributes.length > 0 && (
          <ul>
            {attributes.map(({ label, value }) => (
              <li key={label}>
                {label}: {value}
              </li>
            ))}
          </ul>
        )}
        {links.length > 0 && (
          <ul>
            {links.map(({ label, href, text }) => (
              <li key={href}>
                {label}:{" "}
                <a href={href} target="_blank" rel="noopener noreferrer">
                  {text}
                </a>
              </li>
            ))}
          </ul>
        )}
        {filedIn && <p>Filed under: {filedIn}</p>}
      </div>
    </WorkOverlay>
  );
};

export async function getStaticProps({ params }) {
  const [work, slides] = await Promise.all([
    getWorkItem(params.work),
    getHomeSlides(),
  ]);

  if (!work) return { notFound: true, revalidate: 60 };

  // The homepage slide number (1-based) featuring this work, if any; the
  // title row lines up with that number in the nav.
  const slide = slides.findIndex((s) => s.workSlug === params.work) + 1 || null;

  return { props: { work, slide }, revalidate: 60 };
}

export async function getStaticPaths() {
  const slugs = await getWorkSlugs();
  const paths = slugs.map((slug) => ({ params: { work: slug } }));

  return {
    paths,
    fallback: "blocking",
  };
}

export default WorkPage;
