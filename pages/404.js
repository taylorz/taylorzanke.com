import { useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";

// Any missing URL (including a work slug not found in Sanity) goes to the
// homepage. The redirect happens in the browser, so the server still answers
// with a 404 status and dead URLs drop out of search indexes.
export default function NotFound() {
  const router = useRouter();
  useEffect(() => {
    router.replace("/");
  }, [router]);
  return (
    <Head>
      <meta name="robots" content="noindex" />
    </Head>
  );
}
