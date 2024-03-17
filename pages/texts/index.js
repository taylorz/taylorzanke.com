import { motion } from "framer-motion";

import { list, item } from "../../utils/animationVariants";

import PageContainer from "../../components/PageContainer";

const Texts = () => {
  return (
    <PageContainer>
      <div className="flex flex-1 grid grid-cols-1 md:grid-cols-6 gap-2">
        <div className="flex flex-col col-span-3 2xl:col-span-2 gap-5">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={list}
            className="flex flex-col gap-5 pb-8"
          >
            <motion.div variants={item} className="flex">
              <div>Texts</div>
            </motion.div>
            <ul>
              <motion.li variants={item} className="flex">
                <div>Writing 1</div>
              </motion.li>
              <motion.li variants={item} className="flex">
                <div>Writing 1</div>
              </motion.li>
              <motion.li variants={item} className="flex">
                <div>Writing 1</div>
              </motion.li>
              <motion.li variants={item} className="flex">
                <div>Writing 1</div>
              </motion.li>
            </ul>
          </motion.div>
        </div>
      </div>
    </PageContainer>
  );
};

export default Texts;
