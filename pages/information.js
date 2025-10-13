import PageContainer from "@/components/PageContainer";
import NewsletterSubscribe from "@/components/NewsletterSubscribe";
import MaxWidth from "@/components/MaxWidth";

const Information = () => {
  return (
    <PageContainer>
      <div className="pt-10 pl-0 sm:pl-[116px]">
        <MaxWidth>
          <div className="flex flex-col gap-2">
            <ul>
              <li className="italic">Download</li>
              <li>
                <a href="/downloads/taylor-zanke-cv-2025.pdf" target="_blank">
                  Curriculum Vitae
                </a>
              </li>
              <li>
                <a
                  href="/downloads/taylor-zanke-statement-2025.pdf"
                  target="_blank"
                >
                  Statement
                </a>
              </li>
            </ul>
            <ul>
              <li className="italic">Projects</li>
              <li>
                <a href="https://allowingmanyforms.org" target="_blank">
                  Allowing Many Forms
                </a>
              </li>
            </ul>
            <ul>
              <li className="italic">Publications</li>
              <li>
                <a
                  href="https://www.allowingmanyforms.org/books/the-source-can-be-transformed"
                  target="_blank"
                >
                  The Source Can Be Transformed, 2025
                </a>
              </li>
            </ul>
            <ul>
              <li className="italic">Contact</li>
              <li>
                <a href="mailto:taylor@allowingmanyforms.org">
                  taylor@allowingmanyforms.org
                </a>
              </li>
            </ul>
            <ul>
              <li>Third Floor, Studio 5</li>
              <li>1500 S Los Angeles Street</li>
              <li>Los Angeles, California 90015</li>
              <li>United States</li>
            </ul>
            <div className="flex flex-col">
              <h1 className="italic">Newsletter</h1>
              <NewsletterSubscribe />
            </div>
          </div>
        </MaxWidth>
      </div>
    </PageContainer>
  );
};

export default Information;
