import { useState } from "react";
import { useWorks } from "@/lib/hooks";
import PageContainer from "@/components/PageContainer";

function Work() {
  const { works, isLoading, isError } = useWorks();

  // Log the data, loading state, and any errors
  console.log({
    works,
    isLoading,
    isError,
  });

  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedWork, setSelectedWork] = useState(null);

  return (
    <PageContainer
      pageContext={
        <div className="flex flex-col gap-4">
          <div className="grid grid-cols-2 gap-4">
            {!isLoading &&
              works.map((w, i) =>
                w.images.map((img, i) => (
                  <img
                    key={i}
                    src={img.image.asset.url}
                    className="w-full aspect-square object-contain cursor-pointer"
                    onClick={() => {
                      setSelectedImage(img);
                      setSelectedWork(w);
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
            src={selectedImage.image.asset.url}
            className="max-w-full max-h-[720px] object-contain object-center w-full"
          />

          <div>
            <div>
              {selectedWork.title}, {selectedWork.year}
            </div>
          </div>
        </div>
      )}
    </PageContainer>
  );
}

export default Work;
