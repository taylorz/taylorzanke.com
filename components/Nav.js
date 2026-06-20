import { useRouter } from "next/router";
import Link from "next/link";
import Text from "@/components/Text";

const Nav = () => {
  const router = useRouter();
  const pathname = router.pathname;
  return (
    <div className="pb-32">
      {/* <Link href="/cv" className="hover:underline ">
          <Text>C.V.</Text>
          </Link> */}
      <Text>
        <Link href="/" className="hover:underline">
          Taylor Zanke
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
      {/* <Link href="/amf" className="hover:underline ">
          <Text>Allowing Many Forms</Text>
        </Link> */}
    </div>
  );
};

export default Nav;
