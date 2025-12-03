import { useState, useEffect } from "react";
import Link from "next/link";

import PageContainer from "@/components/PageContainer";
import MaxWidth from "@/components/MaxWidth";
import { getWorkImages, urlFor } from "@/lib/sanity";
import LoadingImage from "@/components/LoadingImage";

export default function Home({ workImages }) {
  // Select the first image from the first work
  const randomImage = workImages[0];

  return (
    <PageContainer>
      <div className="fixed inset-0 flex items-center justify-center pointer-events-none">
        <MaxWidth>
          <LoadingImage
            src={urlFor(randomImage.firstImage.image)
              .width(2400)
              .quality(80)
              .url()}
            alt={randomImage.firstImage.caption}
            className="max-h-[640px]"
            objectPosition="bottom"
          />
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
