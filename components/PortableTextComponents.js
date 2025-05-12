export const portableTextComponents = {
  block: {
    normal: ({ children }) => <p className="mb-4 last:mb-0">{children}</p>,
    h1: ({ children }) => (
      <h1 className="text-2xl font-bold mb-4 last:mb-0">{children}</h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-xl font-bold mb-3 last:mb-0">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-lg font-bold mb-2 last:mb-0">{children}</h3>
    ),
    h4: ({ children }) => (
      <h4 className="text-base font-bold mb-2 last:mb-0">{children}</h4>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-gray-300 pl-4 italic mb-4 last:mb-0">
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
      <ul className="list-disc list-inside mb-4 last:mb-0">{children}</ul>
    ),
  },
};
