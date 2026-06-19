import Link from "next/link";
import PageContainer from "@/components/PageContainer";
import { getWorkItem, getBooks, getExhibitions, urlFor } from "@/lib/sanity";
import { PortableText } from "@portabletext/react";
import { portableTextComponents } from "@/components/PortableTextComponents";
import Text from "@/components/Text";

const WorkPage = ({ work }) => {
  return (
    <PageContainer>
      <div className="flex flex-col gap-32 py-32">
        {work.images?.map((image, i) => (
          <div key={i} className="flex flex-col gap-1">
            <img
              src={urlFor(image.image).width(3200).quality(80).url()}
              className="sm:max-w-[70vw] sm:max-h-[70vw] max-w-[95vw] max-h-[95vw] w-auto h-auto self-start"
            />
            {(image.captionTitle || image.captionLabel) && (
              <div className="px-8 text-[10px] leading-[12px]">
                {image.captionTitle && (
                  <span className="italic">{image.captionTitle}</span>
                )}
                {image.captionTitle && image.captionLabel && ", "}
                {image.captionLabel && <span>{image.captionLabel}</span>}
              </div>
            )}
          </div>
        ))}
        <div className="p-8 flex flex-col gap-4">
          <div>
            <Text className="italic">{work.title}</Text>
            {work.datesOpen ? (
              <Text>{work.datesOpen}</Text>
            ) : (
              work.year && <Text>{work.year}</Text>
            )}
          </div>

          {work.note && (
            <div>
              <PortableText
                value={work.note}
                components={portableTextComponents}
              />
            </div>
          )}
          {(work.files?.length > 0 || work.file?.file || work.link?.url) && (
            <div>
              {work.files?.map(
                (f, i) =>
                  f.file?.asset && (
                    <Text key={i}>
                      <a
                        href={`https://cdn.sanity.io/files/${
                          process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
                        }/production/${f.file.asset._ref
                          .replace("file-", "")
                          .replace(/-(\w+)$/, ".$1")}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline"
                      >
                        {f.label}
                      </a>
                    </Text>
                  )
              )}
              {work.file?.file && (
                <Text>
                  <a
                    href={`https://cdn.sanity.io/files/${
                      process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
                    }/production/${work.file.file.asset._ref
                      .replace("file-", "")
                      .replace(/-(\w+)$/, ".$1")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    {work.file.label}
                  </a>
                </Text>
              )}
              {work.link?.url && (
                <Text>
                  <Link
                    href={work.link.url}
                    target="_blank"
                    className="hover:underline"
                  >
                    {work.link.label}
                  </Link>
                </Text>
              )}
            </div>
          )}
        </div>
      </div>
    </PageContainer>
  );
};

export async function getStaticProps({ params }) {
  const work = await getWorkItem(params.work);

  return {
    props: {
      work,
    },
    revalidate: 60,
  };
}

export async function getStaticPaths() {
  const [books, exhibitions] = await Promise.all([
    getBooks(),
    getExhibitions(),
  ]);

  const paths = [...books, ...exhibitions]
    .filter((w) => w.slug)
    .map((w) => ({ params: { work: w.slug } }));

  return {
    paths,
    fallback: "blocking",
  };
}

export default WorkPage;
