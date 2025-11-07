// External
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "motion/react";
// Internal
import PageContainer from "@/components/PageContainer";
import NewsletterSubscribe from "@/components/NewsletterSubscribe";
import MaxWidth from "@/components/MaxWidth";
import { getResume } from "@/lib/sanity";

const Information = ({ resume }) => {
  const [subPage, setSubPage] = useState("contact");

  useEffect(() => {
    console.log(resume);
  }, [resume]);
  return (
    <PageContainer>
      <div className="pl-0 sm:pl-[106px]">
        <MaxWidth>
          <div className="flex flex-col gap-5">
            <ul>
              <li
                onClick={() => setSubPage("contact")}
                className={`hover:cursor-pointer ${
                  subPage === "contact"
                    ? "text-neutral-400"
                    : "text-neutral-900"
                }`}
              >
                Contact
              </li>
              <li
                onClick={() => setSubPage("statement")}
                className={`hover:cursor-pointer ${
                  subPage === "statement"
                    ? "text-neutral-400"
                    : "text-neutral-900"
                }`}
              >
                Statement
              </li>
              <li
                onClick={() => setSubPage("resume")}
                className={`hover:cursor-pointer ${
                  subPage === "resume" ? "text-neutral-400" : "text-neutral-900"
                }`}
              >
                Resume
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
                {subPage === "contact" && (
                  <div className="flex flex-col gap-5">
                    <p>
                      Please feel free to reach out by email below to arrange a
                      studio visit or to discuss a collaboration. Warmly,
                      Taylor.
                    </p>
                    <p>
                      Third Floor, Studio 5 <br />
                      1500 S Los Angeles Street <br />
                      Los Angeles, California 90015 <br />
                      United States
                    </p>
                    <ul>
                      <li>
                        <a href="mailto:taylor@allowingmanyforms.org">
                          taylor@allowingmanyforms.org
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.allowingmanyforms.org"
                          target="_blank"
                        >
                          www.allowingmanyforms.org
                        </a>
                      </li>
                      <li>
                        <a href="https://www.taylorzanke.com" target="_blank">
                          www.taylorzanke.com
                        </a>
                      </li>
                    </ul>
                    <NewsletterSubscribe />
                  </div>
                )}
                {subPage === "statement" && (
                  <div className="flex flex-col gap-5">
                    <p>
                      I create staged situations which audition fragments from a
                      shifting collection of ephemeral material including paper,
                      packaging, building debris, and furniture. These spatial
                      scenes arise in degrees of fixity and disorder, and employ
                      sculpture, artists books, architecture, and arranged
                      objects to unset the given roles of their elements and
                      enclosing structures. My work incorporates the storage,
                      transportation, installation, and availability of material
                      as part of the making of a work, where I influence and am
                      influenced by their shifting conditions. Through this
                      process I report something about what has unfolded and
                      what might yet in tableaus which comment on notions of
                      being and presence.
                    </p>
                    <p>
                      Through my work I am interested in accessing the inherent
                      traits present in spaces and objects to reveal something
                      about their transformative, or even mystical potentials. I
                      think about how these potentials coexist with the numerous
                      other realities that arise from our expectations and
                      understandings of their origins, value, or function. I
                      enact a process which works and reworks this expanding
                      troupe of elements to develop my understanding of
                      relationships between objects and structures that are
                      sited and circulate. I consider documentation of my work
                      to be a material which is reincorporated into the
                      conditions that give rise to new artworks. These practices
                      help me to investigate ideas of site and multiplicity and
                      question the notion of a fixed artwork.
                    </p>
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
  return {
    props: {
      resume,
    },
    // Revalidate every minute
    revalidate: 60,
  };
}

const Resume = ({ resume }) => {
  return (
    <div className="flex flex-col gap-5">
      {resume.groups.map((group, index) => {
        const seenYears = new Set();
        return (
          <div key={index} className="flex flex-col gap-1">
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
      <div className="col-span-1 sm:col-span-0 sm:min-w-[56px] sm:absolute sm:left-[-56px]">
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
