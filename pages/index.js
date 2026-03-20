import PageContainer from "@/components/PageContainer";
import { getExhibitions, urlFor } from "@/lib/sanity";

export default function Home({ exhibitions }) {
  return (
    <PageContainer>
      <div className="flex flex-col gap-32 py-32">
        {exhibitions[0]?.firstImage && (
          <div className="flex flex-col gap-1">
            <img
              src={urlFor(exhibitions[0].firstImage)
                .width(3200)
                .quality(80)
                .url()}
              alt="Taylor Zanke"
              className="sm:max-w-[70vw] sm:max-h-[70vw] max-w-[95vw] max-h-[95vw] w-auto h-auto self-start"
            />
            {(exhibitions[0].firstImageCaptionTitle ||
              exhibitions[0].firstImageCaptionLabel) && (
              <div className="px-8 text-[10px] leading-[12px]">
                {exhibitions[0].firstImageCaptionTitle && (
                  <span className="italic">
                    {exhibitions[0].firstImageCaptionTitle}
                  </span>
                )}
                {exhibitions[0].firstImageCaptionTitle &&
                  exhibitions[0].firstImageCaptionLabel &&
                  ", "}
                {exhibitions[0].firstImageCaptionLabel && (
                  <span>{exhibitions[0].firstImageCaptionLabel}</span>
                )}
              </div>
            )}
          </div>
        )}
      </div>
    </PageContainer>
  );
}

export async function getStaticProps() {
  const exhibitions = await getExhibitions();

  return {
    props: {
      exhibitions,
    },
    revalidate: 60,
  };
}
