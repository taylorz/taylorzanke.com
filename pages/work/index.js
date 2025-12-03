import { useState } from "react";
import Link from "next/link";
import PageContainer from "@/components/PageContainer";
import MaxWidth from "@/components/MaxWidth";

import { getSelectedWorks } from "@/lib/sanity";

const Work = ({ works }) => {
  const [subPage, setSubPage] = useState("2025");
  return (
    <PageContainer>
      <div className="pl-0 sm:pl-[182px]">
        <MaxWidth>
          <div className="flex flex-col gap-4">
            {/* <ul>
              <li
                onClick={() => setSubPage("2025")}
                className={`hover:cursor-pointer ${
                  subPage === "2025" ? "text-neutral-500" : "text-neutral-900"
                }`}
              >
                2025
              </li>
              <li
                onClick={() => setSubPage("2024")}
                className={`hover:cursor-pointer ${
                  subPage === "2024" ? "text-neutral-500" : "text-neutral-900"
                }`}
              >
                2024
              </li>
              <li
                onClick={() => setSubPage("2023")}
                className={`hover:cursor-pointer ${
                  subPage === "2023" ? "text-neutral-500" : "text-neutral-900"
                }`}
              >
                2023
              </li>
              <li
                onClick={() => setSubPage("2022earlier")}
                className={`hover:cursor-pointer ${
                  subPage === "2022earlier"
                    ? "text-neutral-500"
                    : "text-neutral-900"
                }`}
              >
                2022 & earlier
              </li>
            </ul> */}
            <div className="flex flex-col gap-4">
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
