import Link from "next/link";

export default function Information() {
  return (
    <main
      className={`p-2 font-sans text-sm leading-6 sm:leading-8 w-screen overflow-hidden sm:text-base`}
    >
      <div className={`grid grid-cols-1 sm:grid-cols-2`}>
        <div>
          <p className={`indent-12 sm:indent-16`}>
            <Link href="/">Taylor Zanke</Link>
          </p>
        </div>
        <div>
          <p>
            Taylor Zanke is an artist based in Los Angeles. He is the founder of{" "}
            <Link href="">Allowing Many Forms.</Link>
          </p>
          <p className={`indent-12 mt-6 sm:indent-16 sm:mt-8`}>Recent</p>
          <ol className={`list-decimal ml-12 sm:ml-16`}>
            <li>
              Participating in the group exhibition{" "}
              <span className={`italic`}>LEAF THRU, POUR OVER</span> at{" "}
              <Link href="https://www.ruthgallery.com/">Ruth Gallery</Link>.
              November 11 - December 16, 2023.
            </li>
            <li>
              <p>
                Presented{" "}
                <span className={`italic`}>
                  I Know Some Things Form Without You
                </span>{" "}
                with{" "}
                <Link href="https://www.ruthgallery.com/">Ruth Gallery</Link> at{" "}
                <Link href="https://www.torranceartmuseum.com/tryst">
                  TRYST
                </Link>{" "}
                (Torrance Art Museum). October 27 - 29, 2023.
              </p>
            </li>
            <li>
              <p>
                Preparing <Link href="">Red Rotkopf</Link>'s book{" "}
                <span className={`italic`}>Wind in the Cage</span> for press
                with <Link href="">Allowing Many Forms</Link>. Forthcoming 2024.
              </p>
            </li>
          </ol>

          {/* TODO: Build the newsletter signup form */}
          {/* <div className="ml-8 sm:ml-16">
            <p className={`mt-6 sm:mt-8`}>Newsletter</p>
            <p>Full name</p>
            <p>Email</p>
            <p>Submit</p>
          </div> */}

          <div className="ml-12 sm:ml-16">
            <p className={`mt-6 sm:mt-8`}>Contact</p>
            <p>
              <Link href="">taylor@allowingmanyforms.org</Link>
            </p>
            <p>Studio in Pasadena.</p>
          </div>
        </div>
      </div>
    </main>
  );
}
