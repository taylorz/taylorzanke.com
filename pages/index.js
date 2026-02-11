import PageContainer from "@/components/PageContainer";
import Text from "@/components/Text";
import { getWorkImages, urlFor } from "@/lib/sanity";

export default function Home({ workImages }) {
  console.log(workImages);
  return (
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
                    className="sm:max-w-[60vw] sm:max-h-[60vw] max-w-[90vw] max-h-[90vw] w-auto h-auto self-start"
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
