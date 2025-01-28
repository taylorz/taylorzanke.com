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

  const [currentWorkIndex, setCurrentWorkIndex] = useState(0);
  const [isViewing, setIsViewing] = useState(false);

  const handleNextWork = () => {
    setCurrentWorkIndex((prevIndex) =>
      prevIndex === works2.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <PageContainer pageContext={<div>UNDER CONSTRUCTION</div>}>
      <img
        src={works2[4].imageArray[1].img}
        alt="Taylor Zanke"
        className="w-[480px]"
      />

      {/* <div className="flex flex-col gap-6 sm:gap-9">
        <div className="z-10 fixed top-6 sm:top-9 left-6 sm:left-9 flex gap-6 sm:gap-9">
          <p
            className="hover:underline hover:cursor-pointer"
            onClick={() => setIsViewing(!isViewing)}
          >
            {isViewing ? (
              <span>Back</span>
            ) : (
              <span>({works2[currentWorkIndex].imageArray.length})</span>
            )}
          </p>
        </div>
        <div className="z-10 fixed top-6 sm:top-9 right-6 sm:right-9">
          <a href="/information" className="hover:underline">
            Info
          </a>
        </div>
        {isViewing ? (
          <div className="flex flex-col justify-center gap-9">
            <div className="flex flex-col gap-6 sm:gap-9 m-auto">
              {works2[currentWorkIndex].imageArray.map((image, index) => (
                <img
                  src={image.img}
                  alt="Taylor Zanke"
                  key={index}
                  className="max-h-[calc(100vh-72px)] max-w-screen-lg"
                />
              ))}
            </div>
            <div>
              <p className="italic">{works2[currentWorkIndex].title}</p>
              <p>{works2[currentWorkIndex].year}</p>
              <p>{works2[currentWorkIndex].materials}</p>
              <p>{works2[currentWorkIndex].dimensions}</p>
            </div>
          </div>
        ) : (
          <div
            className="absolute top-0 left-0 w-full h-full cursor-pointer flex justify-center items-center"
            onClick={handleNextWork}
          >
            <img
              src={works2[currentWorkIndex].imageArray[0].img}
              alt="Taylor Zanke"
              className="w-full h-full object-cover object-center"
            />
          </div>
        )}
      </div> */}
    </PageContainer>
  );
}

const works2 = [
  {
    title: "Untitled",
    year: "2024",
    materials: "Mixed media",
    dimensions: "Dimensions variable",
    imageArray: [
      { img: "work/01/01-1.jpg", caption: "" },
      { img: "work/01/01-2.jpg", caption: "" },
      { img: "work/01/01-3.jpg", caption: "" },
    ],
  },
  {
    title: "OO",
    year: "2024",
    materials: "Pipe, wire, string, hardware, plastic",
    dimensions: "Dimensions variable",
    imageArray: [{ img: "work/02/02-1.jpg", caption: "" }],
  },
  {
    title: "Alcove",
    year: "2024",
    materials: "Mixed media",
    dimensions: "Dimensions variable",
    imageArray: [
      { img: "work/03/03-1.jpg", caption: "" },
      { img: "work/03/03-2.jpg", caption: "" },
      { img: "work/03/03-3.jpg", caption: "" },
    ],
  },
  {
    title: "Mirror",
    year: "2024",
    materials: "Mixed media",
    dimensions: "Dimensions variable",
    imageArray: [
      { img: "work/04/04-1.jpg", caption: "" },
      { img: "work/04/04-2.jpg", caption: "" },
    ],
  },
  {
    title: "Untitled",
    year: "2024",
    materials: "Mixed media",
    dimensions: "Dimensions variable",
    imageArray: [
      { img: "work/05/05-1.jpg", caption: "" },
      { img: "work/05/05-2.jpg", caption: "" },
    ],
  },
  {
    title: "Untitled",
    year: "2024",
    materials: "Mixed media",
    dimensions: "Dimensions variable",
    imageArray: [
      { img: "work/06/06-1.jpg", caption: "" },
      { img: "work/06/06-2.jpg", caption: "" },
      { img: "work/06/06-3.jpg", caption: "" },
      { img: "work/06/06-4.jpg", caption: "" },
    ],
  },
  {
    title: "The Source Can Be Transformed",
    year: "2024",
    materials: "Mixed media",
    dimensions: "Dimensions variable",
    imageArray: [
      { img: "work/07/07-1.jpg", caption: "" },
      { img: "work/07/07-2.jpg", caption: "" },
      { img: "work/07/07-3.jpg", caption: "" },
      { img: "work/07/07-4.jpg", caption: "" },
      { img: "work/07/07-5.jpg", caption: "" },
      { img: "work/07/07-6.jpg", caption: "" },
      { img: "work/07/07-7.jpg", caption: "" },
      { img: "work/07/07-8.jpg", caption: "" },
      { img: "work/07/07-9.jpg", caption: "" },
      { img: "work/07/07-10.jpg", caption: "" },
      { img: "work/07/07-11.jpg", caption: "" },
      { img: "work/07/07-12.jpg", caption: "" },
      { img: "work/07/07-13.jpg", caption: "" },
    ],
  },
  {
    title: "Untitled",
    year: "2024",
    materials: "Mixed media",
    dimensions: "Dimensions variable",
    imageArray: [
      { img: "work/08/08-1.jpg", caption: "" },
      { img: "work/08/08-2.jpg", caption: "" },
    ],
  },
  {
    title: "Indifferently Suspends A Third",
    year: "2024",
    materials: "Mixed media",
    dimensions: "Dimensions variable",
    imageArray: [{ img: "work/09/09-1.png", caption: "" }],
  },
  {
    title: "Untitled",
    year: "2024",
    materials: "Mixed media",
    dimensions: "Dimensions variable",
    imageArray: [
      { img: "work/10/10-1.jpg", caption: "" },
      { img: "work/10/10-2.webp", caption: "" },
    ],
  },
];

const works = [
  {
    title: "Untitled",
    year: "2024",
    images: ["/1-zanke.jpg", "/3-zanke.jpg"],
    materials: "Mixed media",
    dimensions: "Dimensions variable",
  },
  {
    title: "Alcove",
    year: "2025",
    images: ["/taylor-123.jpg"],
    materials: "Paper, wood, felt, cardboard cartons, tube",
    dimensions: "35 x 8 x 8 inches",
  },
  {
    title: "Untitled",
    year: "2025",
    images: ["/taylor-1234.jpg"],
    materials: "Cardboard, particleboard, paper, plastic",
    dimensions: "40 x 24 x 30 inches",
  },
  {
    title: "Untitled",
    year: "2024",
    images: ["/3-2.jpg"],
    materials: "Bulbs, wood, paper, carton, clips",
    dimensions: "48 x 24 x 24 inches",
  },
  {
    title: "Indifferently Suspends A Third",
    year: "2024",
    images: ["/taylor-123456.jpg"],
    materials: "Paper, foam, metal, wall plug",
    dimensions: "62 x 18 x 3 inches",
  },
  {
    title: "Untitled",
    year: "2024",
    images: ["/1.jpg"],
    materials: "Wire, pipe, string, metal bracket, plastic",
    dimensions: "62 x 18 x 3 inches",
  },
  {
    title: "I Know Some Things Form Without You",
    year: "2023",
    images: ["/taylor-9.jpg"],
    materials: "Installation view (TRYST, Torrence Art Museum)",
  },
];
