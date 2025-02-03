import { useRouter } from "next/router";
import Link from "next/link";
import { useArchiveYears } from "@/lib/hooks";

const Nav = () => {
  const router = useRouter();
  const { years, isLoading } = useArchiveYears();

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
              {years?.map((year) => (
                <NavLink
                  key={year}
                  label={year}
                  link={`/archive/${year}`}
                  active={router.asPath.includes(`/archive/${year}`)}
                />
              ))}
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
