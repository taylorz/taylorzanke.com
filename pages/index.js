import { useState } from "react";
import useSWR from "swr";

import { getSanityClient, getSanityImageUrl } from "../lib/sanity";
import PageContainer from "../components/PageContainer";

export default function Home() {
  // const fetcher = (query) => getSanityClient().fetch(query);
  // const { data, error, isValidating, mutate } = useSWR(
  //   `
  //   *[_type == "group"].images[]{
  //     _key,
  //     "url": image.asset->url,
  //     slug
  //   }
  //   `,
  //   fetcher
  // );

  const [currentIndex, setCurrentIndex] = useState(0);
  const [showCaption, setShowCaption] = useState(false);

  const handleIncrement = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  return (
    <PageContainer>
      <div className="w-full flex justify-between">
        <div className="flex gap-3 sm:gap-9">
          <p
            className="cursor-pointer"
            onMouseEnter={() => setShowCaption(true)}
            onMouseLeave={() => setShowCaption(false)}
          >
            <span className="pointer-events-none">
              ({currentIndex + 1}/{images.length})
            </span>
          </p>
          {showCaption ? <p>{images[currentIndex].caption}</p> : null}
        </div>
        <a href="/information" className="hover:underline">
          Taylor Zanke
        </a>
      </div>
      <div
        className="absolute top-0 right-0 bottom-0 left-0 -z-10 flex justify-center items-center p-8 sm:p-24 cursor-pointer"
        onClick={handleIncrement}
      >
        <img
          src={images[currentIndex].img}
          alt={images[currentIndex].caption}
          className="max-h-full aspect-square object-contain object-center"
        />
      </div>
    </PageContainer>
  );
}

const images = [
  { img: "/1-zanke.jpg", caption: "Untitled, 2024" },
  { img: "/2-zanke.jpg", caption: "Untitled, 2024" },
  { img: "/4-zanke.jpg", caption: "Untitled, 2024" },
  { img: "/3-2.jpg", caption: "Its Encumbered Impression, 2024" },
  // { img: "/9.jpg", caption: "Untitled, 2024" },
  // { img: "/5.jpg", caption: "Shimmed Receptacle, 2024" },
  // { img: "/6.jpg", caption: "Shimmed Receptacle, 2024" },
  { img: "/1.jpg", caption: "OO, 2024" },
  // { img: "/4-2.jpg", caption: "Untitled, 2024" },
  // { img: "/10.jpg", caption: "Untitled, 2023" },
  { img: "/zanke-3-1.png", caption: "The Source Can Be Transformed, 2024" },
  { img: "/zanke-6-1.png", caption: "The Source Can Be Transformed, 2024" },
  { img: "/zanke-11.jpg", caption: "Untitled, 2024" },
  { img: "/zanke-13.jpg", caption: "Untitled, 2024" },
];
