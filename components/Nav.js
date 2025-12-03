import Link from "next/link";

const Nav = () => {
  return (
    <div className="w-full px-4 pt-4">
      <div className="flex gap-4">
        <Link href="/">
          <p className="hover:cursor-pointer">Taylor Zanke</p>
        </Link>
        <Link href="/information">
          <p className="hover:cursor-pointer">Information</p>
        </Link>
        <Link href="/work">
          <p className="hover:cursor-pointer">Work</p>
        </Link>
        {/* <Link href="/books">
          <p className="hover:cursor-pointer">Books</p>
        </Link> */}
      </div>
    </div>
  );
};

export default Nav;
