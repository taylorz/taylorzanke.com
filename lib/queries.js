// A work's display title: "Client/Collaborator, Title" when it has a
// collaborator, else just the title. (In GROQ, string + null is null.)
const WORK_TITLE = `"title": coalesce(collaborator + ", " + title, title)`;

export const worksQueries = {
  // Works carrying the tag with slug $tag (e.g. "installation").
  byTag: `*[_type == "works" && $tag in tags[]->slug.current] | order(year desc) {
    year,
    ${WORK_TITLE},
    "tags": tags[]->{title, "slug": slug.current},
    "slug": slug.current,
    "firstImage": images[0].image,
    "firstImageCaptionTitle": images[0].captionTitle,
    "firstImageCaptionLabel": images[0].captionLabel,
  }`,

  // TEMP: `note` is plain text now, but one work still holds its old
  // rich-text note (moving to `description`). The select() drops any
  // non-string note (arrays have a [0]); once that's moved, revert to `note,`.
  // Newest year first; within a year, by title A–Z (case-insensitive).
  allWithImages: `*[_type == "works"] | order(year desc, lower(title) asc) {
    _id,
    year,
    ${WORK_TITLE},
    "note": select(!defined(note[0]) => note),
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
    ${WORK_TITLE},
    "slug": slug.current,
    "tags": tags[]->{title, "slug": slug.current},
    description[] {
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
  list: `*[_type == "tag"] | order(title asc) { title, "slug": slug.current }`,
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
    "workTitle": coalesce(work->collaborator + ", " + work->title, work->title),
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

export const aboutQueries = {
  single: `*[_type == "about" && _id == "about"][0] {
    biography
  }`,
};
