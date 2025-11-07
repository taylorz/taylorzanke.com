import Link from "next/link";
import PageContainer from "@/components/PageContainer";
import MaxWidth from "@/components/MaxWidth";

import { getSelectedWorks } from "@/lib/sanity";

const Work = ({ works }) => {
  return (
    <PageContainer>
      <div className="pl-0 sm:pl-[201px]">
        <MaxWidth>
          <div className="flex flex-col gap-5">
            {/* <ul>
              <li>All</li>
              <li>Sculpture & Installation</li>
              <li>Books</li>
              <li>Recordings</li>
              <li>Drawings & Prints</li>
            </ul> */}
            <div className="flex flex-col gap-5">
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
        </MaxWidth>
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
