import { motion } from "framer-motion";
import useSWR from "swr";

import { getSanityClient, getSanityImageUrl } from "../../lib/sanity";

import { list, item } from "../../utils/animationVariants";

import PageContainer from "../../components/PageContainer";
import ImageBox from "../../components/ImageBox";

const ImagesIndex = () => {
  const fetcher = (query) => getSanityClient().fetch(query);
  const { data, error, isValidating } = useSWR(
    `
    *[_type == "group"] | order(year desc) {
      slug,
      "images": images[]{
        _key,
        "url": image.asset->url,
        slug
      }
    }
    `,
    fetcher,
    { revalidateOnFocus: false }
  );

  // console.log({ data });

  return !data && !error ? null : (
    <PageContainer>
      <motion.div
        className="flex flex-1 auto-rows-min grid grid-cols-2 md:grid-cols-8 gap-3"
        initial="hidden"
        animate={!isValidating ? "visible" : "hidden"}
        variants={list}
      >
        {data?.map((d) =>
          d.images.map((image, i) => (
            <motion.span variants={item}>
              <ImageBox
                src={image.url ? getSanityImageUrl(image.url, 480) : ""}
                // caption={i + 1}
                key={i}
                href={`/images/${d.slug.current}/${image?._key}`}
              />
            </motion.span>
          ))
        )}
      </motion.div>
    </PageContainer>
  );
};

export default ImagesIndex;
