export const worksQueries = {
  // Works carrying the tag with slug $tag (e.g. "installation").
  byTag: `*[_type == "works" && $tag in tags[]->slug.current] | order(year desc) {
    year,
    title,
    location,
    "tags": tags[]->{title, "slug": slug.current},
    "slug": slug.current,
    "firstImage": images[0].image,
    "firstImageCaptionTitle": images[0].captionTitle,
    "firstImageCaptionLabel": images[0].captionLabel,
  }`,

  allWithImages: `*[_type == "works"] | order(year desc) {
    year,
    title,
    location,
    "tags": tags[]->{title, "slug": slug.current},
    "slug": slug.current,
    images[] {
      image,
      captionTitle,
      captionLabel
    }
  }`,

  slugs: `*[_type == "works" && defined(slug.current)].slug.current`,

  single: `*[_type == "works" && slug.current == $slug][0] {
    year,
    title,
    "slug": slug.current,
    "tags": tags[]->{title, "slug": slug.current},
    location,
    datesOpen,
    note[] {
      ...
    },
    attributes[] {
      label,
      value
    },
    "documents": documents[]{
      "url": asset->url,
      "name": asset->originalFilename
    },
    online,
    images[] {
      image,
      captionTitle,
      captionLabel
    }
  }`,
};

export const tagQueries = {
  list: `*[_type == "tag"] | order(order asc) { title, "slug": slug.current }`,
};

// Home carousel slides (1–5). Each comes from a work (`workImage` resolves
// live) or an individuals group (`groupKey`, resolved in lib/slides.js);
// `image` is the copy stored at pick time, used as a fallback.
export const homeQueries = {
  slides: `*[_type == "home" && _id == "home"][0].slides[defined(imageKey)] {
    _key,
    imageKey,
    groupKey,
    image,
    "workImage": work->images[_key == ^.imageKey][0].image,
    "workTitle": work->title,
    "workYear": work->year,
    "workSlug": work->slug.current
  }`,
  // Site-wide bits needed on every page: the nav's slide count, and the first
  // slide's image (live from its work, else the stored copy) for unfurls.
  siteMeta: `*[_type == "home" && _id == "home"][0] {
    "slideCount": count(slides),
    "firstSlideImage": slides[0]{
      "img": coalesce(work->images[_key == ^.imageKey][0].image, image)
    }.img
  }`,
};

export const contactQueries = {
  single: `*[_type == "contact" && _id == "contact"][0] {
    biography[] {
      ...
    },
    location,
    email,
    online,
    "documents": documents[]{
      "url": asset->url,
      "name": asset->originalFilename
    }
  }`,
};

// Groups in the individuals singleton that have images, newest year first
// (groups without a year last; numbering on /work follows this order).
export const individualQueries = {
  groups: `*[_type == "individuals" && _id == "individuals"][0].groups[count(images) > 0] | order(coalesce(year, "") desc) {
    _key,
    year,
    materials,
    width,
    depth,
    height,
    images
  }`,
};

export const resumeQueries = {
  single: `*[_type == "resume" && _id == "resume"][0] {
    _id,
    groups[] {
      groupTitle,
      items[] {
        year,
        title,
        label
      }
    }
  }`,
};

export const statementQueries = {
  single: `*[_type == "statement" && _id == "statement"][0] {
    _id,
    content
  }`,
};

export const biographyQueries = {
  single: `*[_type == "biography" && _id == "biography"][0] {
    _id,
    content
  }`,
};
