import Link from "next/link";

const Nav = () => {
  return (
    <div className="w-full">
      <div className="flex gap-5 pl-5 pt-5">
        <Link href="/">
          <p className="hover:cursor-pointer">Taylor Zanke</p>
        </Link>
        <Link href="/information">
          <p className="hover:cursor-pointer">Information</p>
        </Link>
        <Link href="/work">
          <p className="hover:cursor-pointer">Work</p>
        </Link>
      </div>
    </div>
  );
};

export default Nav;
