import { motion } from "framer-motion";

import { list, item } from "../../utils/animationVariants";

import PageContainer from "../../components/PageContainer";

const Statement = () => {
  return (
    <PageContainer>
      <div className="flex flex-1 grid grid-cols-1 md:grid-cols-2 gap-2">
        <div className="flex flex-col col-span-1 gap-5">
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
