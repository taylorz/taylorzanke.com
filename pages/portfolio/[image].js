import { useRouter } from "next/router";
import Link from "next/link";
import { usePortfolioImage } from "@/lib/hooks";
import PageContainer from "@/components/PageContainer";
import { urlFor } from "@/lib/sanity";
import { useEffect } from "react";

export default function PortfolioImage() {
  const router = useRouter();
  const { image } = router.query;
  const { image: portfolioImage, isLoading } = usePortfolioImage(image);

  // Handle escape key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        router.push("/portfolio");
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [router]);

  if (isLoading) {
    return (
      <PageContainer>
        <div></div>
      </PageContainer>
    );
  }

  if (!portfolioImage) {
    return (
      <PageContainer>
        <div>Image not found</div>
      </PageContainer>
    );
  }

  return (
    <PageContainer>
      <Link href="/portfolio">
        <div className="absolute inset-0 p-4">
          <img
            src={urlFor(portfolioImage.image).width(2400).url()}
            alt={portfolioImage.title || portfolioImage.caption || ""}
            className="w-full h-full object-contain"
          />
        </div>
      </Link>
    </PageContainer>
  );
}
