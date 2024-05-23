import { motion, AnimatePresence } from "framer-motion";
import "@/styles/globals.css";

import Nav from "@/components/Nav";

export default function App({ Component, pageProps }) {
  return (
    <main className="font-serif text-sm">
      <div className="flex min-h-[calc(100dvh)] p-4 gap-3">
        {/* <Nav /> */}
        <AnimatePresence mode="wait">
          <motion.div
            className="flex flex-1"
            key={Component}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0 }}
          >
            <Component {...pageProps} />
          </motion.div>
        </AnimatePresence>
      </div>
    </main>
  );
}
