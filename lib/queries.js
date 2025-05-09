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
  }`,

  single: `*[_type == "work" && slug.current == $slug][0] {
    _id,
    title,
    dimensions,
    materials,
    year,
    externalLink,
    details,
    description,
    selected,
    "slug": slug.current,
    "category": category->title,
    images[] {
      caption,
      image
    }
  }`,

  homepage: `*[_type == "work"] {
    "slug": slug.current,
    selected,
    "randomImage": images[0] {
      caption,
      image
    }
  }`,
};
