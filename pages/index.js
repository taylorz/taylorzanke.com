import { motion } from "framer-motion";

import PageContainer from "../components/PageContainer";
import ImageBox from "../components/ImageBox";

export default function Home() {
  const list = {
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 1,
        delayChildren: 0.5,
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
      <motion.div
        className="flex flex-1 grid grid-cols-1 md:grid-cols-2 gap-2"
        initial="hidden"
        animate="visible"
        variants={list}
      >
        <motion.span variants={item} className="flex flex-col justify-end">
          <ImageBox src="/taylor-4.jpg" caption="1" />
        </motion.span>
        <motion.span variants={item} className="flex flex-col justify-end">
          <ImageBox src="/04-1.png" caption="2" />
        </motion.span>
      </motion.div>
    </PageContainer>
  );
}
