import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import Link from "next/link";
import Image from "next/image";

import PageSection from "../components/PageSection";

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  const handleIncrement = () => {
    if (currentIndex === slides2.length - 1) {
      setCurrentIndex(0);
      setIsLoaded(false);
    } else {
      setCurrentIndex(currentIndex + 1);
      setIsLoaded(false);
    }
  };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        duration: 0,
      },
    },
    exit: { opacity: 0 },
  };

  const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
    exit: { opacity: 0 },
  };

  return (
    <PageSection className="h-screen">
      <Link href="/information" className="z-10">
        <p>Taylor Zanke</p>
      </Link>

      <div className="flex justify-center items-center h-full w-full absolute top-0 left-0 right-0 bottom-0">
        <div className="max-w-screen-lg sm:w-screen md:w-1/2">
          <AnimatePresence key={currentIndex} mode="wait">
            <motion.div
              variants={container}
              initial="hidden"
              animate={isLoaded ? "show" : "hidden"}
              className="aspect-square flex justify-center"
            >
              <Image
                className="h-auto w-auto cursor-pointer"
                onClick={handleIncrement}
                src={slides2[currentIndex].images[0].url}
                alt={slides2[currentIndex].title}
                width={1}
                height={1}
                sizes="100vw"
                priority
                onLoad={() => setIsLoaded(true)}
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </PageSection>

    // <PageSection
    //   className="justify-start md:justify-between cursor-pointer"
    //   onClick={handleIncrement}
    // >
    //   <AnimatePresence key={currentIndex} mode="wait">
    //     <motion.div
    //       className="grid grid-cols-2 gap-2 "
    //       variants={container}
    //       initial="hidden"
    //       animate={isLoaded ? "show" : "hidden"}
    //     >
    //       {slides2[currentIndex].images.map((s, i) => (
    //         <motion.div variants={item} key={i}>
    //           <div
    //             className={`aspect-square flex
    //             ${
    //               s.position === "left"
    //                 ? "justify-start"
    //                 : s.position === "center"
    //                 ? "justify-center"
    //                 : s.position === "right" && "justify-end"
    //             }
    //           `}
    //           >
    //             <Image
    //               className="h-full w-auto"
    //               src={s.url}
    //               alt={slides2[currentIndex].title}
    //               width={1}
    //               height={1}
    //               sizes="100vw"
    //               priority
    //               onLoad={() => setIsLoaded(true)}
    //             />
    //           </div>
    //         </motion.div>
    //       ))}
    //     </motion.div>
    //   </AnimatePresence>
    //   <div className="pt-3">
    //     <p>
    //       Taylor Zanke. <em>{slides2[currentIndex].title}</em>.{" "}
    //       {slides2[currentIndex].caption}
    //     </p>
    //   </div>
    // </PageSection>
    // <PageSection className="justify-start md:justify-end h-screen">
    //   <div>
    //     <div>
    //       <p>
    //         Taylor Zanke is an artist who uses material from everyday life to
    //         explore space and presence.
    //       </p>

    //       <p className="indent-8">
    //         He is the founder of{" "}
    //         <Link href="https://allowingmanyforms.org/">
    //           Allowing Many Forms
    //         </Link>
    //         , a publisher of artist's books. He earned a Master of
    //         Architecture and MS from Columbia University and a BFA from
    //         Parsons the New School For Design.
    //       </p>
    //     </div>
    //   </div>
    // </PageSection>
  );
}

const slides2 = [
  {
    images: [{ url: "/taylor-12.jpg", position: "left" }],
    title: "Trending Toward the Unity of Concerns",
    caption: "Ruth Gallery, LEAF THRU POUR OVER. 2023.",
  },
  {
    images: [{ url: "/taylor-4.jpg", position: "left" }],
    title: "The Third Sphere of Spontaneity",
    caption: "TRYST (Torrance Art Museum). 2023.",
  },
  {
    images: [
      { url: "/taylor-6.jpg", position: "right" },
      { url: "/taylor-3.jpg", position: "right" },
    ],
    title: "(Left) The Poetic Narrative, (Right) The Suspending Effect",
    caption: "TRYST (Torrance Art Museum). 2023.",
  },
  {
    images: [
      { url: "/taylor-10.jpg", position: "left" },
      { url: "/taylor.jpg", position: "right" },
    ],
    title: "The Factual Reality Of The Structure",
    caption: "2023.",
  },
  {
    images: [{ url: "/taylor-2.jpg", position: "left" }],
    title: "To Store Everything In Matter",
    caption: "2023.",
  },
];
