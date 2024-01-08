import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import Link from "next/link";
import Image from "next/image";

import PageSection from "../components/PageSection";

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [hoveringImage, setHoveringImage] = useState(false);

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
  };

  return (
    <PageSection className="h-screen">
      <p className="z-10">
        <Link href="/information">
          <span className="hover:animate-blink">Taylor Zanke</span>
        </Link>
      </p>

      <div className="flex justify-center items-center h-full w-full absolute top-0 left-0 right-0 bottom-0">
        <div className="max-w-screen-lg sm:w-screen md:w-1/2 flex justify-center">
          <AnimatePresence key={currentIndex} mode="wait">
            <motion.div
              variants={container}
              initial="hidden"
              animate={isLoaded ? "show" : "hidden"}
              className="aspect-square flex justify-center max-h-[80vh] max-w-[90vw]"
            >
              <Image
                onMouseEnter={() => setHoveringImage(true)}
                onMouseLeave={() => setHoveringImage(false)}
                className="w-auto h-full cursor-pointer"
                onClick={handleIncrement}
                src={slides2[currentIndex].url}
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
      {hoveringImage ? (
        <div className="absolute left-0 top-8 md:top-3 right-0 px-3">
          <div className="flex justify-center w-full text-center">
            <p>
              <em>{slides2[currentIndex].title}</em>,{" "}
              {slides2[currentIndex].caption}
            </p>
          </div>
        </div>
      ) : null}
    </PageSection>
  );
}

const slides2 = [
  {
    url: "/1.jpg",
    title: "Untitled",
    caption: "2023.",
  },
  {
    url: "/taylor-12.jpg",
    title: "Trending Toward the Unity of Concerns",
    caption: "Ruth Gallery. Leaf Thru, Pore Over. 2023.",
  },
  {
    url: "/2.jpg",
    title: "Untitled",
    caption: "2023.",
  },
  {
    url: "/3.jpg",
    title: "I Know Some Things Form Without You",
    caption: "TRYST (Torrance Art Museum). 2023.",
  },
  {
    url: "/4.jpg",
    title: "To Store Everything In Matter",
    caption: "2023.",
  },
  {
    url: "/taylor-10.jpg",
    title: "The Factual Reality Of The Structure",
    caption: "2023.",
  },
];
