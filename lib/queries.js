import { imageProjection } from "./sanity";

export const workImageQueries = {
  list: `*[_type == "workImage"] {
    _id,
    selected,
    image {
      ${imageProjection}
    }
  }`,

  selected: `*[_type == "workImage" && selected == true] {
    _id,
    image {
      ${imageProjection}
    }
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
    image {
      ${imageProjection}
    }
  }`,

  single: `*[_type == "portfolioImage" && slug.current == $slug][0] {
    _id,
    title,
    year,
    caption,
    materials,
    dimensions,
    "slug": slug.current,
    image {
      ${imageProjection}
    }
  }`,
};
