import Link from "next/link";
import PageContainer from "@/components/PageContainer";
import MaxWidth from "@/components/MaxWidth";
import { getWorks } from "@/lib/sanity";

const Work = ({ works }) => {
  console.log("Works:", works);

  // Group works by category
  const worksByCategory = works?.reduce((acc, work) => {
    const category = work.category || "Uncategorized";
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(work);
    return acc;
  }, {});

  // Get selected works
  const selectedWorks = works?.filter((work) => work.selected) || [];

  return (
    <PageContainer>
      <div className="pt-10 pl-[224px]">
        <MaxWidth>
          <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-5">
              {selectedWorks.length > 0 ? (
                <div>
                  <h1 className="italic">Selected</h1>
                  {selectedWorks.map((work) => (
                    <p key={work._id}>
                      <Link href={`/work/${work.slug}`}>{work.title}</Link>
                    </p>
                  ))}
                </div>
              ) : null}
              {worksByCategory &&
                Object.entries(worksByCategory).map(
                  ([category, categoryWorks]) => (
                    <div key={category}>
                      <h1 className="italic">{category}</h1>
                      {categoryWorks.map((work) => (
                        <p key={work._id}>
                          <Link href={`/work/${work.slug}`}>{work.title}</Link>
                        </p>
                      ))}
                    </div>
                  )
                )}
            </div>
          </div>
        </MaxWidth>
      </div>
    </PageContainer>
  );
};

export async function getStaticProps() {
  const works = await getWorks();

  return {
    props: {
      works,
    },
    // Revalidate every minute
    revalidate: 60,
  };
}

export default Work;
