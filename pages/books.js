// External
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "motion/react";
// Internal
import PageContainer from "@/components/PageContainer";
import MaxWidth from "@/components/MaxWidth";
import { getResume } from "@/lib/sanity";

const Books = ({ resume }) => {
  const [subPage, setSubPage] = useState("self");

  useEffect(() => {
    console.log(resume);
  }, [resume]);
  return (
    <PageContainer>
      <div className="pl-0 sm:pl-[231px]">
        <MaxWidth>
          <div className="flex flex-col gap-4">
            <ul>
              <li
                onClick={() => setSubPage("self")}
                className={`hover:cursor-pointer ${
                  subPage === "self" ? "text-neutral-900" : "text-neutral-400"
                }`}
              >
                Self
              </li>
              <li
                onClick={() => setSubPage("others")}
                className={`hover:cursor-pointer ${
                  subPage === "others" ? "text-neutral-900" : "text-neutral-400"
                }`}
              >
                Others
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
                {(subPage === "all" ||
                  subPage === "self" ||
                  subPage === "others") && (
                  <div className="flex flex-col gap-4">
                    <ul className="flex flex-col gap-4">
                      {booksData
                        .filter((book) => {
                          if (subPage === "all") return true;
                          if (subPage === "self") {
                            // Show books with collaborator OR without author
                            return !book.collaborator && !book.author;
                          }
                          if (subPage === "others") {
                            // Show books that have an author or collaborator
                            return book.author || book.collaborator;
                          }
                          return true;
                        })
                        .map((book, index) => (
                          <li key={index} className="cursor-pointer">
                            <div>
                              <em>{book.title}</em>
                              {book.author && `, ${book.author}`}
                              {book.collaborator &&
                                `, with ${book.collaborator}`}
                              {`, ${book.year}`}
                            </div>
                            <div>
                              8 x 7 inches, 160 pages <br />
                              Softcover, offset printed, Edition 21
                            </div>
                          </li>
                        ))}
                    </ul>
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

const booksData = [
  { title: "Mi Corazon es una Isla", author: "Jorge Silen", year: 2026 },
  { title: "My Lotto", author: "Malado Francine", year: 2025 },
  { title: "Wind in the Cage", author: "Red Rotkopf", year: 2024 },
  { title: "The Source Can Be Transformed", year: 2024 },
  { title: "Vivian Foster Gilman", author: "Alicia Cheatham", year: 2024 },
  { title: "29 Glasses", author: "Erin Wright", year: 2024 },
  { title: "The Halves and Half Nots", collaborator: "Cody Miner", year: 2024 },
  { title: "Between Us and the Sun", author: "Red Rotkopf", year: 2023 },
  { title: "Offerings To A Past Self", author: "Sharon Leung", year: 2023 },
  { title: "VOLUME", author: "Joe Gillette", year: 2023 },
  { title: "Water Bodies", author: "Clara Dykstra", year: 2023 },
  { title: "In Case Of Fire", author: "Bz Zhang", year: 2022 },
  { title: "Untitled", author: "Dan Taeyoung", year: 2022 },
  { title: "A Walk In The Woods", author: "Matthew Ransom", year: 2022 },
  { title: "La Visita Amarilla", author: "Nabila Morales Perez", year: 2022 },
  { title: "Off Beat", author: "Jarrett Ley", year: 2022 },
  { title: "Study 1", author: "Stella Ioannidou", year: 2022 },
];

export default Books;

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
