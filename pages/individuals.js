import PageContainer from "@/components/PageContainer";
import Text from "@/components/Text";
import NewsletterSubscribe from "@/components/NewsletterSubscribe";
import { getIndividuals } from "@/lib/sanity";
import { urlFor } from "@/lib/sanity";

const Individuals = ({ individuals }) => {
  console.log("individuals", individuals);
  return (
    <PageContainer>
      <div className="flex flex-col gap-32 py-32">
        {individuals?.images?.map((image, i) => (
          <div key={i}>
            <img
              src={urlFor(image.image).width(3200).quality(80).url()}
              className="sm:max-w-[70vw] sm:max-h-[70vw] max-w-[95vw] max-h-[95vw] w-auto h-auto self-start"
            />
          </div>
        ))}
      </div>
    </PageContainer>
  );
};

export async function getStaticProps() {
  const individuals = await getIndividuals();

  return {
    props: {
      individuals: individuals ?? null,
    },
    revalidate: 60,
  };
}

export default Individuals;
