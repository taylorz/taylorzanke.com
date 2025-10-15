import Link from "next/link";
import PageContainer from "@/components/PageContainer";

import { getSelectedWorks } from "@/lib/sanity";
const Work = ({ works }) => {
  return (
    <PageContainer>
      <div className="pt-10 pl-0 sm:pl-[195px]">
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-2">
            {works.map((work, i) => (
              <Link href={`/work/${work.slug}`} key={i}>
                <div>
                  {/* title */}
                  {work.title && (
                    <p>
                      <span className="italic">{work.title}</span>
                      {work.year && <span>, {work.year}</span>}
                    </p>
                  )}
                  {/* materials */}
                  {work.materials && <p>{work.materials}</p>}
                  {/* dimensions */}
                  {work.customDimensions ? (
                    <p>{work.customDimensions}</p>
                  ) : work.height && work.width ? (
                    <p>
                      {`${work.height} x ${work.width} ${
                        work.depth ? `x ${work.depth}` : ""
                      } inches`}
                    </p>
                  ) : null}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </PageContainer>
  );
};

export async function getStaticProps() {
  const works = await getSelectedWorks();

  return {
    props: {
      works,
    },
    // Revalidate every minute
    revalidate: 60,
  };
}

export default Work;
