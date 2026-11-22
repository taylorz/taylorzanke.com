import Layout from "@/components/Layout";
import Seo from "@/components/Seo";
import { PAGES } from "@/lib/site";

export default function Contact() {
  return (
    <Layout>
      <Seo {...PAGES.contact} />
      <div className="grid grid-cols-6 gap-x-6">
        <div className="col-span-6 md:col-span-3 flex flex-col gap-5">
          <div>
            <div>
              Email:{" "}
              <a href="mailto:info@taylorlouiezanke.com">
                info@taylorlouiezanke.com
              </a>
            </div>
            <div>
              Instagram:{" "}
              <a
                href="https://www.instagram.com/taylorlouiezanke/"
                target="_blank"
                rel="noopener noreferrer"
              >
                @taylorlouiezanke
              </a>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
