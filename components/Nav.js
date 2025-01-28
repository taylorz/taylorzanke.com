import { useRouter } from "next/router";
import Link from "next/link";

const Nav = () => {
  return (
    <div className="flex flex-col gap-4 w-[200px]">
      <Link href="/">
        <div className="hover:cursor-pointer">TAYLOR ZANKE</div>
      </Link>
      <div className="flex flex-col">
        <NavLink label="Work" link="/work" />
        <NavLink label="Archive" link="/archive" />
        <NavLink label="Exhibitions" link="/exhibitions" />
        <NavLink label="Publications" link="/publications" />
      </div>
      <div className="flex flex-col">
        <NavLink label="Contact" link="/contact" />
        <NavLink label="Information" link="/information" />
      </div>
    </div>
  );
};

export default Nav;

const NavLink = ({ link, label }) => {
  const router = useRouter();
  return (
    <Link href={link}>
      <div
        className={router.pathname === link ? "underline" : "hover:underline"}
      >
        {label}
      </div>
    </Link>
  );
};
