import Head from "next/head";
import PageContainer from "@/components/PageContainer";
import WorkDetail from "@/components/WorkDetail";
import { getWorkItem, getExhibitions, urlFor } from "@/lib/sanity";

const WorkPage = ({ work, ogImage }) => {
  return (
    <PageContainer>
      {ogImage && (
        <Head>
          <meta key="og:image" property="og:image" content={ogImage} />
          <meta key="twitter:image" name="twitter:image" content={ogImage} />
          <meta
            key="twitter:card"
            name="twitter:card"
            content="summary_large_image"
          />
        </Head>
      )}
      <WorkDetail work={work} />
    </PageContainer>
  );
};

export async function getStaticProps({ params }) {
  const work = await getWorkItem(params.work);

  const firstImage = work?.images?.[0]?.image;
  const ogImage = firstImage
    ? urlFor(firstImage).width(1200).quality(80).url()
    : null;

  return {
    props: {
      work,
      ogImage,
    },
    revalidate: 60,
  };
}

export async function getStaticPaths() {
  const exhibitions = await getExhibitions();

  const paths = exhibitions
    .filter((w) => w.slug)
    .map((w) => ({ params: { work: w.slug } }));

  return {
    paths,
    fallback: "blocking",
  };
}

export default WorkPage;
