import { motion } from "framer-motion";
import useSWR from "swr";

import { getSanityClient, getSanityImageUrl } from "../lib/sanity";

import { list, item } from "../utils/animationVariants";
import PageContainer from "../components/PageContainer";
import ImageBox from "../components/ImageBox";

export default function Home() {
  const fetcher = (query) => getSanityClient().fetch(query);
  const { data, error, isValidating, mutate } = useSWR(
    `
    *[_type == "group"].images[]{
      _key,
      "url": image.asset->url,
      slug
    }
    `,
    fetcher
  );
  // console.log({ data });

  return (
    <PageContainer>
      <div className="w-full">
        {images.map((image, i) => {
          const dynamicValue = `${i * 48}px`;
          return (
            <div
              key={i}
              className="sticky w-full"
              style={{
                top: dynamicValue,
                paddingLeft: dynamicValue,
              }}
            >
              {/* <div className="absolute top-4 left-0">
                <span>{i + 1}</span>
              </div> */}
              <div
                className="py-12 sm:px-12 px-0"
                style={{
                  height: `calc(100vh - ${dynamicValue})`,
                }}
              >
                <img
                  alt={image.caption}
                  src={image.img}
                  className="h-auto w-full sm:h-full sm:w-auto"
                />
              </div>
            </div>
          );
        })}
      </div>
      <div className="w-full">
        <div>
          <span className="italic">Hello, thank you for visiting</span> — Space
          and material are suspended in a net of relation, mutually allowing the
          other to become what they are. Through my practice I work with this
          becoming in both form and content by intervening, orchestrating, or
          coordinating. I work with existing relations and shape my own in order
          to vibrate rooms and objects. My work contemplates the reverberations
          of timeless and unknowable potentials unfolding around us which happen
          with or without our looking.
        </div>
      </div>
    </PageContainer>
  );
}

const images = [
  { img: "/3-2.jpg", caption: "Its Encumbered Impression, 2024" },
  { img: "/zanke-3-1.png", caption: "The Source Can Be Transformed, 2024" },
  { img: "/5.jpg", caption: "Shimmed Receptacle, 2024" },
  { img: "/1.jpg", caption: "OO, 2024" },
  { img: "/06-16.png", caption: "Two Visits, 2022" },
  { img: "/zanke-11.jpg", caption: "Untitled, 2024" },
  { img: "/4-2.jpg", caption: "Untitled, 2024" },
  { img: "/08-23.png", caption: "Reforumations 2, 2022" },
  { img: "/zanke-6-1.png", caption: "The Source Can Be Transformed, 2024" },
  { img: "/06-13.png", caption: "Reformulations 2, 2022" },
];
