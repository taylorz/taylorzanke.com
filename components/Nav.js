import { useRouter } from "next/router";
import Link from "next/link";

const Nav = () => {
  const router = useRouter();

  return (
    <div className="flex flex-col">
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
              <div>2024</div>
            </Link>
            <Link href="/images/2023">
              <div>2023</div>
            </Link>
            <Link href="/images/2022">
              <div>2022</div>
            </Link>
            <Link href="/images/2021">
              <div>2021</div>
            </Link>
            <Link href="/images/2020">
              <div>2020</div>
            </Link>
          </div>
        ) : null}
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
