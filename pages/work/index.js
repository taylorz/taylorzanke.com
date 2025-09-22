import { useState } from "react";
import Link from "next/link";

import PageContainer from "@/components/PageContainer";
import MaxWidth from "@/components/MaxWidth";
import { getWorks } from "@/lib/sanity";
const Work = ({ works }) => {
  // Group works by category
  const worksByCategory = works?.reduce((acc, work) => {
    const category = work.category || "Uncategorized";
    if (!acc[category]) {
      acc[category] = {
        works: [],
        order: work.categoryOrder || 999, // Default high number for uncategorized
      };
    }
    acc[category].works.push(work);
    return acc;
  }, {});

  // Get selected works
  const selectedWorks = works?.filter((work) => work.selected) || [];

  // Sort categories by order
  const sortedCategories = worksByCategory
    ? Object.entries(worksByCategory)
        .sort(([, a], [, b]) => a.order - b.order)
        .map(([category, data]) => [category, data.works])
    : [];

  return (
    <PageContainer>
      <div className="pt-10 pl-0 sm:pl-[224px]">
        <MaxWidth>
          <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-5">
              {selectedWorks.length > 0 && (
                <div>
                  <h1 className="italic">Selected</h1>
                  {selectedWorks.map((work) => (
                    <WorkItem
                      key={work._id}
                      title={work.title}
                      year={work.year}
                      slug={work.slug}
                    />
                  ))}
                </div>
              )}
              {sortedCategories.map(([category, categoryWorks]) => (
                <div key={category}>
                  <h1 className="italic">{category}</h1>
                  {categoryWorks.map((work) => (
                    <WorkItem
                      key={work._id}
                      title={work.title}
                      year={work.year}
                      slug={work.slug}
                    />
                  ))}
                </div>
              ))}
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

const WorkItem = ({ title, year, slug }) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div className="relative">
      {isHovered && (
        <span className="absolute -left-12 text-[gray]">
          {year?.toString().slice(0, 4)}
        </span>
      )}

      <p>
        <Link
          href={`/work/${slug}`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {" "}
          {title}
        </Link>
      </p>
    </div>
  );
};
