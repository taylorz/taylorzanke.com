import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import PageContainer from "@/components/PageContainer";
import Text from "@/components/Text";
import { getWorkImages, getResume, getBiography, urlFor } from "@/lib/sanity";
import InformationOverlay from "@/components/InformationOverlay";

export default function Home({ workImages, resume, biography }) {
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (router.query.overlay === "1") {
      setIsOverlayOpen(true);
      router.replace("/", undefined, { shallow: true });
    }
  }, [router.query.overlay, router]);

  useEffect(() => {
    if (isOverlayOpen) {
      document.documentElement.style.overflow = "hidden";
      document.body.style.overflow = "hidden";
    } else {
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
    }
    return () => {
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
    };
  }, [isOverlayOpen]);

  return (
    <>
      <div className="fixed inset-0 px-3 sm:px-32 pt-8 sm:pb-6 flex flex-col sm:justify-end pointer-events-none z-30">
        <button
          onClick={() => setIsOverlayOpen((prev) => !prev)}
          className="pointer-events-auto w-fit bg-transparent border-none p-0 cursor-pointer"
        >
          <Text link>Taylor Zanke</Text>
        </button>
      </div>
      <PageContainer>
        <div className="flex flex-col gap-32">
          {workImages.flatMap(
            (work) =>
              work.images?.map((image, index) => {
                if (!image?.image) return null;
                return (
                  <div key={`${work.slug}-${index}`} className="flex flex-col">
                    <img
                      src={urlFor(image.image).width(3200).quality(80).url()}
                      alt="Taylor Zanke"
                      className="sm:max-w-[70vw] sm:max-h-[70vw] max-w-[95vw] max-h-[95vw] w-auto h-auto self-start"
                    />
                    {image.caption && (
                      <div className="text-xs leading-[1] p-2">
                        {image.caption}
                      </div>
                    )}
                  </div>
                );
              }) ?? []
          )}
        </div>
      </PageContainer>
      {isOverlayOpen && (
        <InformationOverlay
          biography={biography}
          resume={resume}
          onClose={() => setIsOverlayOpen(false)}
        />
      )}
    </>
  );
}

export async function getStaticProps() {
  const [workImages, resume, biography] = await Promise.all([
    getWorkImages(),
    getResume(),
    getBiography(),
  ]);

  return {
    props: {
      workImages,
      resume,
      biography,
    },
    // Revalidate every minute
    revalidate: 60,
  };
}
