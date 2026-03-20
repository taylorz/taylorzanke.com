import { useState } from "react";
import Link from "next/link";
import PageContainer from "@/components/PageContainer";
import Text from "@/components/Text";

import { getExhibitions } from "@/lib/sanity";

const Work = ({ exhibitions }) => {
  return (
    <PageContainer>
      <div className="px-8 grid grid-cols-5 gap-8">
        <div className="col-start-1 col-span-5">
          {exhibitions.map((exhibition, i) => (
            <InstallationItem
              key={i}
              year={exhibition.year}
              title={exhibition.title}
              venue={exhibition.venue}
              location={exhibition.location}
              slug={exhibition.slug}
            />
          ))}
        </div>
      </div>
    </PageContainer>
  );
};

export async function getStaticProps() {
  const exhibitions = await getExhibitions();

  return {
    props: {
      exhibitions,
    },
    revalidate: 60,
  };
}

export default Work;

const InstallationItem = ({ year, title, venue, location, slug }) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      className="w-fit"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link href={`installations/${slug}`}>
        <div className="flex gap-4">
          <Text>{year}</Text>
          <Text className={isHovered && "underline"}>
            <span className="italic">{title}</span>, {venue}, {location}
          </Text>
        </div>
      </Link>
    </div>
  );
};
