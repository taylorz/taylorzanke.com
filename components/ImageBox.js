import Image from "next/image";
import Link from "next/link";
const ImageBox = ({ src, caption, href }) => {
  return (
    <div>
      <ConditionalLink href={href}>
        <div className="relative aspect-square ">
          <Image src={src} fill objectFit="contain" objectPosition="bottom" />
        </div>
      </ConditionalLink>
      {caption ? (
        <div className="flex justify-center pt-3">{caption}</div>
      ) : null}
    </div>
  );
};

export default ImageBox;

const ConditionalLink = ({ href, children }) => {
  return href ? <Link href={href}>{children}</Link> : children;
};
