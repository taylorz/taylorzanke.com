import Layout from "@/components/Layout";
import Seo from "@/components/Seo";
import { PAGES } from "@/lib/site";
import { PortableText } from "@portabletext/react";
import { getAbout } from "@/lib/sanity";

// Each biography paragraph is a plain <p>, spaced by the column's gap.
const biographyComponents = {
  block: { normal: ({ children }) => <p>{children}</p> },
};

export default function About({ biography }) {
  return (
    <Layout>
      <Seo {...PAGES.about} />
      <div className="grid grid-cols-6 gap-x-6">
        <div className="col-span-6 md:col-span-3 flex flex-col gap-5">
          {biography && (
            <PortableText value={biography} components={biographyComponents} />
          )}
        </div>
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const about = await getAbout();
  return {
    props: { biography: about?.biography ?? null },
    revalidate: 60,
  };
}
