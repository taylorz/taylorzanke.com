import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import Link from "next/link";
import Image from "next/image";

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
        duration: 0.5,
        staggerChildren: 0.25,
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
    <main className="font-serif text-sm">
      <PageSection
        className="justify-between cursor-pointer "
        onClick={handleIncrement}
      >
        <AnimatePresence key={currentIndex} mode="wait">
          <motion.div
            className="grid grid-cols-2 gap-2"
            variants={container}
            initial="hidden"
            animate={isLoaded ? "show" : "hidden"}
          >
            {slides2[currentIndex].images.map((s, i) => (
              <motion.div variants={item} key={i}>
                <div
                  className={`aspect-square flex max-h-[80vh]
                  ${
                    s.position === "left"
                      ? "justify-start"
                      : s.position === "center"
                      ? "justify-center"
                      : s.position === "right" && "justify-end"
                  }
                `}
                >
                  <Image
                    className="h-full w-auto"
                    src={s.url}
                    alt={slides2[currentIndex].title}
                    width={1}
                    height={1}
                    sizes="100vw"
                    priority
                    onLoad={() => setIsLoaded(true)}
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        <div>
          <p>
            Taylor Zanke. <em>{slides2[currentIndex].title}</em>.{" "}
            {slides2[currentIndex].caption}
          </p>
        </div>
      </PageSection>
      <PageSection className="justify-end">
        <div>
          <div>
            <p>
              Taylor Zanke is an artist who uses material from everyday life to
              explore space and presence.
            </p>

            <p className="indent-8">
              He is the founder of{" "}
              <Link href="https://allowingmanyforms.org/">
                Allowing Many Forms
              </Link>
              , a publisher of artist's books. He earned a Master of
              Architecture and MS from Columbia University and a BFA from
              Parsons the New School For Design.
            </p>
          </div>
        </div>
      </PageSection>
    </main>
  );
}

const PageSection = ({ children, className, onClick }) => {
  return (
    <div
      className={`h-[50vh] md:h-[calc(100dvh)] flex flex-col p-3 ${className}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

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
