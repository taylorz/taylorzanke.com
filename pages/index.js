import { useState, useEffect } from "react";
import Link from "next/link";

import PageContainer from "@/components/PageContainer";
import { getWorkImages, urlFor } from "@/lib/sanity";
import LoadingImage from "@/components/LoadingImage";

export default function Home({ workImages }) {
  // Randomize the order of work images, prioritizing selected works
  const randomizedImages = [...workImages].sort((a, b) => {
    // If one is selected and the other isn't, selected comes first
    if (a.selected !== b.selected) {
      return a.selected ? -1 : 1;
    }
    // If both are selected or both are not selected, randomize
    return Math.random() - 0.5;
  });

  return (
    <PageContainer>
      <div className="flex flex-wrap gap-12 pt-20 justify-center">
        {randomizedImages.map((image, index) => (
          <div
            key={image.slug}
            className={
              ["w-[12%]", "w-[20%]", "w-[28%]", "w-[36%]"][
                Math.floor(Math.random() * 4)
              ]
            }
          >
            <Link href={`/work/${image.slug}`} scroll={false}>
              <LoadingImage
                src={urlFor(image.randomImage.image)
                  .width(860)
                  .quality(80)
                  .url()}
                alt={image.randomImage.caption}
                className="aspect-square"
                objectPosition="top"
                delay={index * 0.015}
              />
            </Link>
          </div>
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
