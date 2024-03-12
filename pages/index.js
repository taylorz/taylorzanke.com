import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import Link from "next/link";
import Image from "next/image";

import PageSection from "../components/PageSection";
import NewsletterSubscribe from "../components/NewsletterSubscribe";

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
    hidden: {
      opacity: 0,
    },
    show: {
      opacity: 1,
    },
  };

  const image = "/asdf.JPG";

  return (
    <div>
      <div className="p-3 h-screen">
        I am interested in the embodied intentions of the built environment and
        architecture insofar as they are externalizations of immaterial yet
        structured forces: modes of regularization which combine to form
        hard-edges. My practice creates space between these modes and their
        material forms without overt destruction and instead engages in their
        gradual and slowing dissipation and recombination. My work emerges from
        this condition and things happen obliquely: by observing, waiting, and
        becoming aware. I want to convey a sense of diffuse suspension in my
        works and installations which challenge the fixity of the spaces within
        which they are composed. Beyond what exists in front of us there is a
        realm of unknowable potential.
      </div>
      <div className="p-3 h-screen">
        <div className="grid gap-3 md:grid-cols-3 w-full">
          <img src={image} className="w-full" />
        </div>
      </div>
    </div>
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
