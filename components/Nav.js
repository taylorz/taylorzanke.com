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
        <Link href="/contact" className="hover:underline">
          <Text>contact</Text>
        </Link>
      </div>
    </div>
  );
};

export default Nav;
