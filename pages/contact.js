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
            <Text>Los Angeles, California, United States</Text>
          </div>
          <div>
            <a href="mailto:taylor.zanke@gmail.com" className="hover:underline">
              <Text>taylor.zanke@gmail.com</Text>
            </a>
            <Link
              href="https://www.taylorzanke.com"
              target="_blank"
              className="hover:underline"
            >
              <Text>www.taylorzanke.com</Text>
            </Link>
          </div>
          <div>
            <Text>Newsletter</Text>
            <NewsletterSubscribe />
          </div>
        </div>
      </div>
    </PageContainer>
  );
};

export default Information;
