import Link from "next/link";
import PageSection from "@/components/PageSection";
import NewsletterSubscribe from "@/components/NewsletterSubscribe";

export default function Information() {
  return (
    <PageSection className="md:grid md:grid-cols-2 md:gap-3 max-w-screen-2xl">
      <div>
        <p className="mb-5">
          <Link href="/">
            <span className="md:hover:animate-blink">Taylor Zanke</span>
          </Link>{" "}
          (1992, Canada) is an artist who uses material from everyday life to
          explore space and presence. He is the founder of{" "}
          <Link href="https://allowingmanyforms.org/" target="_blank">
            <span className="md:hover:animate-blink">Allowing Many Forms</span>
          </Link>
          , a publisher of artist's books.
        </p>
        <div className="mb-5">
          <p>Education</p>
          <ul>
            <li className="flex gap-3">
              <span>2018</span>
              <span>MArch Columbia University, New York, New York</span>
            </li>
            <li className="flex gap-3">
              <span>2018</span>
              <span>MS Columbia University, New York, New York</span>
            </li>
            <li className="flex gap-3">
              <span>2014</span>
              <span>
                BFA Parsons the New School for Design, New York, New York
              </span>
            </li>
          </ul>
        </div>
        <div className="mb-5">
          <p>Group Exhibitions</p>
          <ul>
            <li className="flex gap-3">
              <span>2023</span>
              <span>
                <em>Leaf Thru, Pore Over</em>. RUTH Gallery, Los Angeles,
                California
              </span>
            </li>
            <li className="flex gap-3">
              <span>2023</span>
              <span>
                <em>I Know Some Things Form Without You</em>. TRYST (Torrance
                Art Museum) with RUTH Gallery, Torrance, California
              </span>
            </li>
          </ul>
        </div>
        <div className="mb-5">
          <p>Releases & Publications</p>
          <ul>
            <li className="flex gap-3">
              <span>2024</span>
              <span>
                Taylor Zanke. <em>Forthcoming</em>, Allowing Many Forms
              </span>
            </li>
            <li className="flex gap-3">
              <span>2024</span>
              <span>
                Taylor Zanke, Alicia Cheatham. <em>Forthcoming</em>, Allowing
                Many Forms
              </span>
            </li>
            <li className="flex gap-3">
              <span>2023</span>
              <span>
                Taylor Zanke, Cody Miner. <em>The Halves and Half Nots</em>,
                Allowing Many Forms
              </span>
            </li>
            <li className="flex gap-3">
              <span>2021</span>
              <span>
                Taylor Zanke, Matthew Ransom. <em>Figures</em>, Figure Press
              </span>
            </li>
            {/* <li className="flex gap-3">
              <span>2020</span>
              <span>
                Taylor Zanke. <em>Title</em>, Self, Digital
              </span>
            </li> */}
            <li className="flex gap-3">
              <span>2019</span>
              <span>
                Taylor Zanke. <em>Two Visits</em>, Allowing Many Forms
              </span>
            </li>
            <li className="flex gap-3">
              <span>2018</span>
              <span>
                Taylor Zanke.{" "}
                <em>Resonance Studies (Building Soundings 1, 2, 3)</em>, Self,
                Digital
              </span>
            </li>
            <li className="flex gap-3">
              <span>2016</span>
              <span>
                Taylor Zanke, Various Authors.{" "}
                <em>
                  Housing the Majority in Baishizhou Village, Shenzhen China
                </em>
                , Studio-X Beijing, Columbia University
              </span>
            </li>
            <li className="flex gap-3">
              <span>2013</span>
              <span>
                Taylor Zanke. <em>Honolulu, New York</em>, Allowing Many Forms
              </span>
            </li>
            <li className="flex gap-3">
              <span>2013</span>
              <span>
                Taylor Zanke, Various Authors. <em>Currents: Translations</em>,
                Synoptic Office
              </span>
            </li>
          </ul>
        </div>
        <div className="mb-5">
          <p>Special Projects</p>
          <ul>
            <li className="flex gap-3">
              <span>2023</span>
              <span>
                <em>Allowing Many Forms Handmade Book Residency (Winter)</em>. 4
                Participants. Led by Taylor Zanke, Los Angeles, California.
              </span>
            </li>
            <li className="flex gap-3">
              <span>2022</span>
              <span>
                <em>Allowing Many Forms Handmade Book Residency (Fall)</em>. 6
                Participants. Led by Taylor Zanke, New York, New York.
              </span>
            </li>
          </ul>
        </div>
        <div className="mb-5">
          <p>Awards</p>
          <ul>
            <li className="flex gap-3">
              <span>2018</span>
              <span>
                William Kinne Travelling Fellowship, for{" "}
                <em>
                  A Building Depository: New Temporal Accumulation of Subject
                  Matter, Material, and Memory
                </em>
                . Columbia University, New York, New York.
              </span>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <div className="mb-5">
          <NewsletterSubscribe />
        </div>
        <div className="pb-20">
          <p>Contact</p>
          <a>
            <p>taylor@allowingmanyforms.org</p>
          </a>
          <p>Studio in Pasadena, California</p>
        </div>
      </div>
    </PageSection>
  );
}
