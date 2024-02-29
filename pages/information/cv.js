import { motion } from "framer-motion";

import PageContainer from "../../components/PageContainer";

export default function CV() {
  const list = {
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.25,
      },
    },
    hidden: { opacity: 0 },
  };

  const item = {
    visible: { opacity: 1, transition: { duration: 2 } },
    hidden: { opacity: 0 },
  };
  return (
    <PageContainer>
      <div className="flex flex-1 grid grid-cols-1 md:grid-cols-6 gap-2">
        <div className="flex flex-col col-span-3 gap-5">
          <ul>
            <li>b. 1992 Canada</li>
            <li>Lives and works in Los Angeles</li>
          </ul>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={list}
            className="flex flex-col gap-5 pb-8"
          >
            <div>
              <motion.p variants={item}>Education</motion.p>
              <ul>
                <motion.li variants={item} className="flex">
                  <div className="min-w-[54px]">2018</div>
                  <div>
                    Master of Architecture, Columbia University. New York, New
                    York.
                  </div>
                </motion.li>
                <motion.li variants={item} className="flex">
                  <div className="min-w-[54px]">2018</div>
                  <div>
                    Master of Science, Columbia University. New York, New York.
                  </div>
                </motion.li>
                <motion.li variants={item} className="flex">
                  <div className="min-w-[54px]">2014</div>
                  <div>
                    BFA, Parsons The New School For Design. New York, New York.
                  </div>
                </motion.li>
              </ul>
            </div>
            <div>
              <motion.p variants={item}>Two Person Exhibitions</motion.p>
              <ul>
                <motion.li variants={item} className="flex">
                  <div className="min-w-[54px]">2024</div>
                  <div>
                    <em>A Matter Of Space</em>, Ruth Gallery. Los Angeles,
                    California.
                  </div>
                </motion.li>
              </ul>
            </div>
            <div>
              <motion.p variants={item}>
                Group Exhibitions + Presentations
              </motion.p>
              <ol>
                <motion.li variants={item} className="flex">
                  <div className="min-w-[54px]">2023</div>
                  <div>
                    <em>Leaf Thru, Pore Over</em>, Ruth Gallery. Los Angeles,
                    California.
                  </div>
                </motion.li>
                <motion.li variants={item} className="flex">
                  <div className="min-w-[54px]">2023</div>
                  <div>
                    <em>I Know Some Things Form Without You</em>, TRYST
                    (Torrance Art Museum) with Ruth Gallery. Torrance,
                    California.
                  </div>
                </motion.li>
              </ol>
            </div>
            <div>
              <motion.p variants={item}>Publications</motion.p>
              <ol>
                <motion.li variants={item} className="flex">
                  <div className="min-w-[54px]">2025</div>
                  <div>
                    <em>Forthcoming</em>, Allowing Many Forms.
                  </div>
                </motion.li>
                <motion.li variants={item} className="flex">
                  <div className="min-w-[54px]">2024</div>
                  <div>
                    <em>Forthcoming</em>, with Alicia Cheatham, Allowing Many
                    Forms.
                  </div>
                </motion.li>
                <motion.li variants={item} className="flex">
                  <div className="min-w-[54px]">2024</div>
                  <div>
                    <em>The Source Can Be Transformed</em>, Allowing Many Forms.
                  </div>
                </motion.li>
                <motion.li variants={item} className="flex">
                  <div className="min-w-[54px]">2023</div>
                  <div>
                    <em>The Halves and Half Nots</em>, with Cody Miner, Allowing
                    Many Forms.
                  </div>
                </motion.li>
                <motion.li variants={item} className="flex">
                  <div className="min-w-[54px]">2021</div>
                  <div>
                    <em>Figures</em>, with Matthew Ransom, Figure Press.
                  </div>
                </motion.li>
                <motion.li variants={item} className="flex">
                  <div className="min-w-[54px]">2016</div>
                  <div>
                    <em>
                      Housing the Majority in Baishizhou Village, Shenzhen China
                    </em>
                    , with Various Authors, Studio-X Beijing, Columbia
                    University.
                  </div>
                </motion.li>
                <motion.li variants={item} className="flex">
                  <div className="min-w-[54px]">2014</div>
                  <div>
                    <em>From A-Z, BFA Thesis 2013-14</em>, with Various Authors,
                    Parsons / The New School.
                  </div>
                </motion.li>
                <motion.li variants={item} className="flex">
                  <div className="min-w-[54px]">2013</div>
                  <div>
                    <em>Honolulu, New York</em>, Allowing Many Forms.
                  </div>
                </motion.li>
                <motion.li variants={item} className="flex">
                  <div className="min-w-[54px]">2013</div>
                  <div>
                    <em>Currents: Translations</em>, with Various Authors,
                    Synoptic Office.
                  </div>
                </motion.li>
              </ol>
            </div>
            <div>
              <motion.p variants={item}>Awards</motion.p>
              <ol>
                <motion.li variants={item} className="flex">
                  <div className="min-w-[54px]">2018</div>
                  <div>
                    William Kinne Travelling Fellowship, for{" "}
                    <em>
                      A Building Depository: New Temporal Accumulation of
                      Subject Matter, Material, and Memory
                    </em>
                    . Columbia University, New York, New York.
                  </div>
                </motion.li>
              </ol>
            </div>
            <div>
              <motion.p variants={item}>Special Projects</motion.p>
              <ol>
                <motion.li variants={item} className="flex">
                  <div className="min-w-[54px]">2023</div>
                  <div>
                    Directed{" "}
                    <em>
                      Allowing Many Forms Handmade Book Residency (Spring)
                    </em>
                    . 4 Participants. Los Angeles, California.
                  </div>
                </motion.li>
                <motion.li variants={item} className="flex">
                  <div className="min-w-[54px]">2022</div>
                  <div>
                    Directed{" "}
                    <em>Allowing Many Forms Handmade Book Residency (Fall)</em>.
                    6 Participants. New York, New York.
                  </div>
                </motion.li>
              </ol>
            </div>
          </motion.div>
        </div>
      </div>
    </PageContainer>
  );
}
