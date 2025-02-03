import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useWorks } from "@/lib/hooks";
import PageContainer from "@/components/PageContainer";
import { urlFor } from "@/lib/sanity";

function Work() {
  const router = useRouter();
  const { works, isLoading, isError } = useWorks();

  // Log the data, loading state, and any errors
  // console.log({
  //   works,
  //   isLoading,
  //   isError,
  // });

  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedWork, setSelectedWork] = useState(null);

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

  return (
    <PageContainer
      pageContext={
        <div className="flex flex-col gap-4">
          <div className="grid grid-cols-2 gap-4">
            {!isLoading &&
              works?.map((work) =>
                work.images
                  ?.filter((img) => img.selected)
                  .map((img) => (
                    <img
                      key={img._id}
                      src={urlFor(img.image).width(200).url()}
                      alt={img.caption || work.title}
                      className="w-full aspect-square object-contain cursor-pointer"
                      onClick={() => {
                        setSelectedImage(img);
                        setSelectedWork(work);
                      }}
                    />
                  ))
              )}
          </div>
        </div>
      }
    >
      {selectedImage && (
        <div className="flex flex-col gap-4 sticky top-8">
          <img
            src={urlFor(selectedImage.image).width(1200).url()}
            alt={selectedImage.caption || selectedWork.title}
            className="max-w-full max-h-[720px] object-contain object-center w-full"
          />
          <div>
            <div>
              {selectedWork.title}, {selectedWork.year}
            </div>
            {selectedImage.caption && <div>{selectedImage.caption}</div>}
          </div>
        </div>
      )}
    </PageContainer>
  );
}

export default Work;
