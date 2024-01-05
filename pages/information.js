import Link from "next/link";
import PageSection from "@/components/PageSection";
import NewsletterSubscribe from "@/components/NewsletterSubscribe";

export default function Information() {
  return (
    <PageSection className="md:grid md:grid-cols-2 gap-3 max-w-screen-2xl">
      <div>
        <p className="mb-5">
          <Link href="/">Taylor Zanke</Link> (1992, Canada) is an artist who
          uses material from everyday life to explore space and presence. He is
          the founder of{" "}
          <Link href="https://allowingmanyforms.org/">Allowing Many Forms</Link>
          , a publisher of artist's books.
        </p>
        <div className="mb-5">
          <p>Education</p>
          <ul>
            <li className="flex gap-3">
              <span className="w-10">2018</span>
              <span>MArch Columbia University, New York, New York</span>
            </li>
            <li className="flex gap-3">
              <span className="w-10">2018</span>
              <span>MS Columbia University, New York, New York</span>
            </li>
            <li className="flex gap-3">
              <span className="w-10">2014</span>
              <span>
                BFA. Parsons the New School for Design, New York, New York
              </span>
            </li>
          </ul>
        </div>
        <div className="mb-5">
          <p>Group Exhibitions</p>
          <ul>
            <li className="flex gap-3">
              <span className="w-10">2023</span>
              <span>
                <em>Leaf Thru, Pore Over</em>. RUTH Gallery, Los Angeles,
                California
              </span>
            </li>
            <li className="flex gap-3">
              <span className="w-10">2023</span>
              <span>
                <em>I Know Some Things Form Without You</em>. TRYST (Torrance
                Art Museum) with RUTH Gallery, Torrance, California
              </span>
            </li>
          </ul>
        </div>
        <div>
          <p>Releases & Publications</p>
          <ul>
            <li className="flex gap-3">
              <span className="w-10">2024</span>
              <span>
                Taylor Zanke. <em>Forthcoming</em>, Allowing Many Forms
              </span>
            </li>
            <li className="flex gap-3">
              <span className="w-10">2024</span>
              <span>
                Taylor Zanke, Alicia Cheatham. <em>Forthcoming</em>, Allowing
                Many Forms
              </span>
            </li>
            <li className="flex gap-3">
              <span className="w-10">2023</span>
              <span>
                Taylor Zanke, Cody Miner. <em>The Halves and Half Nots</em>,
                Allowing Many Forms
              </span>
            </li>
            <li className="flex gap-3">
              <span className="w-10">2021</span>
              <span>
                Taylor Zanke, <em>...</em>, Digitally Self Released
              </span>
            </li>
            <li className="flex gap-3">
              <span className="w-10">2021</span>
              <span>
                Taylor Zanke, <em>...</em>, Digitally Self Released
              </span>
            </li>
            <li className="flex gap-3">
              <span className="w-10">2021</span>
              <span>
                Taylor Zanke, <em>...</em>, Digitally Self Released
              </span>
            </li>
            <li className="flex gap-3">
              <span className="w-10">2018</span>
              <span>
                Taylor Zanke, <em>Two Visits</em>, Allowing Many Forms
              </span>
            </li>
            <li className="flex gap-3">
              <span className="w-10">2013</span>
              <span>
                Taylor Zanke, <em>Honolulu, New York</em>, Allowing Many Forms
              </span>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <NewsletterSubscribe />
      </div>
    </PageSection>
  );
}
