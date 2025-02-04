import { imageProjection } from "./sanity";

export const workQueries = {
  list: `*[_type == "work"] | order(year desc) {
    _id,
    title,
    year,
    category,
    "slug": slug.current,
    "images": images[]-> {
      _id,
      caption,
      imageDate,
      selected,
      "workRef": work->._id,
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
    "images": images[]-> {
      _id,
      caption,
      imageDate,
      selected,
      "workRef": work->._id,
      image {
        ${imageProjection}
      }
    },
    // Get any additional images that reference this work but aren't in the images array
    "additionalImages": *[_type == "workImage" && work._ref == ^._id && !defined(^.images[_ref == _id])] {
      _id,
      caption,
      imageDate,
      selected,
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
    "images": images[]-> {
      _id,
      caption,
      imageDate,
      selected,
      "workRef": work->._id,
      image {
        ${imageProjection}
      }
    }
  }`,

  // New queries for archive pages
  allYears: `*[_type == "work"].year | order(desc)`,

  byYear: `*[_type == "work" && year == $year] {
    _id,
    title,
    year,
    category,
    "slug": slug.current,
    "images": images[]-> {
      _id,
      caption,
      imageDate,
      selected,
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
