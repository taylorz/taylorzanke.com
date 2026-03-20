import PageContainer from "@/components/PageContainer";
import Text from "@/components/Text";
import Link from "next/link";

const AMFPage = () => {
  return (
    <PageContainer>
      <div className="px-8 grid grid-cols-5 gap-8">
        <div className="col-start-1 col-span-5 flex flex-col gap-4">
          <div className="w-fit">
            <Link
              href="https://www.allowingmanyforms.org"
              target="_blank"
              className="hover:underline w-fit"
            >
              <Text>www.allowingmanyforms.org</Text>
            </Link>
          </div>
        </div>
      </div>
    </PageContainer>
  );
};

export default AMFPage;
