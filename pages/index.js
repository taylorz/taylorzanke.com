import { useState, useEffect } from "react";
import Link from "next/link";

import PageContainer from "@/components/PageContainer";
import MaxWidth from "@/components/MaxWidth";
import { getWorkImages, urlFor } from "@/lib/sanity";
import LoadingImage from "@/components/LoadingImage";

export default function Home({ workImages }) {
  // Select one random image from work images
  const randomImage = workImages[Math.floor(Math.random() * workImages.length)];

  return (
    <PageContainer>
      <div className="fixed bottom-0 right-0 p-1">
        <MaxWidth>
          <Link href={`/work/${randomImage.slug}`} scroll={false}>
            <LoadingImage
              src={urlFor(randomImage.firstImage.image)
                .width(2400)
                .quality(80)
                .url()}
              alt={randomImage.firstImage.caption}
              className="max-h-[640px]"
              objectPosition="bottom"
            />
          </Link>
        </MaxWidth>
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
