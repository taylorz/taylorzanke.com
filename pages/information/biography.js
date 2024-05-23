import { motion } from "framer-motion";

import { list, item } from "../../utils/animationVariants";

import PageContainer from "../../components/PageContainer";

export default function Biography() {
  return (
    <PageContainer>
      <div className="flex flex-1 grid grid-cols-1 md:grid-cols-4 gap-2">
        <div className="flex flex-col col-span-3 gap-5">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={list}
            className="flex flex-col gap-5"
          >
            <motion.p variants={item}>
              Taylor Zanke is an artist who uses material from everyday life to
              explore space and presence. He is the founder of 
              <em>Allowing Many Forms</em>, a publisher of artist's books, and
              member of artist collective <em>Monte Vista Projects</em>, both in
              Los Angeles. He earned a Master of Architecture and M.S. from
              Columbia University, and a BFA from Parsons the New School for
              Design in New York City.
            </motion.p>
          </motion.div>
        </div>
      </div>
    </PageContainer>
  );
}
