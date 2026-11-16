import WorkOverlay from "@/components/WorkOverlay";
import Seo from "@/components/Seo";
import { truncateDescription } from "@/lib/seoText";
import { getIndividualGroups, ogImageUrl } from "@/lib/sanity";
import { numberIndividuals } from "@/lib/individuals";

// "12 × 10 × 3 in" — height × width × depth, skipping any that are blank.
function formatDimensions({ height, width, depth }) {
  const parts = [height, width, depth].filter(Boolean);
  return parts.length ? `${parts.join(" × ")} in` : null;
}

// Same overlay as a work, titled with the group's running image numbers,
// e.g. "(5, 6)", with year, materials and dimensions (when set) below.
export default function IndividualPage({ numbers, images, details }) {
  const title = `(${numbers.join(", ")})`;
  return (
    <WorkOverlay title={title} images={images}>
      {/* Search/unfurl: "(5, 6)", described by its detail rows, with the
          group's own first image. */}
      <Seo
        title={title}
        description={truncateDescription(
          details.map(({ label, value }) => `${label}: ${value}`).join(". "),
        )}
        image={ogImageUrl(images?.[0])}
      />
      {details.length > 0 && (
        <ul>
          {details.map(({ label, value }) => (
            <li key={label} className="flex gap-6">
              <p>{label}</p>
              <p>{value}</p>
            </li>
          ))}
        </ul>
      )}
    </WorkOverlay>
  );
}

export async function getStaticProps({ params }) {
  const groups = await getIndividualGroups();
  const group = groups.find((g) => g._key === params.id);
  if (!group) return { notFound: true, revalidate: 60 };
  const { numbers, images } = numberIndividuals(groups).find(
    (g) => g.id === params.id,
  );
  // Rows with no value in Sanity are left out.
  const details = [
    { label: "Year", value: group.year },
    { label: "Materials", value: group.materials },
    { label: "Dimensions", value: formatDimensions(group) },
  ].filter((d) => d.value);
  return { props: { numbers, images, details }, revalidate: 60 };
}

export async function getStaticPaths() {
  const groups = await getIndividualGroups();
  return {
    paths: groups.map((group) => ({ params: { id: group._key } })),
    fallback: "blocking",
  };
}
