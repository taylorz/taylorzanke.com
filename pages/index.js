import WorkList from "@/components/WorkList";
import { getExhibitions } from "@/lib/sanity";

export default function Home({ works }) {
  return <WorkList items={works} basePath="/work" />;
}

export async function getStaticProps() {
  const exhibitions = await getExhibitions();

  const works = exhibitions.sort((a, b) => (b.year || 0) - (a.year || 0));

  return {
    props: {
      works,
    },
    revalidate: 60,
  };
}
