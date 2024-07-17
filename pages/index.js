import { motion } from "framer-motion";
import useSWR from "swr";

import { getSanityClient, getSanityImageUrl } from "../lib/sanity";

import { list, item } from "../utils/animationVariants";
import PageContainer from "../components/PageContainer";
import ImageBox from "../components/ImageBox";

export default function Home() {
  const fetcher = (query) => getSanityClient().fetch(query);
  const { data, error, isValidating, mutate } = useSWR(
    `
    *[_type == "group"].images[]{
      _key,
      "url": image.asset->url,
      slug
    }
    `,
    fetcher
  );
  console.log({ data });

  return (
    <PageContainer>
      <div className="flex flex-col gap-6">
        <p>
          Taylor Zanke is an artist based in Los Angeles. He is the founder of{" "}
          <a
            href="https://allowingmanyforms.org"
            className="cursor-pointer italic"
          >
            allowing many forms
          </a>
          , a publisher of art books. Contact him{" "}
          <a
            href="mailto:taylor@allowingmanyforms.org"
            className="cursor-pointer italic"
          >
            here
          </a>
          .
        </p>

        <div className="pl-8 sm:pl-16">
          <p>Recent</p>
          <ol className="list-decimal">
            <li>
              <a
                href="https://allowingmanyforms.org/books/the-source-can-be-transformed"
                className="cursor-pointer italic"
              >
                A 112 page publication
              </a>{" "}
              using found papers published at allowing many forms in a limited
              edition.
            </li>

            <li>
              <a
                href="https://scotty-berlin.de/b-la-m/"
                className="cursor-pointer italic"
              >
                A group exhibition
              </a>{" "}
              at Scotty in Berlin, as part of Monte Vista Projects, showing a
              graphite drawing.
            </li>
            <li>
              <a
                href="https://www.ruthgallery.com/current"
                className="cursor-pointer italic"
              >
                A two person exhibition
              </a>{" "}
              at Ruth Gallery in Los Angeles showing sculptures.
            </li>
          </ol>
        </div>
      </div>
    </PageContainer>
  );
}
