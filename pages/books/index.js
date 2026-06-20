import PageContainer from "@/components/PageContainer";
import WorkItem from "@/components/WorkItem";
import { getBooks } from "@/lib/sanity";

export default function Books({ books }) {
  return (
    <PageContainer>
      <div className="px-8 grid grid-cols-5 gap-8">
        <div className="col-start-1 col-span-5">
          {books.map((book, i) => (
            <WorkItem key={i} work={book} basePath="/books" />
          ))}
        </div>
      </div>
    </PageContainer>
  );
}

export async function getStaticProps() {
  const books = (await getBooks()).sort((a, b) => (b.year || 0) - (a.year || 0));

  return {
    props: {
      books,
    },
    revalidate: 60,
  };
}
