import Link from "next/link";
import { usePortfolioImages } from "@/lib/hooks";
import PageContainer from "@/components/PageContainer";
import { urlFor } from "@/lib/sanity";

export default function Portfolio() {
  const { images, isLoading } = usePortfolioImages();

  if (isLoading) {
    return <PageContainer></PageContainer>;
  }

  return (
    <PageContainer>
      <div className="grid grid-cols-2 sm:grid-cols-7 gap-4 max-w-screen-xl">
        {images?.map((image) => (
          <Link key={image._id} href={`/portfolio/${image.slug}`}>
            <div className="cursor-pointer">
              <img
                src={urlFor(image.image).width(800).url()}
                alt={image.title || image.caption || ""}
                className="w-full aspect-square object-contain"
              />
            </div>
          </Link>
        ))}
      </div>
    </PageContainer>
  );
}
