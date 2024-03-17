import { motion } from "framer-motion";

import { list, item } from "../../utils/animationVariants";

import PageContainer from "../../components/PageContainer";

export default function Information() {
  return (
    <PageContainer>
      <div className="flex flex-1 grid grid-cols-1 md:grid-cols-2 gap-2">
        <motion.div
          className="flex flex-col col-span-1 gap-5"
          initial="hidden"
          animate="visible"
          variants={list}
        >
          <ul>
            <motion.li variants={item} className="flex">
              b. 1992 Canada
            </motion.li>
            <motion.li variants={item} className="flex">
              Lives and works in Los Angeles
            </motion.li>
            <motion.li variants={item} className="flex text-stone-600">
              c.v. on request
            </motion.li>
          </ul>
        </motion.div>
      </div>
    </PageContainer>
  );
}
