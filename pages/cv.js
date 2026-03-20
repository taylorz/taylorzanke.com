import PageContainer from "@/components/PageContainer";
import Text from "@/components/Text";
import Resume from "@/components/Resume";
import { getResume, getBiography } from "@/lib/sanity";

const CVPage = ({ resume, biography }) => {
  return (
    <PageContainer>
      <div className="px-8 grid grid-cols-5 gap-8 pb-32">
        <div className="col-start-1 col-span-5 flex flex-col gap-4">
          <Resume resume={resume} />
        </div>
      </div>
    </PageContainer>
  );
};

export default CVPage;

export async function getStaticProps() {
  const [resume, biography] = await Promise.all([getResume(), getBiography()]);

  return {
    props: {
      resume,
      biography,
    },
    // Revalidate every minute
    revalidate: 60,
  };
}
