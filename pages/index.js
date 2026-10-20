import { useEffect, useState } from "react";
import { getHome, urlFor } from "@/lib/sanity";
import Text from "@/components/Text";

// One slide, picked at random on each page load, centered in a square. The
// page is statically generated, so the pick happens in the browser after
// mount; picking during render would give the server and client different
// images.
export default function Home({ slides }) {
  const [slide, setSlide] = useState(null);
  const [showContact, setShowContact] = useState(false);

  useEffect(() => {
    if (slides.length === 0) return;
    setSlide(slides[Math.floor(Math.random() * slides.length)]);
  }, [slides]);

  return (
    <div className="overflow-x-hidden">
      <div
        onClick={() => setShowContact(true)}
        className="p-2 w-[100vw] h-[100vh] flex items-center justify-center [container-type:size] cursor-pointer"
      >
        <div className="aspect-square w-[min(100cqw,100cqh)] select-none">
          {slide && (
            <img
              src={urlFor(slide.image).width(2400).quality(80).url()}
              alt=""
              className="w-full h-full object-contain"
            />
          )}
        </div>
      </div>

      {showContact && (
        <div
          onClick={() => setShowContact(false)}
          className="fixed inset-0 bg-[white] z-20"
        >
          <div className="h-[100svh] flex items-center justify-center px-8 py-8">
            <div className="flex flex-col text-center gap-4">
              <Text>Taylor Louie Zanke</Text>

              <div>
                {/* <Text>
                  <a
                    href="https://www.instagram.com/taylorlouiezanke/"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="hover:underline"
                  >
                    @taylorlouiezanke
                  </a>
                </Text> */}
                <Text>
                  <a
                    href="mailto:info@taylorlouiezanke.com"
                    onClick={(e) => e.stopPropagation()}
                    className="hover:underline"
                  >
                    taylor@taylorlouiezanke.com
                  </a>
                </Text>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export async function getStaticProps() {
  const home = await getHome();

  return {
    props: {
      // Drop slides whose image has since been removed from the work.
      slides: (home?.slides || []).filter((slide) => slide.image),
    },
    revalidate: 60,
  };
}
