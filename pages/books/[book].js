import PageContainer from "@/components/PageContainer";
import WorkDetail from "@/components/WorkDetail";
import { getWorkItem, getBooks } from "@/lib/sanity";

const BookPage = ({ book }) => {
  return (
    <PageContainer>
      <WorkDetail work={book} />
    </PageContainer>
  );
};

export async function getStaticProps({ params }) {
  const book = await getWorkItem(params.book);

  return {
    props: {
      book,
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
