import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="text-stone-100 bg-stone-950 selection:bg-stone-700 font-serif text-sm">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
