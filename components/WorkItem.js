import { useState } from "react";
import Link from "next/link";
import Text from "@/components/Text";

const WorkItem = ({ work, basePath = "/work" }) => {
  const [isHovered, setIsHovered] = useState(false);

  const label = (
    <>
      <span className="italic">{work.title}</span>
      {work.location && `, ${work.location}`}
    </>
  );

  if (!work.firstImage) {
    return (
      <div className="w-fit text-neutral-500">
        <div className="flex gap-4">
          <Text className="pl-4 [text-indent:-16px]">{label}</Text>
        </div>
      </div>
    );
  }

  return (
    <div
      className="w-fit"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link href={`${basePath}/${work.slug}`}>
        <div className="flex gap-4">
          <Text className={`pl-4 [text-indent:-16px] ${isHovered ? "underline" : ""}`}>
            {label}
          </Text>
        </div>
      </Link>
    </div>
  );
};

export default WorkItem;
