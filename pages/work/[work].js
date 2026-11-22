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
  // Rows with no value in Sanity are left out.
  const details = [
    { label: "Location", value: work.location },
    { label: "Dates", value: work.datesOpen },
    ...(work.attributes ?? []),
    {
      label: "Filed in",
      value: work.tags
        ?.map((tag) => tag.title)
        .filter(Boolean)
        .join(", "),
    },
  ].filter((d) => d.label && d.value);

  // Search/unfurl text: "Title, 2025", described by the note (or, without
  // one, the detail rows), unfurling with the work's own first image.
  const seoTitle = [work.title, work.year].filter(Boolean).join(", ");
  const seoDescription = truncateDescription(
    work.note
      ? toPlainText(work.note)
      : details.map(({ label, value }) => `${label}: ${value}`).join(". "),
  );

  return (
    <WorkOverlay
      title={seoTitle}
      images={work.images?.map(({ image }) => image)}
      slide={slide}
    >
      <Seo
        title={seoTitle}
        description={seoDescription}
        image={ogImageUrl(work.images?.[0]?.image)}
      />
      {/* Note and info sit one line apart; the overlay's gap-10 keeps the
          group two lines from the images. */}
      <div className="flex flex-col gap-5">
        {work.note && (
          // Half the content column (3 of 6 columns) from md, full width
          // below; paragraphs one line apart.
          <div className="grid grid-cols-6 gap-x-6">
            <div className="col-span-6 md:col-span-3 flex flex-col gap-5">
              <PortableText value={work.note} />
            </div>
          </div>
        )}
        <ul>
          {details.map(({ label, value }) => (
            <li key={label}>
              {label}: {value}
            </li>
          ))}
        </ul>
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
