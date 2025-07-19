export const workImageQueries = {
  list: `*[_type == "workImage"] {
    _id,
    selected,
    image
  }`,

  selected: `*[_type == "workImage" && selected == true] {
    _id,
    image
  }`,
};

export const portfolioImageQueries = {
  list: `*[_type == "portfolioImage"] | order(year desc) {
    _id,
    title,
    year,
    caption,
    materials,
    dimensions,
    "slug": slug.current,
    image
  }`,

  single: `*[_type == "portfolioImage" && slug.current == $slug][0] {
    _id,
    title,
    year,
    caption,
    materials,
    dimensions,
    "slug": slug.current,
    image
  }`,
};

export const workQueries = {
  list: `*[_type == "work"] | order(year desc) {
    _id,
    title,
    selected,
    "slug": slug.current,
    year,
    "category": category->title,
    "categoryOrder": category->order,
  }`,

  single: `*[_type == "work" && slug.current == $slug][0] {
    _id,
    title,
    height,
    width,
    depth,
    customDimensions,
    materials,
    year,
    externalLinkUrl,
    externalLinkLabel,
    file {
      file,
      label
    },
    details,
    description,
    selected,
    "slug": slug.current,
    "category": category->title,
    "categoryOrder": category->order,
    images[] {
      caption,
      image
    }
  }`,

  homepage: `*[_type == "work" && selected == true] {
    "slug": slug.current,
    "firstImage": images[0] {
      caption,
      image
    }
  }`,
};
