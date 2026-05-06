import { useState } from "react";
import Link from "next/link";
import PageContainer from "@/components/PageContainer";
import Text from "@/components/Text";

import { getBooks } from "@/lib/sanity";

const Books = ({ books }) => {
  return (
    <PageContainer>
      <div className="px-8 grid grid-cols-5 gap-8">
        <div className="col-start-1 col-span-5">
          {books.map((book, i) => (
            <BookItem
              key={i}
              year={book.year}
              title={book.title}
              slug={book.slug}
              hasImages={Boolean(book.firstImage)}
            />
          ))}
        </div>
      </div>
    </PageContainer>
  );
};

export async function getStaticProps() {
  const books = await getBooks();

  return {
    props: {
      books,
    },
    revalidate: 60,
  };
}

export default Books;

const BookItem = ({ year, title, slug, hasImages }) => {
  const [isHovered, setIsHovered] = useState(false);

  if (!hasImages) {
    return (
      <div className="w-fit text-neutral-500">
        <div className="flex gap-4">
          <Text>{year}</Text>
          <Text>
            <span className="italic">{title}</span>
          </Text>
        </div>
      </div>
    );
  }

  return (
    <div
      className="w-fit"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link href={`books/${slug}`}>
        <div className="flex gap-4">
          <Text>{year}</Text>
          <Text className={isHovered && "underline"}>
            <span className="italic">{title}</span>
          </Text>
        </div>
      </Link>
    </div>
  );
};
