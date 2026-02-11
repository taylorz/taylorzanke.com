// External
import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { PortableText } from "@portabletext/react";
// Internal
import PageContainer from "@/components/PageContainer";
import NewsletterSubscribe from "@/components/NewsletterSubscribe";
import MaxWidth from "@/components/MaxWidth";
import Text from "@/components/Text";
import { portableTextComponents } from "@/components/PortableTextComponents";
import { getResume, getStatement, getBiography } from "@/lib/sanity";

const Information = ({ resume, statement, biography }) => {
  const [subPage, setSubPage] = useState("biography");
  return (
    <PageContainer>
      <div className="grid grid-cols-1 sm:grid-cols-3 w-full px-3 sm:px-16 gap-32 py-48 sm:py-8">
        <div className="flex flex-col gap-3 col-span-1 order-2 sm:order-1">
          <div>
            <Text>Contact</Text>
            <Text className="indent-2">Los Angeles, CA</Text>
            <a href="mailto:studio@taylorzanke.com" className="indent-2">
              <Text link>studio@taylorzanke.com</Text>
            </a>
          </div>
          <div>
            <Text>Links</Text>
            <Link
              href="https://allowingmanyforms.org"
              target="_blank"
              className="indent-2"
            >
              <Text link>Allowing Many Forms</Text>
            </Link>
          </div>

          <div>
            <Text>Newsletter</Text>
            <div className="pl-2">
              <NewsletterSubscribe />
            </div>
          </div>
        </div>
        <div className="flex flex-col col-span-2 order-1 sm:order-2">
          {biography?.content && (
            <PortableText
              value={biography.content}
              components={portableTextComponents}
            />
          )}

          <Resume resume={resume} />
        </div>
      </div>
    </PageContainer>
    // <PageContainer>
    //   <div className="pl-0 sm:pl-[97px]">
    //     <MaxWidth>
    //       <div className="flex flex-col gap-4">
    //         <ul>
    //           <li
    //             onClick={() => setSubPage("biography")}
    //             className={`hover:cursor-pointer ${
    //               subPage === "biography" && "text-neutral-500"
    //             }`}
    //           >
    //             Biography
    //           </li>
    //           <li
    //             onClick={() => setSubPage("resume")}
    //             className={`hover:cursor-pointer ${
    //               subPage === "resume" && "text-neutral-500"
    //             }`}
    //           >
    //             C.V.
    //           </li>
    //           <li
    //             onClick={() => setSubPage("statement")}
    //             className={`hover:cursor-pointer ${
    //               subPage === "statement" && "text-neutral-500"
    //             }`}
    //           >
    //             Statement
    //           </li>
    //           <li
    //             onClick={() => setSubPage("contact")}
    //             className={`hover:cursor-pointer ${
    //               subPage === "contact" && "text-neutral-500"
    //             }`}
    //           >
    //             Contact
    //           </li>
    //         </ul>
    //         <AnimatePresence mode="wait">
    //           <motion.div
    //             key={subPage}
    //             initial={{ opacity: 0 }}
    //             animate={{ opacity: 1 }}
    //             exit={{ opacity: 0 }}
    //             transition={{ duration: 0.1 }}
    //           >
    //             {subPage === "resume" && <Resume resume={resume} />}

    //             {subPage === "statement" && (
    //               <div>
    //                 {statement?.content && (
    //                   <PortableText
    //                     value={statement.content}
    //                     components={portableTextComponents}
    //                   />
    //                 )}
    //               </div>
    //             )}
    //             {subPage === "biography" && (
    //               <div>
    //                 {biography?.content && (
    //                   <PortableText
    //                     value={biography.content}
    //                     components={portableTextComponents}
    //                   />
    //                 )}
    //               </div>
    //             )}
    //             {subPage === "contact" && (
    //               <div className="flex flex-col gap-4">
    //                 <div className="flex flex-col">
    //                   <a href="mailto:taylor@allowingmanyforms.org">
    //                     taylor@allowingmanyforms.org
    //                   </a>
    //                   <a
    //                     href="https://www.allowingmanyforms.org"
    //                     target="_blank"
    //                   >
    //                     www.allowingmanyforms.org
    //                   </a>
    //                 </div>

    //                 <NewsletterSubscribe />
    //               </div>
    //             )}
    //           </motion.div>
    //         </AnimatePresence>
    //       </div>
    //     </MaxWidth>
    //   </div>
    // </PageContainer>
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
    <div className="flex flex-col gap-6">
      {resume.groups.map((group, index) => {
        return (
          <div key={index}>
            <Text>{group.groupTitle}</Text>
            <div className="pl-2">
              {group.items.map((item, itemIndex) => {
                return (
                  <ResumeItem
                    key={`${item.year}-${itemIndex}`}
                    year={item.year}
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
    <div>
      <Text>
        {year} {title ? `${title}, ` : null}
        {label ? `${label}` : null}
      </Text>
    </div>
  );
};
