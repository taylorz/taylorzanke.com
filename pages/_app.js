import "@/styles/globals.css";
import { AnimatePresence, motion } from "motion/react";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function App({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = () => {
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
