export const DROP_SHADOW_CLASSES =
  "drop-shadow-[1px_1px_0px_rgba(0,0,0,1)] text-outline";
export const DROP_SHADOW_STYLE = { WebkitTextStroke: ".5px rgba(0, 0, 0, 1)" };

export default function Text({
  children,
  noShadow = false,
  color = "white",
  className = "",
  link = false,
}) {
  const shadowClasses = noShadow ? "" : DROP_SHADOW_CLASSES;
  const shadowStyle = DROP_SHADOW_STYLE;
  const colorClass = color === "black" ? "text-black" : "text-black";
  const linkClasses = link ? "text-link-style" : "";
  const baseClasses = "font-sans leading-[20px] text-[18px] font-bold";
  const combinedClassName = [
    baseClasses,
    // shadowClasses,
    colorClass,
    linkClasses,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return <p className={combinedClassName}>{children}</p>;
}
