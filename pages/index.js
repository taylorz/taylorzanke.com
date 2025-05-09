import { useState, useEffect } from "react";
import { motion } from "motion/react";
import Link from "next/link";

import PageContainer from "@/components/PageContainer";
import { getWorkImages } from "@/lib/sanity";

export default function Home({ workImages }) {
  // Randomize the order of work images
  const randomizedImages = [...workImages].sort(() => Math.random() - 0.5);

  return (
    <PageContainer>
      <div className="flex flex-wrap gap-20 pt-10 justify-between">
        {randomizedImages.map((image, index) => (
          <motion.div
            key={image.slug}
            className={Math.random() < 0.5 ? "w-1/12" : "w-1/6"}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: index * 0.015 }}
          >
            <Link href={`/work/${image.slug}`} key={image.slug}>
              <img
                src={image.randomImage.url}
                alt={image.randomImage.caption}
                className="aspect-square object-contain object-top"
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
