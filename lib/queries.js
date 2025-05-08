import { imageProjection } from "./imageProjection";

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

export const workQueries = {
  list: `*[_type == "work"] | order(year desc) {
    _id,
    title,
    selected,
    "slug": slug.current,
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
      "url": image.asset->url
    }
  }`,
};
