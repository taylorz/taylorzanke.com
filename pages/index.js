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
  console.log({ data });

  return (
    <PageContainer>
      <div className="flex flex-col gap-6 max-w-[520px]">
        <p>
          Taylor Zanke is an artist. He is the founder of{" "}
          <a
            href="https://allowingmanyforms.org"
            className="cursor-pointer italic"
          >
            allowing many forms
          </a>
          , a publisher of art books. Contact him{" "}
          <a
            href="mailto:taylor@allowingmanyforms.org"
            className="cursor-pointer italic"
          >
            here
          </a>
          .
        </p>
      </div>
    </PageContainer>
  );
}
