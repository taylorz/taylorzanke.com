import Link from "next/link";

const Nav = () => {
  return (
    <div className="absolute top-0 left-0 w-full z-30">
      <div className="flex gap-3 pl-5 pt-5">
        <Link href="/">
          <p className="hover:cursor-pointer">Taylor Zanke</p>
        </Link>
        <Link href="/information">
          <p className="hover:cursor-pointer">Information</p>
        </Link>
        <Link href="/work">
          <p className="hover:cursor-pointer">Works</p>
        </Link>
      </div>
    </div>
  );
};

export default Nav;
