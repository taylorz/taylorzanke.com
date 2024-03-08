import { motion } from "framer-motion";

import { list, item } from "../../utils/animationVariants";

import PageContainer from "../../components/PageContainer";
import ImageBox from "../../components/ImageBox";

const ImagesIndex = () => {
  return (
    <PageContainer>
      <motion.div
        className="flex flex-1 auto-rows-min grid grid-cols-2 md:grid-cols-8 gap-3"
        initial="hidden"
        animate="visible"
        variants={list}
      >
        {slides.map((s, i) => (
          <motion.span variants={item}>
            <ImageBox
              src={s.url}
              caption={s.id}
              key={i}
              href={`/images/${s.id}`}
            />
          </motion.span>
        ))}
      </motion.div>
    </PageContainer>
  );
};

export default ImagesIndex;

const slides = [
  {
    id: 1,
    url: "/1.jpg",
    title: "Untitled",
    caption: "2023.",
  },
  {
    id: 2,
    url: "/taylor-book.jpg",
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
  {
    id: 7,
    url: "/taylor-7.jpg",
    title: "The Factual Reality Of The Structure",
    caption: "2023.",
  },
  {
    id: 8,
    url: "/taylor-3.jpg",
    title: "The Factual Reality Of The Structure",
    caption: "2023.",
  },
  {
    id: 9,
    url: "/taylor-2.jpg",
    title: "The Factual Reality Of The Structure",
    caption: "2023.",
  },
  {
    id: 10,
    url: "/06-4.png",
    title: "The Factual Reality Of The Structure",
    caption: "2023.",
  },
  {
    id: 11,
    url: "/06-13.png",
    title: "The Factual Reality Of The Structure",
    caption: "2023.",
  },
  {
    id: 12,
    url: "/06-16.png",
    title: "The Factual Reality Of The Structure",
    caption: "2023.",
  },
  {
    id: 13,
    url: "/06-17.png",
    title: "The Factual Reality Of The Structure",
    caption: "2023.",
  },
  {
    id: 14,
    url: "/08-14.png",
    title: "The Factual Reality Of The Structure",
    caption: "2023.",
  },
  {
    id: 15,
    url: "/08-23.png",
    title: "The Factual Reality Of The Structure",
    caption: "2023.",
  },
  {
    id: 16,
    url: "/08-22.png",
    title: "The Factual Reality Of The Structure",
    caption: "2023.",
  },
  {
    id: 17,
    url: "/08-10.png",
    title: "The Factual Reality Of The Structure",
    caption: "2023.",
  },
  {
    id: 18,
    url: "/04-5.png",
    title: "The Factual Reality Of The Structure",
    caption: "2023.",
  },
  {
    id: 19,
    url: "/04-1.png",
    title: "The Factual Reality Of The Structure",
    caption: "2023.",
  },
  {
    id: 20,
    url: "/04-3.png",
    title: "The Factual Reality Of The Structure",
    caption: "2023.",
  },
  {
    id: 21,
    url: "/04-2.png",
    title: "The Factual Reality Of The Structure",
    caption: "2023.",
  },
];
