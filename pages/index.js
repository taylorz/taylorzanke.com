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

  return (
    <PageContainer>
      <div className="flex flex-col gap-9">
        <div>
          <a href="/information" className="hover:underline">
            Taylor Zanke
          </a>
        </div>

        {works.map((work, i) => {
          return (
            <div className="flex flex-col gap-9 max-w-screen-lg" key={i}>
              <div className="px-9 sm:px-20 flex flex-col gap-9">
                {work.images.map((img, i) => {
                  return (
                    <img
                      src={img}
                      key={i}
                      className="w-full max-h-[860px] object-contain"
                    />
                  );
                })}
              </div>
              <div>
                <p>
                  <span className="italic">{work.title}</span>, {work.year}
                </p>
                {work.materials && <p>{work.materials}</p>}
                {work.dimensions && <p>{work.dimensions}</p>}
              </div>
            </div>
          );
        })}
      </div>
    </PageContainer>
  );
}

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
    title: "Untitled",
    year: "2024",
    images: ["/taylor-12345.jpg"],
    materials: "Paper in groups of four",
    dimensions: "18 x 7.5 x 3 inches",
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
    materials: "Installation view",
  },
];
