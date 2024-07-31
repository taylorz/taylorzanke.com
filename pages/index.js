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
      <div className="flex flex-col gap-7">
        <div className="flex flex-col">
          <p>Taylor Zanke</p>
          <p>Los Angeles, California</p>
          <p>taylor.zanke@gmail.com</p>
        </div>
      </div>
    </PageContainer>
  );
}
