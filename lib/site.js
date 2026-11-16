// Site-wide metadata. Edit these to change titles, descriptions and links
// used in <head> across the site (search results, link unfurls).
export const SITE = {
  name: "Taylor Louie Zanke",
  // Canonical origin, no trailing slash. Used for canonical and og:url.
  url: "https://taylorlouiezanke.com",
  // Default description (~150 characters reads best in search results).
  description:
    "Taylor Louie Zanke is a Canadian artist based in Los Angeles, California, working through improvisation with material, space, and form.",
};

// Per-page titles and descriptions. A page without a title uses SITE.name.
export const PAGES = {
  work: { title: "Work" },
  about: { title: "About" },
  contact: { title: "Contact" },
};

// "Work - Taylor Louie Zanke"; the site name alone when there's no title.
export const pageTitle = (title) =>
  title ? `${title} - ${SITE.name}` : SITE.name;
