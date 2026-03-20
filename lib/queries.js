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
  selectedList: `*[_type == "work" && selected == true] | order(year desc) {
    _id,
    title,
    selected,
    materials,
    width,
    depth,
    height,
    customDimensions,
    "slug": slug.current,
    year,
    "category": category->title,
    "categoryOrder": category->order,
  }`,
  list: `*[_type == "work"] | order(year desc) {
    _id,
    title,
    selected,
    materials,
    width,
    depth,
    height,
    customDimensions,
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
  homepage: `*[_type == "work" && selected == true] | order(year desc) {
    "slug": slug.current,
    year,
    images[] {
      caption,
      image
    }
  }`,
};

export const exhibitionQueries = {
  list: `*[_type == "exhibition"] | order(year desc) {
    year,
    title,
    venue,
    location,
    "slug": slug.current,
    "firstImage": images[0].image,
    "firstImageCaptionTitle": images[0].captionTitle,
    "firstImageCaptionLabel": images[0].captionLabel,
  }`,

  single: `*[_type == "exhibition" && slug.current == $slug][0] {
    year,
    title,
    "slug": slug.current,
    venue,
    location,
    datesOpen,
    note[] {
      ...
    },
    link {
      label,
      url
    },
    file {
      label,
      file
    },
    images[] {
      image,
      captionTitle,
      captionLabel
    }
  }`,
};

export const individualQueries = {
  single: `*[_type == "individuals" && _id == "individuals"][0] {
    _id,
    images[] {
      image,
      captionTitle,
      captionLabel,
      year
    }
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
