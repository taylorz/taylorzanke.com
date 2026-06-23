import Link from "next/link";
import { PortableText } from "@portabletext/react";
import PageContainer from "@/components/PageContainer";
import Text from "@/components/Text";
import NewsletterSubscribe from "@/components/NewsletterSubscribe";
import { portableTextComponents } from "@/components/PortableTextComponents";
import { getContact } from "@/lib/sanity";

const withScheme = (url) =>
  /^https?:\/\//i.test(url) ? url : `https://${url}`;
const stripScheme = (url) =>
  url.replace(/^https?:\/\//i, "").replace(/\/$/, "");

// Biography links use the site's plain underline style (not the default blue).
const bioComponents = {
  ...portableTextComponents,
  marks: {
    ...portableTextComponents.marks,
    link: ({ value, children }) => {
      const href = value?.href || "";
      const target = href.startsWith("http") ? "_blank" : undefined;
      return (
        <a
          href={href}
          target={target}
          rel={target === "_blank" ? "noopener noreferrer" : undefined}
          className="hover:underline"
        >
          {children}
        </a>
      );
    },
  },
};

const Information = ({ contact }) => {
  return (
    <PageContainer>
      <div className="px-6 sm:px-8 grid grid-cols-5 gap-8">
        <div className="col-start-1 col-span-5 flex flex-col gap-4">
          {contact?.biography && (
            <PortableText
              value={contact.biography}
              components={bioComponents}
            />
          )}

          <div>
            {contact?.location && (
              <Text className="pl-4 [text-indent:-16px]">
                Location: {contact.location}
              </Text>
            )}

            {contact?.email && (
              <Text className="pl-4 [text-indent:-16px] break-words">
                Email:{" "}
                <a href={`mailto:${contact.email}`} className="hover:underline">
                  {contact.email}
                </a>
              </Text>
            )}

            {contact?.online?.length > 0 && (
              <Text className="pl-4 [text-indent:-16px] break-words">
                Online:{" "}
                {contact.online.map((url, i) => (
                  <span key={i}>
                    {i > 0 && ", "}
                    <Link
                      href={withScheme(url)}
                      target="_blank"
                      className="hover:underline"
                    >
                      {stripScheme(url)}
                    </Link>
                  </span>
                ))}
              </Text>
            )}

            {contact?.documents?.length > 0 && (
              <Text className="pl-4 [text-indent:-16px] break-words">
                Documents:{" "}
                {contact.documents.map((doc, i) => (
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

            <div className="flex">
              <Text className="shrink-0">Newsletter:</Text>
              <NewsletterSubscribe />
            </div>
          </div>
        </div>
      </div>
    </PageContainer>
  );
};

export async function getStaticProps() {
  const contact = await getContact();

  return {
    props: {
      contact: contact || null,
    },
    revalidate: 60,
  };
}

export default Information;
