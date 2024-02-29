import { motion } from "framer-motion";

import PageContainer from "../../components/PageContainer";

const Statement = () => {
  const list = {
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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
          <motion.div initial="hidden" animate="visible" variants={list}>
            <motion.p variants={item}>
              I am interested in the embodied intentions of the built
              environment and architecture insofar as they are externalizations
              of immaterial yet structured forces: modes of regularization which
              combine to form hard-edges. My practice creates space between
              these modes and their material forms without overt destruction and
              instead engages in their gradual and slowing dissipation and
              recombination. My work emerges from this condition and things
              happen obliquely: by observing, waiting, and becoming aware. I
              want to convey a sense of diffuse suspension in my works and
              installations which challenge the fixity of the spaces within
              which they are composed. Beyond what exists in front of us there
              is a realm of unknowable potential.
            </motion.p>
          </motion.div>
        </div>
      </div>
    </PageContainer>
  );
};

export default Statement;
