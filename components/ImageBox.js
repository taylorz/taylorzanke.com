import Image from "next/image";
import Link from "next/link";
const ImageBox = ({ src, caption, href }) => {
  return (
    <>
      <ConditionalLink href={href}>
        <div className="relative aspect-square mb-1">
          <Image src={src} fill objectFit="contain" objectPosition="bottom" />
        </div>
      </ConditionalLink>
      {caption ? <div>{caption}</div> : null}
    </>
  );
};

export default ImageBox;

const ConditionalLink = ({ href, children }) => {
  return href ? <Link href={href}>{children}</Link> : children;
};
