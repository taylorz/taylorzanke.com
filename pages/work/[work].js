import PageContainer from "@/components/PageContainer";
import MaxWidth from "@/components/MaxWidth";

const WorkPage = () => {
  return (
    <PageContainer>
      <div className="pt-10 pl-[224px]">
        <MaxWidth>
          <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-5">
              <div>
                <h1 className="italic">Untitled (Ongoing)</h1>
                <p>Dimensions variable</p>
                <p>Mixed media</p>
                <p>2023 — Present</p>
              </div>
              <p>
                This book contains photography and drawings engaging with the
                material of my ongoing untitled project — inside and outside the
                studio. It is constructed out of seven different found and saved
                papers, collected and brought to my studio. The content of the
                book was chosen or created in direct dialog with the qualities
                of the found paper.{" "}
              </p>
            </div>
            <div className="flex flex-col gap-3 px-5">
              {/* NOTE to self: book images just should be exported as same dims/size */}
              <img
                src="/1.png"
                className="max-h-[560px] object-contain object-center"
              />
              <img
                src="/3.png"
                className="max-h-[560px] object-contain object-center"
              />
              <img
                src="/2.png"
                className="max-h-[560px] object-contain object-center"
              />
              <img
                src="/4.jpg"
                className="max-h-[560px] object-contain object-center"
              />
              <img
                src="/5.jpg"
                className="max-h-[560px] object-contain object-center"
              />
              <img
                src="/6.jpg"
                className="max-h-[560px] object-contain object-center"
              />
              <img
                src="/7.jpg"
                className="max-h-[560px] object-contain object-center"
              />
              <img
                src="/8.png"
                className="max-h-[560px] object-contain object-center"
              />
            </div>
          </div>
        </MaxWidth>
      </div>
    </PageContainer>
  );
};

export default WorkPage;
