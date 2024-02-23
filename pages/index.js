import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import Link from "next/link";
import Image from "next/image";

import PageSection from "../components/PageSection";
import NewsletterSubscribe from "../components/NewsletterSubscribe";
import { set } from "react-hook-form";

export default function Home() {
  const [visibleSliceFrom, setVisibleSliceFrom] = useState(0);
  const [visibleSliceTo, setVisibleSliceTo] = useState(2);
  const [viewingIndex, setViewingIndex] = useState(false);

  const handleViewIndex = () => {
    setVisibleSliceFrom(0);
    setVisibleSliceTo(slides2.length);
    setViewingIndex(true);
  };
  const handleViewImagePairs = () => {
    setVisibleSliceFrom(0);
    setVisibleSliceTo(2);
    setViewingIndex(false);
  };

  const handleIncrement = () => {
    if (visibleSliceFrom === slides2.length - 2) {
      setVisibleSliceFrom(0);
      setVisibleSliceTo(2);
    } else {
      setVisibleSliceFrom(visibleSliceFrom + 2);
      setVisibleSliceTo(visibleSliceTo + 2);
    }
  };

  const handleViewImagePair = (imageId) => {
    const imageIndex = imageId - 1;
    setVisibleSliceFrom(imageIndex);
    setVisibleSliceTo(imageIndex + 2);
    setViewingIndex(false);
  };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5,
      },
    },
  };

  const listItem = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  };

  return (
    <div
      className={`flex flex-col ${
        viewingIndex ? "justify-start" : "justify-between"
      } h-screen p-2 gap-2`}
    >
      <div className="flex flex-col">
        <Link href="/">
          <div onClick={handleViewImagePairs}>Taylor Zanke</div>
        </Link>
        <div onClick={handleViewIndex} className="cursor-pointer">
          Index
        </div>
        <Link href="/information">
          <div>Information</div>
        </Link>
      </div>

      {slides2 && (
        <motion.div
          key={visibleSliceFrom}
          variants={container}
          initial="hidden"
          animate="show"
          className={`grid ${
            viewingIndex ? "grid-cols-5" : "grid-cols-2 max-w-screen-2xl"
          } gap-2 mx-auto`}
          onClick={viewingIndex ? null : handleIncrement}
        >
          {slides2.slice(visibleSliceFrom, visibleSliceTo).map((s) => (
            <motion.div key={s} variants={listItem}>
              <div
                onClick={viewingIndex ? () => handleViewImagePair(s.id) : null}
              >
                <ImageBox src={s.url} imageNumber={s.id} />
              </div>
            </motion.div>
          ))}
        </motion.div>
      )}
    </div>
  );
}

const ImageBox = ({ src, imageNumber }) => {
  return (
    <div>
      <div className="w-full h-full cursor-pointer">
        <Image
          src={src}
          width={1}
          height={1}
          sizes="100vw"
          className="object-contain aspect-square w-full h-full"
        />
      </div>
      <div>{imageNumber}</div>
    </div>
  );
};

// export default function Home() {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [isLoaded, setIsLoaded] = useState(false);
//   const [hoveringImage, setHoveringImage] = useState(false);

//   const handleIncrement = () => {
//     if (currentIndex === slides2.length - 1) {
//       setCurrentIndex(0);
//       setIsLoaded(false);
//     } else {
//       setCurrentIndex(currentIndex + 1);
//       setIsLoaded(false);
//     }
//   };

//   const container = {
//     hidden: {
//       opacity: 0,
//     },
//     show: {
//       opacity: 1,
//     },
//   };

//   return (
//     <>
//       <PageSection>
//         <div className="flex justify-center items-center absolute top-0 left-0 right-0 bottom-0">
//           <div className="max-w-screen-lg sm:w-screen md:w-1/2 flex justify-center">
//             <AnimatePresence key={currentIndex} mode="wait">
//               <motion.div
//                 variants={container}
//                 initial="hidden"
//                 animate={isLoaded ? "show" : "hidden"}
//                 className="w-full h-full"
//               >
//                 <Image
//                   onMouseEnter={() => setHoveringImage(true)}
//                   onMouseLeave={() => setHoveringImage(false)}
//                   className="w-full aspect-square max-w-[90vw] max-h-[100vh] object-contain cursor-pointer"
//                   onClick={handleIncrement}
//                   src={slides2[currentIndex].url}
//                   alt={slides2[currentIndex].title}
//                   width={1}
//                   height={1}
//                   sizes="100vw"
//                   priority
//                   onLoad={() => setIsLoaded(true)}
//                 />
//               </motion.div>
//             </AnimatePresence>
//           </div>
//         </div>
//         {/* {hoveringImage ? (
//           <div className="absolute left-0 top-8 md:top-3 right-0 px-3">
//             <div className="flex justify-center w-full text-center">
//               <p>
//                 <em>{slides2[currentIndex].title}</em>,{" "}
//                 {slides2[currentIndex].caption}
//               </p>
//             </div>
//           </div>
//         ) : null} */}
//       </PageSection>

//       <PageSection className="h-screen">
//         <div>
//           <div className="mb-6">
//             <p>
//               Taylor Zanke is an artist who uses material from everyday life to
//               explore space and presence. He is the founder of Allowing Many
//               Forms, a publisher of artist's books. He earned both a Master of
//               Architecture and M.S. from Columbia University and a BFA from
//               Parsons The New School For Design.
//             </p>
//           </div>
//         </div>
//         <NewsletterSubscribe />
//       </PageSection>
//     </>
//   );
// }

const slides2 = [
  {
    id: 1,
    url: "/1.jpg",
    title: "Untitled",
    caption: "2023.",
  },
  {
    id: 2,
    url: "/taylor-12.jpg",
    title: "Trending Toward the Unity of Concerns",
    caption: "Ruth Gallery. Leaf Thru, Pore Over. 2023.",
  },
  {
    id: 3,
    url: "/2.jpg",
    title: "Untitled",
    caption: "2023.",
  },
  {
    id: 4,
    url: "/3.jpg",
    title: "I Know Some Things Form Without You",
    caption: "TRYST (Torrance Art Museum). 2023.",
  },
  {
    id: 5,
    url: "/4.jpg",
    title: "To Store Everything In Matter",
    caption: "2023.",
  },
  {
    id: 6,
    url: "/taylor-10.jpg",
    title: "The Factual Reality Of The Structure",
    caption: "2023.",
  },
];
