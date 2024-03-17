import { motion } from "framer-motion";
import useSWR from "swr";

import { getSanityClient, getSanityImageUrl } from "../lib/sanity";

import { list, item } from "../utils/animationVariants";
import PageContainer from "../components/PageContainer";
import ImageBox from "../components/ImageBox";

export default function Home() {
  const fetcher = (query) => getSanityClient().fetch(query);
  const { data, error, isValidating } = useSWR(
    `
    *[_type == "group"].images[]{
      _key,
      "url": image.asset->url,
      slug
    }
    `,
    fetcher
  );

  // Once data is loaded, randomly select two images
  let randomImages;
  if (data) {
    const randomIndices = [];
    while (randomIndices.length < 2) {
      let r = Math.floor(Math.random() * data.length);
      if (randomIndices.indexOf(r) === -1) randomIndices.push(r);
    }
    randomImages = randomIndices.map((i) => data[i]);
  }

  console.log({ randomImages });

  return (
    <PageContainer>
      <motion.div
        className="flex flex-1 auto-rows-min md:auto-rows-auto grid grid-cols-1 md:grid-cols-2 gap-2"
        initial="hidden"
        animate={!isValidating ? "visible" : "hidden"}
        variants={list}
        key={randomImages?.map((image) => image._key).join(",")}
      >
        {randomImages?.map((image, i) => (
          <motion.span variants={item} className="flex flex-col justify-end">
            <ImageBox
              src={image.url ? getSanityImageUrl(image.url, 1600) : ""}
              key={i}
            />
          </motion.span>
        ))}
      </motion.div>
    </PageContainer>
  );
}
