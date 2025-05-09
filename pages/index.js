import { useState, useEffect } from "react";
import { motion } from "motion/react";
import Link from "next/link";

import PageContainer from "@/components/PageContainer";
import { getWorkImages, urlFor } from "@/lib/sanity";
import LoadingImage from "@/components/LoadingImage";

export default function Home({ workImages }) {
  // Randomize the order of work images
  const randomizedImages = [...workImages].sort(() => Math.random() - 0.5);

  return (
    <PageContainer>
      <div className="flex flex-wrap gap-20 pt-20 justify-center">
        {randomizedImages.map((image, index) => (
          <motion.div
            key={image.slug}
            className={
              ["w-[8%]", "w-[12%]", "w-[16%]", "w-[20%]"][
                Math.floor(Math.random() * 4)
              ]
            }
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: index * 0.015 }}
          >
            <Link href={`/work/${image.slug}`} key={image.slug}>
              <LoadingImage
                src={urlFor(image.randomImage.image)
                  .width(860)
                  .quality(80)
                  .url()}
                alt={image.randomImage.caption}
                className="aspect-square"
                objectPosition="top"
              />
            </Link>
          </motion.div>
        ))}
      </div>
    </PageContainer>
  );
}

export async function getStaticProps() {
  const workImages = await getWorkImages();

  return {
    props: {
      workImages,
    },
    // Revalidate every minute
    revalidate: 60,
  };
}
