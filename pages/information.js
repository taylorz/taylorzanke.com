import Link from "next/link";

export default function Information() {
  return (
    <main
      className={`p-2 font-sans text-xs w-screen overflow-hidden sm:text-base`}
    >
      <div className={`grid grid-cols-1 sm:grid-cols-2`}>
        <div>
          <p className={`indent-12 sm:indent-16`}>
            <Link href="/">Taylor Zanke</Link>
          </p>
        </div>
        <div>
          <p>
            Taylor Zanke is an artist who uses material from everyday life to
            explore space and presence.
          </p>

          <p className={`indent-12 sm:indent-16 `}>
            He is the founder of{" "}
            <Link href="https://allowingmanyforms.org/">
              Allowing Many Forms
            </Link>
            , a publisher of artist's books. He earned a Master of Architecture
            and MS from Columbia University and a BFA from Parsons the New
            School For Design.
          </p>
          <p className={`indent-12 mt-7 sm:indent-16 sm:mt-8`}>Recent</p>
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
          </ol>

          {/* TODO: Build the newsletter signup form */}
          {/* <div className="ml-12 sm:ml-16">
            <p className={`mt-7 sm:mt-8`}>Newsletter</p>
            <p>Full name</p>
            <p>Email</p>
            <p>Submit</p>
          </div> */}

          <div className="ml-12 sm:ml-16">
            <p className={`mt-7 sm:mt-8`}>Contact</p>
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
