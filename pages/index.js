import { useState, useEffect } from "react";
import Link from "next/link";

import PageContainer from "@/components/PageContainer";
import { getWorkImages, urlFor } from "@/lib/sanity";
import LoadingImage from "@/components/LoadingImage";

export default function Home({ workImages }) {
  // Randomize the order of work images
  const randomizedImages = [...workImages].sort(() => Math.random() - 0.5);

  return (
    <PageContainer>
      {/* <div className="flex flex-col gap-2 pt-10 items-start justify-start max-w-screen-md"> */}
      <div className="fixed inset-1 overflow-y-scroll flex flex-col gap-1">
        {randomizedImages.map((image, index) => (
          <div key={image.slug}>
            <Link href={`/work/${image.slug}`} scroll={false}>
              <LoadingImage
                src={urlFor(image.firstImage.image)
                  .width(2400)
                  .quality(80)
                  .url()}
                alt={image.firstImage.caption}
                delay={index * 0.015}
              />
            </Link>
          </div>
        ))}
      </div>
      {/* </div> */}
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
