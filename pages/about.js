import Layout from "@/components/Layout";
import Seo from "@/components/Seo";
import { PAGES } from "@/lib/site";

export default function About() {
  return (
    <Layout>
      <Seo {...PAGES.about} />
      <div className="grid grid-cols-6 gap-x-6">
        <div className="col-span-6 md:col-span-3 flex flex-col gap-5">
          <p>
            Taylor Louie Zanke is a Canadian artist based in Los Angeles,
            California. Through a process of improvisation involving material,
            space, and form he attends to the charged possibilities present in a
            given situation, working with the then and there toward structures
            and narratives. Solo presentations of his work have appeared at PRP,
            Dallas (2026), and TRYST, Torrance Art Museum (2023, 2025). He holds
            a B.F.A. from Parsons School of Design and earned an M.Arch and M.S.
            from Columbia University.
          </p>
          {/* <p className="mt-5">Artist Statement</p>
          <p>...</p> */}
        </div>
      </div>
    </Layout>
  );
}
