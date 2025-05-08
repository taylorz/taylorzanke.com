import Link from "next/link";

import PageContainer from "@/components/PageContainer";
import MaxWidth from "@/components/MaxWidth";
const Work = () => {
  return (
    <PageContainer>
      <div className="pt-10 pl-[224px]">
        <MaxWidth>
          <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-5">
              <div>
                <h1 className="italic">Selected</h1>
                <p>
                  <Link href="/work/1">Untitled (Ongoing)</Link>
                </p>
                <p>
                  <Link href="/work/1">The Source Can Be Transformed</Link>
                </p>
                <p>
                  <Link href="/work/1">
                    I Know Some Things Form Without You
                  </Link>
                </p>
              </div>
              <div>
                <h1 className="italic">Sculpture & Drawings</h1>
                <p>
                  <Link href="/work/1">...</Link>
                </p>
                <p>
                  <Link href="/work/1">OO</Link>
                </p>
                <p>
                  <Link href="/work/1">
                    The Factual Reality Of The Structure
                  </Link>
                </p>
              </div>
              <div>
                <h1 className="italic">Artist's Books</h1>
                <p>
                  <Link href="/work/1">Reformulations 1</Link>
                </p>
                <p>
                  <Link href="/work/1">Reformulations 2</Link>
                </p>
                <p>
                  <Link href="/work/1">Two Visits</Link>
                </p>
                <p>
                  <Link href="/work/1">
                    Several Speculative Improvements To My Family Home
                  </Link>
                </p>
                <p>
                  <Link href="/work/1">Honolulu New York</Link>
                </p>
              </div>
              <div>
                <h1 className="italic">Exhibitions & Presentations</h1>
                <p>
                  <Link href="/work/1">Reformulations 1</Link>
                </p>
                <p>
                  <Link href="/work/1">Reformulations 2</Link>
                </p>
                <p>
                  <Link href="/work/1">Two Visits</Link>
                </p>
                <p>
                  <Link href="/work/1">Honolulu New York</Link>
                </p>
              </div>
            </div>
          </div>
        </MaxWidth>
      </div>
    </PageContainer>
  );
};

export default Work;
