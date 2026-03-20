import Head from "next/head";
import Link from "next/link";
import Text from "@/components/Text";

const PageContainer = ({ children, ogImage }) => {
  return (
    <div className="w-full">
      <Head>
        <meta name="description" content="Taylor Zanke" />
        <meta property="og:description" content="Taylor Zanke" />
        {ogImage && <meta property="og:image" content={ogImage} />}
        {ogImage && <meta name="twitter:image" content={ogImage} />}
        {ogImage && <meta name="twitter:card" content="summary_large_image" />}
      </Head>
      <div className="px-8 py-4 grid grid-cols-2 sm:grid-cols-5 gap-8  pointer-events-none">
        <div className="flex flex-col gap-4 col-start-1 pointer-events-auto">
          <div className="flex flex-col gap-4">
            <Link href="/" className="hover:underline">
              <Text>TAYLOR ZANKE</Text>
            </Link>
            <div>
              <Link href="/cv" className="hover:underline">
                <Text>cv</Text>
              </Link>
              <Link href="/amf" className="hover:underline">
                <Text>amf</Text>
              </Link>
              <Link href="/contact" className="hover:underline">
                <Text>contact</Text>
              </Link>
              <Link href="/individuals" className="hover:underline">
                <Text>individual</Text>
              </Link>
              <Link href="/installations" className="hover:underline">
                <Text>installations</Text>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {children}
    </div>
  );
};

export default PageContainer;
