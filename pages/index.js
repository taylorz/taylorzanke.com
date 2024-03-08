import { motion } from "framer-motion";

import { list, item } from "../utils/animationVariants";
import PageContainer from "../components/PageContainer";
import ImageBox from "../components/ImageBox";

export default function Home() {
  return (
    <PageContainer>
      {/* Clicking "Taylor Zanke" refreshes with new images */}
      <motion.div
        className="flex flex-1 grid grid-cols-1 md:grid-cols-2 gap-2"
        initial="hidden"
        animate="visible"
        variants={list}
      >
        {/* These images are "random" from a hopper, showing the image id*/}
        <motion.span variants={item} className="flex flex-col justify-end">
          <ImageBox src="/taylor-9.jpg" caption="1" />
        </motion.span>
        <motion.span variants={item} className="flex flex-col justify-end">
          <ImageBox src="/2.jpg" caption="2" />
        </motion.span>
      </motion.div>
    </PageContainer>
  );
}
