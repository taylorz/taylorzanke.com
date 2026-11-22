import Layout from "@/components/Layout";
import Seo from "@/components/Seo";
import { PAGES } from "@/lib/site";
import { getResume } from "@/lib/sanity";

// Newest first; items without a year go last.
const byYearDesc = (a, b) => (b.year ?? "").localeCompare(a.year ?? "");

// Pull an exhibition's type out of its Studio group title, or from a
// "(two-person)" note in its label, which is then removed from the label.
function exhibitionItem(item, groupTitle) {
  const twoPerson = /\(two-person\)/i;
  let kind = /group/i.test(groupTitle) ? "group" : "solo";
  let label = item.label;
  if (label && twoPerson.test(label)) {
    kind = "two-person";
    label = label.replace(twoPerson, "").trim();
  }
  return { ...item, title: `${item.title} (${kind})`, label };
}

// Reshape the Studio's resume groups into the About page's sections, in
// display order. Groups are matched by title.
function resumeSections(groups = []) {
  const items = (match, map = (item) => item) =>
    groups
      .filter((g) => match.test(g.groupTitle ?? ""))
      .flatMap((g) => (g.items ?? []).map((item) => map(item, g.groupTitle)))
      .sort(byYearDesc);

  return [
    { title: "Exhibitions", items: items(/exhibition/i, exhibitionItem) },
    { title: "Publications", items: items(/^books$/i) },
    { title: "Awards", items: items(/^awards$/i) },
    { title: "Education", items: items(/^education$/i) },
  ].filter((section) => section.items.length > 0);
}

export default function About({ sections }) {
  return (
    <Layout>
      <Seo {...PAGES.about} />
      <div className="grid grid-cols-6 gap-x-6">
        <div className="col-span-6 md:col-span-3 flex flex-col gap-5">
          <p>
            Taylor Louie Zanke is a Canadian artist based in Los Angeles,
            California. Through a process of improvisation involving material,
            space, and form he attends to the charged possibilities present in a
            situation: working with the then and there to explore structures and
            narratives. Solo presentations of his work have appeared at PRP,
            Dallas (2026), and TRYST, Torrance Art Museum (2023, 2025).
          </p>
          <p>
            He publishes books made in collaboration with artists as{" "}
            <em>Allowing Many Forms</em>, and has exhibited at Printed Matter's
            Los Angeles Art Book Fair (2026), the San Francisco Art Book Fair
            (2024, 2026), and Acid-Free (2024), among others. He holds a B.F.A.
            from Parsons School of Design and earned an M.Arch and M.S. from
            Columbia University.
          </p>

          {/* <p className="mt-5">Artist Statement</p>
          <p>...</p> */}
        </div>
        {/* <div className="col-span-6 mt-8 flex flex-col gap-5">
          {sections.map((section) => (
            <div key={section.title}>
              <p className="mb-4">{section.title}</p>
              {section.items.map((item, i) => (
                <div key={i} className="flex gap-6">
                  <span className="shrink-0">{item.year}</span>
                  <span>
                    {[item.title, item.label].filter(Boolean).join(", ")}
                  </span>
                </div>
              ))}
            </div>
          ))}
        </div> */}
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const resume = await getResume();
  return {
    props: { sections: resumeSections(resume?.groups) },
    revalidate: 60,
  };
}
