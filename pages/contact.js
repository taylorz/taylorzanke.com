import Link from "next/link";
import PageContainer from "@/components/PageContainer";
import Text from "@/components/Text";
import NewsletterSubscribe from "@/components/NewsletterSubscribe";

const Information = () => {
  return (
    <PageContainer>
      <div className="px-8 grid grid-cols-5 gap-8">
        <div className="col-start-1 col-span-5 flex flex-col gap-4">
          <div>
            <Text>Location: Los Angeles, California</Text>
            <Text>
              Email:{" "}
              <a
                href="mailto:taylor.zanke@gmail.com"
                className="hover:underline"
              >
                taylor.zanke@gmail.com
              </a>
            </Text>
            <Text>
              Online:{" "}
              <Link
                href="https://www.taylorzanke.com"
                target="_blank"
                className="hover:underline"
              >
                www.taylorzanke.com
              </Link>
              ,{" "}
              <Link
                href="https://www.allowingmanyforms.org"
                target="_blank"
                className="hover:underline"
              >
                www.allowingmanyforms.org
              </Link>
            </Text>
            <div className="flex">
              <Text>Newsletter:</Text> <NewsletterSubscribe />
            </div>
          </div>
        </div>
      </div>
    </PageContainer>
  );
};

export default Information;
