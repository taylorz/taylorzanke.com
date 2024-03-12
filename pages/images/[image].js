import { motion } from "framer-motion";

import { list, item } from "../../utils/animationVariants";

import PageContainer from "../../components/PageContainer";
import ImageBox from "../../components/ImageBox";

const ImagePage = () => {
  return (
    <PageContainer>
      <motion.div
        className="flex flex-1 auto-rows-min md:auto-rows-auto grid grid-cols-1 md:grid-cols-2 gap-3"
        initial="hidden"
        animate="visible"
        variants={list}
      >
        <motion.span
          variants={item}
          className="md:flex md:flex-col justify-end"
        >
          <ImageBox src="/08-10.png" caption="1" />
        </motion.span>
        <motion.div variants={item}>
          Installation view. <em>I Know Some Things Form Without You</em>, TRYST
          (Torrance Art Museum) with Ruth Gallery. Torrance, California. (2023)
        </motion.div>
      </motion.div>
    </PageContainer>
  );
};

export default ImagePage;
