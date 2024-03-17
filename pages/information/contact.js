import { motion } from "framer-motion";

import { list, item } from "../../utils/animationVariants";

import PageContainer from "../../components/PageContainer";
import NewsletterSubscribe from "../../components/NewsletterSubscribe";

export default function Contact() {
  return (
    <PageContainer>
      <div className="flex flex-1 grid grid-cols-1 md:grid-cols-2 gap-2">
        <div className="flex flex-col col-span-1 gap-5">
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
            {/* <motion.div variants={item}>
              <NewsletterSubscribe />
            </motion.div> */}
          </motion.div>
        </div>
      </div>
    </PageContainer>
  );
}
