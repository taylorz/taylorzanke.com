import { urlFor } from "@/lib/sanity";
import { PortableText } from "@portabletext/react";
import { portableTextComponents } from "@/components/PortableTextComponents";
import Text from "@/components/Text";

const withScheme = (url) =>
  /^https?:\/\//i.test(url) ? url : `https://${url}`;
const stripScheme = (url) =>
  url.replace(/^https?:\/\//i, "").replace(/\/$/, "");

// Render note blocks inline so "Note:" + the text flow as a single
// hanging-indent line, matching the other fields.
const inlineNoteComponents = {
  ...portableTextComponents,
  block: {
    ...portableTextComponents.block,
    normal: ({ children }) => <>{children}</>,
  },
};

const WorkDetail = ({ work }) => {
  return (
    <div className="flex flex-col gap-32 pb-32">
      <div className="px-6 sm:px-8 flex flex-col gap-4">
        <div>
          <Text className="italic">{work.title}</Text>
          {work.datesOpen ? (
            <Text>{work.datesOpen}</Text>
          ) : (
            work.year && <Text>{work.year}</Text>
          )}
        </div>

        <div>
          {work.attributes?.map((attr, i) => (
            <Text key={i} className="pl-4 [text-indent:-16px]">
              {attr.label}: {attr.value}
            </Text>
          ))}

          {work.location && (
            <Text className="pl-4 [text-indent:-16px]">
              Location: {work.location}
            </Text>
          )}

          {work.documents?.length > 0 && (
            <Text className="pl-4 [text-indent:-16px] break-words">
              Documents:{" "}
              {work.documents.map((doc, i) => (
                <span key={i}>
                  {i > 0 && ", "}
                  <a
                    href={doc.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    {doc.name}
                  </a>
                </span>
              ))}
            </Text>
          )}

          {work.online?.length > 0 && (
            <Text className="pl-4 [text-indent:-16px] break-words">
              Online:{" "}
              {work.online.map((url, i) => (
                <span key={i}>
                  {i > 0 && ", "}
                  <a
                    href={withScheme(url)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    {stripScheme(url)}
                  </a>
                </span>
              ))}
            </Text>
          )}

          {work.note && (
            <Text className="pl-4 [text-indent:-16px]">
              Note:{" "}
              <PortableText
                value={work.note}
                components={inlineNoteComponents}
              />
            </Text>
          )}
        </div>
      </div>
      {work.images?.map((image, i) => (
        <div key={i} className="flex flex-col gap-1">
          <img
            src={urlFor(image.image).width(3200).quality(80).url()}
            className="sm:max-w-[75vw] sm:max-h-[75vw] max-w-[calc(100vw-24px)] max-h-[calc(100vw-24px)] w-auto h-auto self-start"
          />
          {(image.captionTitle || image.captionLabel) && (
            <div className="px-6 sm:px-8">
              <Text>
                {image.captionTitle && (
                  <span className="italic">{image.captionTitle}</span>
                )}
                {image.captionTitle && image.captionLabel && ", "}
                {image.captionLabel && <span>{image.captionLabel}</span>}
              </Text>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default WorkDetail;
