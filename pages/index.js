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
      <div className="flex flex-col gap-5 max-w-[420px]">
        <p>
          Taylor Zanke is an artist and founder of publisher{" "}
          <a href="https://allowingmanyforms.org" className="cursor-pointer">
            Allowing Many Forms
          </a>
          . Based in Los Angeles USA.
        </p>
        <p className="indent-9">Contact</p>
        <p>taylor@allowingmanyforms.org</p>
      </div>
    </PageContainer>
  );
}
