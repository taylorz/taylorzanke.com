// External
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { PortableText } from "@portabletext/react";
// Internal
import PageContainer from "@/components/PageContainer";
import NewsletterSubscribe from "@/components/NewsletterSubscribe";
import MaxWidth from "@/components/MaxWidth";
import { portableTextComponents } from "@/components/PortableTextComponents";
import { getResume, getStatement, getBiography } from "@/lib/sanity";

const Information = ({ resume, statement, biography }) => {
  const [subPage, setSubPage] = useState("biography");
  return (
    <PageContainer>
      <div className="pl-0 sm:pl-[97px]">
        <MaxWidth>
          <div className="flex flex-col gap-4">
            <ul>
              <li
                onClick={() => setSubPage("biography")}
                className={`hover:cursor-pointer ${
                  subPage === "biography" && "text-neutral-500"
                }`}
              >
                Biography
              </li>
              <li
                onClick={() => setSubPage("resume")}
                className={`hover:cursor-pointer ${
                  subPage === "resume" && "text-neutral-500"
                }`}
              >
                C.V.
              </li>
              <li
                onClick={() => setSubPage("statement")}
                className={`hover:cursor-pointer ${
                  subPage === "statement" && "text-neutral-500"
                }`}
              >
                Statement
              </li>
              <li
                onClick={() => setSubPage("contact")}
                className={`hover:cursor-pointer ${
                  subPage === "contact" && "text-neutral-500"
                }`}
              >
                Contact
              </li>
            </ul>
            <AnimatePresence mode="wait">
              <motion.div
                key={subPage}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.1 }}
              >
                {subPage === "resume" && <Resume resume={resume} />}

                {subPage === "statement" && (
                  <div>
                    {statement?.content && (
                      <PortableText
                        value={statement.content}
                        components={portableTextComponents}
                      />
                    )}
                  </div>
                )}
                {subPage === "biography" && (
                  <div>
                    {biography?.content && (
                      <PortableText
                        value={biography.content}
                        components={portableTextComponents}
                      />
                    )}
                  </div>
                )}
                {subPage === "contact" && (
                  <div className="flex flex-col gap-4">
                    <div>
                      Studio in downtown Los Angeles in the Fashion District
                      near the Bendix Building.
                    </div>
                    <div className="flex flex-col">
                      <a href="mailto:taylor@allowingmanyforms.org">
                        taylor@allowingmanyforms.org
                      </a>
                      <a
                        href="https://www.allowingmanyforms.org"
                        target="_blank"
                      >
                        www.allowingmanyforms.org
                      </a>
                    </div>

                    <NewsletterSubscribe />
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </MaxWidth>
      </div>
    </PageContainer>
  );
};

export default Information;

export async function getStaticProps() {
  const resume = await getResume();
  const statement = await getStatement();
  const biography = await getBiography();
  return {
    props: {
      resume,
      statement,
      biography,
    },
    // Revalidate every minute
    revalidate: 60,
  };
}

const Resume = ({ resume }) => {
  return (
    <div className="flex flex-col gap-4">
      {resume.groups.map((group, index) => {
        const seenYears = new Set();
        return (
          <div key={index} className="flex flex-col gap-4">
            <p>{group.groupTitle}</p>
            <div>
              {group.items.map((item, itemIndex) => {
                const isFirstOccurrence = !seenYears.has(item.year);
                if (isFirstOccurrence) {
                  seenYears.add(item.year);
                }
                return (
                  <ResumeItem
                    key={`${item.year}-${itemIndex}`}
                    year={isFirstOccurrence ? item.year : ""}
                    title={item.title}
                    label={item.label}
                  />
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

const ResumeItem = ({ year, title, label }) => {
  return (
    <div className="grid grid-cols-8 sm:grid-cols-1 sm:block sm:relative">
      <div className="col-span-1 sm:col-span-0 sm:min-w-[48px] sm:absolute sm:left-[-48px]">
        <p>{year}</p>
      </div>
      <div className="col-span-7 sm:col-span-1">
        <p>
          <span className="italic">{title}</span>, {label}
        </p>
      </div>
    </div>
  );
};
