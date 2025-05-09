import "@/styles/globals.css";
import Nav from "@/components/Nav";
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
      <Nav />
      <AnimatePresence mode="wait">
        <motion.div
          key={router.asPath}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.1 }}
        >
          <Component {...pageProps} />
        </motion.div>
      </AnimatePresence>
    </main>
  );
}
