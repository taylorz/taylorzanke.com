import { imageProjection } from "./sanity";

export const workQueries = {
  list: `*[_type == "work"] | order(year desc) {
    _id,
    title,
    year,
    category,
    "slug": slug.current,
    "images": *[_type == "workImage" && references(^._id)] {
      _id,
      caption,
      imageDate,
      image {
        ${imageProjection}
      }
    }
  }`,

  single: `*[_type == "work" && slug.current == $slug][0] {
    _id,
    title,
    year,
    category,
    "slug": slug.current,
    "images": *[_type == "workImage" && references(^._id)] {
      _id,
      caption,
      imageDate,
      image {
        ${imageProjection}
      }
    }
  }`,

  byCategory: `*[_type == "work" && category == $category] | order(year desc) {
    _id,
    title,
    year,
    "slug": slug.current,
    "images": *[_type == "workImage" && references(^._id)][0] {
      _id,
      image {
        ${imageProjection}
      }
    }
  }`,
};

export const groupQueries = {
  list: `*[_type == "group"] | order(year desc) {
    _id,
    name,
    caption,
    year,
    "slug": slug.current,
    images[] {
      _key,
      title,
      caption,
      image {
        ${imageProjection}
      }
    }
  }`,

  single: `*[_type == "group" && slug.current == $slug][0] {
    _id,
    name,
    caption,
    year,
    "slug": slug.current,
    images[] {
      _key,
      title,
      caption,
      image {
        ${imageProjection}
      }
    }
  }`,
};
