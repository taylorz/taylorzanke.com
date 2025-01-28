import "@/styles/globals.css";
import Nav from "@/components/Nav";
export default function App({ Component, pageProps }) {
  return (
    <main className="flex flex-row p-4">
      <Nav />
      <Component {...pageProps} />
    </main>
  );
}
