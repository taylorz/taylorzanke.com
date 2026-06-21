import WorkList from "@/components/WorkList";
import { getBooks } from "@/lib/sanity";

export default function Books({ books }) {
  return <WorkList items={books} basePath="/books" />;
}

export async function getStaticProps() {
  const books = (await getBooks()).sort(
    (a, b) => (b.year || 0) - (a.year || 0)
  );

  return {
    props: {
      books,
    },
    revalidate: 60,
  };
}
