import PageContainer from "../components/PageContainer";

export default function Information() {
  return (
    <PageContainer>
      <div className="w-full flex justify-between">
        <div className="flex flex-col gap-9">
          <ul>
            <li className="font-bold">Contact</li>
            <li>Studio in Los Angeles, CA</li>
            <li>
              <a
                href="mailto:taylor@allowingmanyforms.org"
                className="hover:underline"
              >
                taylor@allowingmanyforms.org
              </a>
            </li>
          </ul>
          <ul>
            <li className="font-bold">Download</li>
            <li>
              <a
                href="https://drive.google.com/file/d/1UBfNArsFXkiHAKruIko8Fdk5uJW-E-Ci/view?usp=sharing"
                target="_blank"
                className="hover:underline"
              >
                Biography
              </a>
            </li>
            <li>
              <a
                href="https://drive.google.com/file/d/1fppsVgapcWSHKLQARy5ZsfH4UvGgO0ma/view?usp=sharing"
                target="_blank"
                className="hover:underline"
              >
                CV
              </a>
            </li>
          </ul>
          <ul>
            <li className="font-bold">Books</li>
            <li>
              <a
                href="https://www.allowingmanyforms.org/"
                className="hover:underline"
              >
                allowingmanyforms.org
              </a>
            </li>
          </ul>
          <p>Last updated January 13, 2025</p>
        </div>
        <div>
          <a href="/" className="hover:underline">
            Close
          </a>
        </div>
      </div>
    </PageContainer>
  );
}
