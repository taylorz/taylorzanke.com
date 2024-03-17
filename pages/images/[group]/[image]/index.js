import { motion } from "framer-motion";
import useSWR from "swr";
import { useRouter } from "next/router";

import { getSanityClient, getSanityImageUrl } from "../../../../lib/sanity";

import { list, item } from "../../../../utils/animationVariants";

import PageContainer from "../../../../components/PageContainer";
import ImageBox from "../../../../components/ImageBox";

const ImagePage = () => {
  const router = useRouter();
  const imageSlug = router.query.image;
  const groupSlug = router.query.group;

  const fetcher = (query) => getSanityClient().fetch(query);
  const { data, error, isValidating } = useSWR(
    `
    *[_type == "group" && slug.current == "${groupSlug}"]{
      name,
      caption,
      year,
      "images": images[_key == "${imageSlug}"]{
        title,
        caption,
        "url": image.asset->url,
      }
    }
    `,
    fetcher
  );

  const group = data ? data[0] : null;
  const image = data ? data[0]?.images[0] : null;

  return !image && !error ? null : (
    <PageContainer>
      <motion.div
        className="flex flex-1 auto-rows-min md:auto-rows-auto grid grid-cols-1 md:grid-cols-2 gap-3"
        initial="hidden"
        animate={!isValidating ? "visible" : "hidden"}
        variants={list}
      >
        <motion.span
          variants={item}
          className="md:flex md:flex-col justify-end"
        >
          <ImageBox src={getSanityImageUrl(image.url, 1600)} />
        </motion.span>
        <motion.div variants={item}>
          {image.title && <em>{`${image.title}. `}</em>}
          {image.caption && `${image.caption}. `}
          {group.name && `${group.name}, `}
          {group.caption && `${group.caption}, `}
          {group.year && `${group.year}.`}
        </motion.div>
      </motion.div>
    </PageContainer>
  );
};

export default ImagePage;
