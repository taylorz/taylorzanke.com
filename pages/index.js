import { useState } from "react";

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

  console.log({ currentIndex });

  return (
    <main className="font-serif text-sm">
      <PageSection
        className="justify-between cursor-pointer"
        onClick={handleIncrement}
      >
        <div className="grid grid-cols-2 gap-2 max-h-[90dvh]">
          {slides2[currentIndex].images.map((s, i) => (
            <div
              className={`aspect-square flex
              ${isLoaded ? "opacity-100" : "opacity-0"}
            ${
              s.position === "left"
                ? "justify-start"
                : s.position === "center"
                ? "justify-center"
                : s.position === "right" && "justify-end"
            }
            `}
              key={i}
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
          ))}
        </div>
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
      className={`h-[calc(100dvh)] flex flex-col p-3 ${className}`}
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
