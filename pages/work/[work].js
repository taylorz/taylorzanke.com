import { PortableText, toPlainText } from "@portabletext/react";
import WorkOverlay from "@/components/WorkOverlay";
import Seo from "@/components/Seo";
import { truncateDescription } from "@/lib/seoText";
import { getWorkItem, getWorkSlugs, ogImageUrl } from "@/lib/sanity";

const WorkPage = ({ work }) => {
  // Rows with no value in Sanity are left out.
  const details = [
    { label: "Year", value: work.year },
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
      title={work.title}
      images={work.images?.map(({ image }) => image)}
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
          // Full width; paragraphs one line apart.
          <div className="flex flex-col gap-5">
            <PortableText value={work.note} />
          </div>
        )}
        <ul>
          {details.map(({ label, value }) => (
            <li key={label} className="flex gap-6">
              <p>{label}</p>
              <p>{value}</p>
            </li>
          ))}
        </ul>
      </div>
    </WorkOverlay>
  );
};

export async function getStaticProps({ params }) {
  const work = await getWorkItem(params.work);

  if (!work) return { notFound: true, revalidate: 60 };

  return { props: { work }, revalidate: 60 };
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
