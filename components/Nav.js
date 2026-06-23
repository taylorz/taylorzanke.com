import { useRouter } from "next/router";
import Link from "next/link";
import Text from "@/components/Text";

const Nav = () => {
  const router = useRouter();
  const pathname = router.pathname;
  return (
    <div>
      <Text>
        <Link href="/" className="hover:underline">
          Taylor Zanke
        </Link>
        ,{" "}
        <Link
          href="/books"
          className={`hover:underline ${
            pathname === "/books" ? "underline" : ""
          }`}
        >
          Books
        </Link>
        ,{" "}
        <Link
          href="/contact"
          className={`hover:underline ${
            pathname === "/contact" ? "underline" : ""
          }`}
        >
          Contact
        </Link>
      </Text>
    </div>
  );
};

export default Nav;
