import Head from "next/head";
import PageContainer from "@/components/PageContainer";
import WorkDetail from "@/components/WorkDetail";
import { getWorkItem, getBooks, urlFor } from "@/lib/sanity";

const BookPage = ({ book, ogImage }) => {
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
      <WorkDetail work={book} />
    </PageContainer>
  );
};

export async function getStaticProps({ params }) {
  const book = await getWorkItem(params.book);

  const firstImage = book?.images?.[0]?.image;
  const ogImage = firstImage
    ? urlFor(firstImage).width(1200).quality(80).url()
    : null;

  return {
    props: {
      book,
      ogImage,
    },
    revalidate: 60,
  };
}

export async function getStaticPaths() {
  const books = await getBooks();

  const paths = books
    .filter((b) => b.slug)
    .map((b) => ({ params: { book: b.slug } }));

  return {
    paths,
    fallback: "blocking",
  };
}

export default BookPage;
