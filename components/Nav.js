import Link from "next/link";

const Nav = () => {
  return (
    <div>
      <div className="flex flex-col gap-4 w-[120px] sticky top-8">
        <Link href="/">
          <div className="hover:cursor-pointer">TAYLOR ZANKE</div>
        </Link>
      </div>
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
