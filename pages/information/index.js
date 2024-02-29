import { motion } from "framer-motion";

import PageContainer from "../../components/PageContainer";
import NewsletterSubscribe from "../../components/NewsletterSubscribe";

export default function Information() {
  const list = {
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 1,
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
        <motion.div
          className="flex flex-col col-span-3 gap-5 "
          initial="hidden"
          animate="visible"
          variants={list}
        >
          <motion.ul variants={item}>
            <li>b. 1992 Canada</li>
            <li>Lives and works in Los Angeles</li>
          </motion.ul>
        </motion.div>
      </div>
    </PageContainer>
  );
}
