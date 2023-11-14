import { useState } from "react";

import Link from "next/link";
import Image from "next/image";

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  const handleIncrement = () => {
    if (currentIndex === slides.length - 1) {
      setCurrentIndex(0);
      setIsLoaded(false);
    } else {
      setCurrentIndex(currentIndex + 1);
      setIsLoaded(false);
    }
  };

  return (
    <main
      className={`p-2 font-sans text-sm leading-7 sm:leading-8 w-screen overflow-hidden sm:text-base`}
    >
      <div className={`flex flex-col gap-2`}>
        <div className={`flex grid grid-cols-1 sm:grid-cols-2`}>
          <div>
            <p className={`indent-12 sm:indent-16`}>
              <Link href="/information">Taylor Zanke</Link>
            </p>
          </div>
          <div>
            <p>
              {slides.map((slide, i) => (
                <span
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className={`cursor-pointer`}
                >
                  <span className={i === currentIndex ? `underline` : null}>
                    {i + 1}
                  </span>
                  {i === slides.length - 1 ? null : `, `}
                </span>
              ))}
            </p>
          </div>
        </div>
        <div
          className={`flex justify-center sm:h-[calc(100vh-6rem)]`}
          onClick={handleIncrement}
        >
          <div className={`absolute ${isLoaded ? "opacity-0" : "opacity-1"}`}>
            <p>Loading image...</p>
          </div>
          <Image
            className={`w-full h-auto sm:w-auto sm:h-full cursor-pointer z-1 ${
              isLoaded ? "opacity-1" : "opacity-0"
            }`}
            src={slides[currentIndex].url}
            alt="Name of work"
            width={1}
            height={1}
            sizes="100vw"
            priority
            onLoad={() => setIsLoaded(true)}
          />
        </div>
        <div className={`flex justify-center`}>
          <p>
            <span className={`italic`}>{slides[currentIndex]?.title}</span>.{" "}
            {slides[currentIndex]?.view}. {slides[currentIndex]?.additional}.{" "}
            {slides[currentIndex]?.year}.
          </p>
        </div>
      </div>
    </main>
  );
}

const slides = [
  {
    url: "/taylor-12.jpg",
    title: "Trending Toward The Unity Of Concerns",
    view: "Installation view",
    additional: "Ruth Gallery, LEAF THRU POUR OVER",
    year: "2023",
  },
  {
    url: "/taylor-9.jpg",
    title: "I Know Some Things Form Without You",
    view: "Installation view",
    additional: "TRYST (Torrance Art Museum)",
    year: "2023",
  },
  {
    url: "/taylor-4.jpg",
    title: "The Third Sphere of Spontaneity",
    view: "Detail view",
    additional: "Various materials",
    year: "2023",
  },
  {
    url: "/taylor-3.jpg",
    title: "The Suspending Effect",
    view: "Detail view",
    additional: "Fabric, wood, cabinets",
    year: "2023",
  },
  {
    url: "/taylor-6.jpg",
    title: "The Poetic Narrative",
    view: "Installation view",
    additional: "Hardware, bulb, electrical cord",
    year: "2023",
  },
  {
    url: "/taylor-5.jpg",
    title: "To Store Everything In Matter",
    view: "Installation view",
    additional: "Various materials",
    year: "2023",
  },
  {
    url: "/taylor-10.jpg",
    title: "The Factual Reality Of The Structure",
    view: "Installation view",
    additional: "Various materials",
    year: "2023",
  },
  {
    url: "/taylor.jpg",
    title: "The Factual Reality Of The Structure",
    view: "Detail view",
    additional: "Various materials",
    year: "2023",
  },
  {
    url: "/taylor-2.jpg",
    title: "To Store Everything In Matter",
    view: "Installation view",
    additional: "Paper, plastic, string, rubber",
    year: "2023",
  },
  {
    url: "/taylor-7.jpg",
    title: "Trending Toward The Unity Of Concerns",
    view: "Installation view",
    additional: "Carton, paper",
    year: "2023",
  },
  {
    url: "/taylor-11.jpg",
    title: "Untitled",
    view: "Installation view",
    additional: "Cardboard, dresser hardware",
    year: "2023",
  },
];
