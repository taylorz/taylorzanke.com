import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import PageContainer from "@/components/PageContainer";
import { useWorksByYear } from "@/lib/hooks";
import { urlFor } from "@/lib/sanity";

const YearPage = () => {
  const router = useRouter();
  const { year } = router.query;
  const { works, isLoading } = useWorksByYear(year);
  const [selectedWork, setSelectedWork] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

  // Reset selected states on route change
  useEffect(() => {
    const handleRouteChange = () => {
      setSelectedImage(null);
      setSelectedWork(null);
    };

    router.events.on("routeChangeStart", handleRouteChange);

    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
    };
  }, [router]);

  if (isLoading) {
    return (
      <PageContainer pageContext={<div>{year}</div>}>
        <div>Loading...</div>
      </PageContainer>
    );
  }

  return (
    <PageContainer
      pageContext={
        <div className="flex flex-col gap-4">
          <div className="grid grid-cols-2 gap-4">
            {works?.map((work) =>
              work.images?.map((img) => (
                <img
                  key={img._id}
                  src={urlFor(img.image).width(200).url()}
                  alt={img.caption || work.title}
                  className="w-full aspect-square object-contain cursor-pointer"
                  onClick={() => {
                    setSelectedWork(work);
                    setSelectedImage(img);
                  }}
                />
              ))
            )}
          </div>
        </div>
      }
    >
      {selectedWork && selectedImage && (
        <div className="flex flex-col gap-4 sticky top-8">
          <img
            src={urlFor(selectedImage.image).width(1200).url()}
            alt={selectedImage.caption || selectedWork.title}
            className="max-w-full max-h-[720px] object-contain object-center w-full"
          />
          <div className="flex justify-between gap-4">
            <div>
              <div>{selectedWork.title}</div>
              <div>{selectedWork.year}</div>
              {selectedImage.caption && <div>{selectedImage.caption}</div>}
            </div>
          </div>
        </div>
      )}
    </PageContainer>
  );
};

export default YearPage;
