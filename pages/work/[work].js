import PageContainer from "@/components/PageContainer";
import MaxWidth from "@/components/MaxWidth";
import { getWork, urlFor } from "@/lib/sanity";
import { PortableText } from "@portabletext/react";
import { portableTextComponents } from "@/components/PortableTextComponents";
import LoadingImage from "@/components/LoadingImage";

const WorkPage = ({ work }) => {
  return (
    <PageContainer>
      <div className="pt-10 pl-0 sm:pl-[224px]">
        <MaxWidth>
          <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-5">
              <div>
                {/* title */}
                {work.title && <h1 className="italic">{work.title}</h1>}
                {/* dimensions */}
                {work.dimensions && <p>{work.dimensions}</p>}
                {/* materials */}
                {work.materials && <p>{work.materials}</p>}
                {/* year */}
                {work.year && <p>{work.year}</p>}
              </div>
              {work.details && <p>{work.details}</p>}
              {work.externalLink && <p>{work.externalLink}</p>}
              {/* description */}
              {work.description && (
                <div className="prose">
                  <PortableText
                    value={work.description}
                    components={portableTextComponents}
                  />
                </div>
              )}
            </div>
            <div className="flex flex-col gap-3 px-5">
              {/* Images */}
              {work.images?.map((image, index) => {
                if (!image?.image) return null;
                return (
                  <LoadingImage
                    key={index}
                    src={urlFor(image.image).width(1200).quality(80).url()}
                    alt={image.caption || ""}
                    className="max-h-[560px]"
                    priority={index === 0}
                    objectPosition="center"
                  />
                );
              })}
            </div>
          </div>
        </MaxWidth>
      </div>
    </PageContainer>
  );
};

export async function getStaticProps({ params }) {
  const work = await getWork(params.work);

  return {
    props: {
      work,
    },
    // Revalidate every minute
    revalidate: 60,
  };
}

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: "blocking",
  };
}

export default WorkPage;
