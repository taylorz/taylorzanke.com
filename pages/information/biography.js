import { motion } from "framer-motion";

import { list, item } from "../../utils/animationVariants";

import PageContainer from "../../components/PageContainer";

export default function Biography() {
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
            <motion.p variants={item}>
              Taylor Zanke is an artist who uses material from everyday life to
              explore space and presence. He is the founder of 
              <em>Allowing Many Forms</em>, a publisher of artist's books, and
              member of artist collective <em>Monte Vista Projects</em>, both in
              Los Angeles. He earned a Master of Architecture and M.S. from
              Columbia University, and a BFA from Parsons the New School for
              Design in New York City.
            </motion.p>
            {/* <motion.p variants={item}>
              He is the founder of <em>Allowing Many Forms</em>, a publisher of
              artist's books, and member of artist collective{" "}
              <em>Monte Vista Projects</em>, both in Los Angeles. He earned a
              Master of Architecture and M.S. from Columbia University, and a
              BFA from Parsons the New School for Design.
            </motion.p> */}
          </motion.div>
          {/* Recent presentations include two
              person exhibition <em>A Matter Of Space</em> (Ruth Gallery, 2024)
              and group exhibition <em>Leaf Thru, Pore Over</em> (Ruth Gallery,
              2023) as well as art fair <em>TRYST</em> (Torrance Art Museum,
              2023) where he debuted a collection of works together titled{" "}
              <em>I Know Some Things Form Without You</em>. He recently released
              publications <em>The Source Can Be Transformed</em> (AMF, 2024),
              and <em>The Halves And Half Nots</em> (AMF, 2024). */}
        </div>
      </div>
    </PageContainer>
  );
}
