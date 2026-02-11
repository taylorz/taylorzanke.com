import Text, {
  DROP_SHADOW_CLASSES,
  DROP_SHADOW_STYLE,
} from "@/components/Text";

export const portableTextComponents = {
  block: {
    normal: ({ children }) => (
      <Text className="mb-6 last:mb-0">{children}</Text>
    ),
    h1: ({ children }) => (
      <h1
        className={`${DROP_SHADOW_CLASSES} text-2xl font-bold mb-2 last:mb-0 text-white`}
        style={DROP_SHADOW_STYLE}
      >
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2
        className={`${DROP_SHADOW_CLASSES} text-xl font-bold mb-3 last:mb-0 text-white`}
        style={DROP_SHADOW_STYLE}
      >
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3
        className={`${DROP_SHADOW_CLASSES} text-lg font-bold mb-2 last:mb-0 text-white`}
        style={DROP_SHADOW_STYLE}
      >
        {children}
      </h3>
    ),
    h4: ({ children }) => (
      <h4
        className={`${DROP_SHADOW_CLASSES} text-base font-bold mb-2 last:mb-0 text-white`}
        style={DROP_SHADOW_STYLE}
      >
        {children}
      </h4>
    ),
    blockquote: ({ children }) => (
      <blockquote
        className={`${DROP_SHADOW_CLASSES} border-l-4 border-gray-300 pl-4 italic mb-2 last:mb-0 text-white`}
        style={DROP_SHADOW_STYLE}
      >
        {children}
      </blockquote>
    ),
  },
  marks: {
    strong: ({ children }) => <strong className="font-bold">{children}</strong>,
    em: ({ children }) => <em className="italic">{children}</em>,
    link: ({ value, children }) => {
      const target = (value?.href || "").startsWith("http")
        ? "_blank"
        : undefined;
      return (
        <a
          href={value?.href}
          target={target}
          rel={target === "_blank" ? "noopener noreferrer" : undefined}
          className="text-blue-600 hover:underline"
        >
          {children}
        </a>
      );
    },
  },
  list: {
    bullet: ({ children }) => (
      <ul className="list-disc list-inside mb-2 last:mb-0">{children}</ul>
    ),
  },
};
