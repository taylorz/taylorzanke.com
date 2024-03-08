import { useRouter } from "next/router";
import Link from "next/link";

const Nav = () => {
  const router = useRouter();

  return (
    <div className="flex flex-col w-[104px]">
      <div className="sticky top-2 z-10">
        <Link href="/">
          <div>Taylor Zanke</div>
        </Link>
        <Link href="/information">
          <div
            className={router.pathname === "/information" ? "underline" : null}
          >
            Information
          </div>
        </Link>
        {router.pathname.includes("/information") ? (
          <div className="indent-3">
            <NavLink link="/information/biography" label="Biography" />
            <NavLink link="/information/statement" label="Statement" />
            <NavLink link="/information/cv" label="CV" />
            <NavLink link="/information/contact" label="Contact" />
          </div>
        ) : null}
        <Link href="/images">
          <div className={router.pathname === "/images" ? "underline" : null}>
            Images
          </div>
        </Link>
        {router.pathname === "/images" ? (
          <div className="indent-3">
            <Link href="/images/2024">
              <div>Selected</div>
            </Link>
            <Link href="/images/2023">
              <div>Exhibitions</div>
            </Link>
            <Link href="/images/2022">
              <div>Books</div>
            </Link>
          </div>
        ) : null}
        {/* <Link href="/texts">
          <div className={router.pathname === "/texts" ? "underline" : null}>
            Texts
          </div>
        </Link> */}
      </div>
    </div>
  );
};

export default Nav;

const NavLink = ({ link, label }) => {
  const router = useRouter();
  return (
    <Link href={link}>
      <div className={router.pathname === link ? "underline" : null}>
        {label}
      </div>
    </Link>
  );
};