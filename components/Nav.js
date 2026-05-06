import Link from "next/link";
import Text from "@/components/Text";

const Nav = () => {
  return (
    <div className="flex flex-col gap-4">
      <Link href="/" className="hover:underline">
        <Text>TAYLOR ZANKE</Text>
      </Link>
      <div>
        <Link href="/cv" className="hover:underline">
          <Text>cv</Text>
        </Link>
        <Link href="/amf" className="hover:underline">
          <Text>amf</Text>
        </Link>
        <Link href="/books" className="hover:underline">
          <Text>books</Text>
        </Link>
        <Link href="/contact" className="hover:underline">
          <Text>contact</Text>
        </Link>
        <Link href="/individuals" className="hover:underline">
          <Text>individual</Text>
        </Link>
        <Link href="/installations" className="hover:underline">
          <Text>installations</Text>
        </Link>
      </div>
    </div>
  );
};

export default Nav;
