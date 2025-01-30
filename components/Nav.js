import { useRouter } from "next/router";
import Link from "next/link";

const Nav = () => {
  const router = useRouter();
  return (
    <div>
      <div className="flex flex-col gap-4 w-[120px] sticky top-8">
        <Link href="/">
          <div className="hover:cursor-pointer">TAYLOR ZANKE</div>
        </Link>
        <div className="flex flex-col">
          <NavLink
            label="Work"
            link="/work"
            active={router.pathname === "/work"}
          />
          <NavLink
            label="Archive"
            link="/archive"
            active={router.pathname === "/archive"}
          />
          {router.pathname.includes("/archive") && (
            <div className="pl-2 flex flex-col">
              <NavLink
                label="2025"
                link="/archive/2025"
                active={router.asPath.includes("/archive/2025")}
              />
              <NavLink
                label="2024"
                link="/archive/2024"
                active={router.asPath.includes("/archive/2024")}
              />
              <NavLink
                label="2023"
                link="/archive/2023"
                active={router.asPath.includes("/archive/2023")}
              />
              <NavLink
                label="2022"
                link="/archive/2022"
                active={router.asPath.includes("/archive/2022")}
              />
              <NavLink
                label="2021"
                link="/archive/2021"
                active={router.asPath.includes("/archive/2021")}
              />
              <NavLink
                label="2020"
                link="/archive/2020"
                active={router.asPath.includes("/archive/2020")}
              />
              <NavLink
                label="2019"
                link="/archive/2019"
                active={router.asPath.includes("/archive/2019")}
              />
              {/* <NavLink label="..." link="/archive/..." /> */}
            </div>
          )}
          {/* <NavLink label="Exhibitions" link="/exhibitions" /> */}
          <NavLink
            label="Publications"
            link="/publications"
            active={router.pathname === "/publications"}
          />
        </div>
        <div className="flex flex-col">
          <NavLink label="Contact" link="/contact" />
          <NavLink
            label="Information"
            link="/information"
            active={router.pathname === "/information"}
          />
        </div>
      </div>
      {/* <div className="whitespace-nowrap absolute bottom-4 left-4">
        Last updated: January 27, 2025
      </div> */}
    </div>
  );
};

export default Nav;

const NavLink = ({ link, label, active }) => {
  return (
    <Link href={link}>
      <div className={active ? "underline" : "hover:underline"}>{label}</div>
    </Link>
  );
};
