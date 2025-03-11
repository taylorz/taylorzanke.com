import { useState, useEffect } from "react";
import { useWorkImages } from "@/lib/hooks";
import PageContainer from "@/components/PageContainer";
import { urlFor } from "@/lib/sanity";

export default function Home() {
  const { images, isLoading } = useWorkImages();
  const [selectedImage, setSelectedImage] = useState(null);

  // Function to get a random image, excluding the current one
  const getRandomImage = () => {
    if (!images || images.length === 0) return null;
    if (images.length === 1) return images[0];

    // Filter out the current image
    const availableImages = images.filter(
      (img) => img._id !== selectedImage?._id
    );
    const randomIndex = Math.floor(Math.random() * availableImages.length);
    return availableImages[randomIndex];
  };

  // Set initial random image on load
  useEffect(() => {
    if (images) {
      setSelectedImage(getRandomImage());
    }
  }, [images]);

  return (
    <PageContainer>
      <div className="mix-blend-difference text-white w-fit">
        Taylor Zanke is an artist based in Los Angeles. He is the founder of{" "}
        <a
          href="https://allowingmanyforms.org"
          target="_blank"
          className="underline"
        >
          Allowing Many Forms
        </a>
        . Contact him{" "}
        <a href="mailto:taylorzanke@gmail.com" className="underline">
          here
        </a>
        .
      </div>
      <div className="absolute top-0 right-0 bottom-0 left-0 overflow-hidden -z-10">
        {selectedImage && (
          <img
            src={urlFor(selectedImage.image).width(2600).url()}
            alt={selectedImage.title || "Taylor Zanke"}
            className="w-full h-full object-cover object-center"
          />
        )}
      </div>
    </PageContainer>
  );
}
