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
