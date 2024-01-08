import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <main className="font-serif text-sm">
      <Component {...pageProps} />
    </main>
  );
}
