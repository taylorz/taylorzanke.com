import { createContext, useContext } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const HOME = "/";

// Number of homepage slides (1–5), provided by _app so the nav shows one
// number per slide on every page.
export const SlideCountContext = createContext(5);

// Distances in px from the nav's top to its lines, for pages that align
// content to them. Keep in sync with the markup below: the name line, gap-5,
// one line per slide number, gap-5, then Work / About / Contact.
const LINE = 20; // leading-[20px]
const GAP = 20; // gap-5
// Slide number n's line (1-based).
export const slideLineOffset = (n) => LINE + GAP + LINE * (n - 1);
// The "Work" line.
export const useWorkLineOffset = () =>
  slideLineOffset(useContext(SlideCountContext) + 1) + GAP;

// Hover indent shared with other lists (e.g. the /work list view).
export const itemClass = "hover:indent-6 w-fit cursor-pointer";

const pages = [
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

// A section stays active on its own page and any page under it
// (e.g. Work on /work/[work]).
const isActivePage = (pathname, href) =>
  pathname === href || pathname.startsWith(`${href}/`);

// slide / setSlide / setHoveredSlide are only passed on the homepage.
export default function SiteNav({ slide, setSlide, setHoveredSlide }) {
  const { pathname } = useRouter();
  const slideCount = useContext(SlideCountContext);
  const isActive = (href) => isActivePage(pathname, href);

  return (
    <nav className="flex flex-col gap-5 w-fit shrink-0 pr-6">
      <Link href={HOME} className="block w-fit">
        Taylor Louie Zanke
      </Link>
      <ul>
        {Array.from({ length: slideCount }, (_, i) => i + 1).map((n) => (
          <li
            key={n}
            onClick={() => setSlide?.(n)}
            onMouseEnter={() => setHoveredSlide?.(n)}
            onMouseLeave={() => setHoveredSlide?.(null)}
            className={`${itemClass} ${slide === n ? "indent-6" : ""}`}
          >
            {/* Off the homepage, go home with this slide active. */}
            {setSlide ? (
              n
            ) : (
              <Link
                href={{ pathname: HOME, query: { slide: n } }}
                as={HOME}
                className="block"
              >
                {n}
              </Link>
            )}
          </li>
        ))}
      </ul>
      <ul>
        {pages.map(({ href, label }) => (
          <li
            key={href}
            className={`${itemClass} ${isActive(href) ? "indent-6" : ""}`}
          >
            <Link href={href} className="block">
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
