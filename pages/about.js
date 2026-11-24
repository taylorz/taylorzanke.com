import Layout from "@/components/Layout";
import Seo from "@/components/Seo";
import { PAGES } from "@/lib/site";
import { PortableText } from "@portabletext/react";
import { getAbout, getResume } from "@/lib/sanity";

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

// Each biography paragraph is a plain <p>, spaced by the column's gap.
const biographyComponents = {
  block: { normal: ({ children }) => <p>{children}</p> },
};

export default function About({ biography, sections }) {
  return (
    <Layout>
      <Seo {...PAGES.about} />
      <div className="grid grid-cols-6 gap-x-6">
        <div className="col-span-6 md:col-span-3 flex flex-col gap-5">
          {biography && (
            <PortableText value={biography} components={biographyComponents} />
          )}

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
  const [about, resume] = await Promise.all([getAbout(), getResume()]);
  return {
    props: {
      biography: about?.biography ?? null,
      sections: resumeSections(resume?.groups),
    },
    revalidate: 60,
  };
}
