import { motion } from "framer-motion";

import PageContainer from "../../components/PageContainer";
import NewsletterSubscribe from "../../components/NewsletterSubscribe";

export default function Contact() {
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
        <div className="flex flex-col col-span-3 gap-5 ">
          <ul>
            <li>b. 1992 Canada</li>
            <li>Lives and works in Los Angeles</li>
          </ul>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={list}
            className="flex flex-col gap-5"
          >
            <ul>
              <motion.li variants={item} className="flex">
                taylor@allowingmanyforms.org
              </motion.li>
              <motion.li variants={item} className="flex">
                Studio in Pasadena, California
              </motion.li>
            </ul>
            <motion.div variants={item}>
              <NewsletterSubscribe />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </PageContainer>
  );
}
