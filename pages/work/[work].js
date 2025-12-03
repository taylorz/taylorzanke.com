import { useState, useEffect } from "react";

import PageContainer from "@/components/PageContainer";
import MaxWidth from "@/components/MaxWidth";
import { getWork, urlFor } from "@/lib/sanity";
import { PortableText } from "@portabletext/react";
import { portableTextComponents } from "@/components/PortableTextComponents";
import LoadingImage from "@/components/LoadingImage";

const WorkPage = ({ work }) => {
  return (
    <PageContainer>
      <div className="pl-0 sm:pl-[182px]">
        <MaxWidth>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-4 items-start justify-start">
              <div>
                {/* title */}
                {work.title && (
                  <p>
                    <span className="italic">{work.title}</span>
                    {work.year && <span>, {work.year}</span>}
                  </p>
                )}
                {/* materials */}
                {work.materials && <p>{work.materials}</p>}
                {/* dimensions */}
                {work.customDimensions ? (
                  <p>{work.customDimensions}</p>
                ) : work.height && work.width ? (
                  <p>
                    {`${work.height} x ${work.width} ${
                      work.depth ? `x ${work.depth}` : ""
                    } inches`}
                  </p>
                ) : null}
              </div>

              <div className="flex flex-col gap-1 items-start justify-start">
                {/* Images */}
                {work.images?.map((image, index) => {
                  if (!image?.image) return null;
                  return (
                    <WorkImage
                      key={index}
                      image={image}
                      priority={index === 0}
                    />
                  );
                })}
              </div>
            </div>

            {work.file ||
            work.details ||
            (work.externLinkUrl && work.externalLinkLabel) ||
            work.description ? (
              <>
                <div className="flex flex-col gap-4 pb-4">
                  {work.file && work.file.file && (
                    <a
                      href={`https://cdn.sanity.io/files/${
                        process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
                      }/production/${work.file.file.asset._ref
                        .replace("file-", "")
                        .replace("-pdf", ".pdf")}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cursor-pointer"
                    >
                      {work.file.label}
                    </a>
                  )}

                  {(work.details ||
                    (work.externalLinkUrl && work.externalLinkLabel)) && (
                    <div>
                      {work.details && <p>{work.details}</p>}
                      {work.externalLinkUrl && work.externalLinkLabel && (
                        <p>
                          <a href={work.externalLinkUrl}>
                            {work.externalLinkLabel}
                          </a>
                        </p>
                      )}
                    </div>
                  )}

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
              </>
            ) : null}
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

const WorkImage = ({ image, priority }) => {
  const [isOpen, setIsOpen] = useState(false);
  // lock scrolling when isOpen is true
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);
  return (
    <div>
      {isOpen ? (
        <div
          onClick={() => setIsOpen(false)}
          className="cursor-pointer fixed inset-0 z-50 overflow-y-scroll"
        >
          <LoadingImage
            src={urlFor(image.image).width(3200).quality(80).url()}
            alt={image.caption || ""}
            className="w-full object-contain"
            priority={true}
          />
        </div>
      ) : null}
      <div onClick={() => setIsOpen(true)} className="cursor-pointer">
        <LoadingImage
          src={urlFor(image.image).width(1200).quality(80).url()}
          alt={image.caption || ""}
          className="max-h-[640px]"
          priority={priority}
        />
      </div>
    </div>
  );
};
