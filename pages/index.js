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
      <div></div>
    </PageContainer>
  );
}
