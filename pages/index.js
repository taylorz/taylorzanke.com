import { useState } from "react";
import Link from "next/link";
import PageContainer from "@/components/PageContainer";
import Text from "@/components/Text";
import { getBooks, getExhibitions } from "@/lib/sanity";

export default function Home({ works }) {
  return (
    <PageContainer>
      <div className="px-8 grid grid-cols-5 gap-8 pt-32">
        <div className="col-start-1 col-span-5">
          {works.map((work, i) => (
            <WorkItem key={i} work={work} />
          ))}
        </div>
      </div>
    </PageContainer>
  );
}

const WorkItem = ({ work }) => {
  const [isHovered, setIsHovered] = useState(false);

  const label = (
    <>
      <span className="italic">{work.title}</span>
      {work.venue && `, ${work.venue}`}
      {work.location && `, ${work.location}`}
    </>
  );

  if (!work.firstImage) {
    return (
      <div className="w-fit text-neutral-500">
        <div className="flex gap-4">
          <Text>{label}</Text>
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
      <Link href={`/work/${work.slug}`}>
        <div className="flex gap-4">
          <Text className={isHovered && "underline"}>{label}</Text>
        </div>
      </Link>
    </div>
  );
};

export async function getStaticProps() {
  const [books, exhibitions] = await Promise.all([
    getBooks(),
    getExhibitions(),
  ]);

  const works = [...books, ...exhibitions].sort(
    (a, b) => (b.year || 0) - (a.year || 0)
  );

  return {
    props: {
      works,
    },
    revalidate: 60,
  };
}
