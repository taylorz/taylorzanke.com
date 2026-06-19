import Link from "next/link";
import Text from "@/components/Text";

const Nav = () => {
  return (
    <div className="flex flex-col gap-4">
      <Link href="/" className="hover:underline">
        <Text className="lowercase">Taylor Zanke</Text>
      </Link>
      <div>
        <Link href="/cv" className="hover:underline lowercase">
          <Text>cv</Text>
        </Link>
        <Link href="/amf" className="hover:underline lowercase">
          <Text>amf</Text>
        </Link>
        <Link href="/contact" className="hover:underline lowercase">
          <Text>contact</Text>
        </Link>
      </div>
    </div>
  );
};

export default Nav;
