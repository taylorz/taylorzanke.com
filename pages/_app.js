import "@/styles/globals.css";
import Link from "next/link";
import Text from "@/components/Text";
import { AnimatePresence, motion } from "motion/react";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function App({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = () => {
      // Wait for the fade transition to complete (0.1s) before scrolling
      setTimeout(() => {
        window.scrollTo(0, 0);
      }, 100);
    };

    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router]);

  return (
    <main>
      <div className="fixed inset-0 px-3 sm:px-16 pt-8 sm:pb-6 flex flex-col sm:justify-end pointer-events-none">
        <Link
          href={router.asPath === "/" ? "/information" : "/"}
          className="pointer-events-auto w-fit"
        >
          <Text link>{router.asPath === "/" ? "Taylor Zanke" : "Close"}</Text>
        </Link>
      </div>
      <AnimatePresence mode="wait">
        <motion.div
          key={router.asPath}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0 }}
        >
          <Component {...pageProps} />
        </motion.div>
      </AnimatePresence>
    </main>
  );
}
