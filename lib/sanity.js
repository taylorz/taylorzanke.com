import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import {
  resumeQueries,
  statementQueries,
  biographyQueries,
  individualQueries,
  worksQueries,
  contactQueries,
  homeQueries,
  tagQueries,
} from "./queries";

export const config = {
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "hhvbqtrb",
  apiVersion: "2024-04-07",
  useCdn: process.env.NODE_ENV === "production",
};

export const sanityClient = createClient(config);
export const imageBuilder = imageUrlBuilder(sanityClient);

// Helper function to generate image URLs
export const urlFor = (source) => imageBuilder.image(source);

// Displayed width/height of a Sanity image: the original size from the asset
// id ("image-…-1666x2332-jpg"), minus any crop set in the Studio. Null if
// the id doesn't carry dimensions.
export function imageDimensions(image) {
  const [, w, h] = image?.asset?._ref?.match(/-(\d+)x(\d+)-/) ?? [];
  if (!w || !h) return null;
  const { top = 0, bottom = 0, left = 0, right = 0 } = image.crop ?? {};
  return {
    width: Math.round(w * (1 - left - right)),
    height: Math.round(h * (1 - top - bottom)),
  };
}

// Image-builder transform that sizes an image by its longer side, so it fits
// a square box uncropped. (Setting width and height together makes
// @sanity/image-url crop to that box.)
export function fitLongSide(image) {
  const dims = imageDimensions(image);
  const portrait = dims && dims.height > dims.width;
  return (builder, size) =>
    portrait ? builder.height(size) : builder.width(size);
}

// `src` + `srcSet` for an image shown at up to `displayWidth` CSS px:
// 1x, 1.5x, 2x and 3x widths, served as WebP/AVIF where supported, at
// quality 85 (Sanity's default 75 softens fine detail).
// `transform(builder, width)` adds per-width options (e.g. a crop).
export function responsiveImage(
  source,
  displayWidth,
  transform = (b, w) => b.width(w),
) {
  const url = (w) =>
    transform(urlFor(source), w).quality(85).auto("format").url();
  const widths = [1, 1.5, 2, 3].map((d) => Math.round(displayWidth * d));
  return {
    src: url(widths[2]),
    srcSet: widths.map((w) => `${url(w)} ${w}w`).join(", "),
  };
}

// Preview helper
export const getClient = (usePreview = false) =>
  usePreview
    ? createClient({
        ...config,
        useCdn: false,
        token: process.env.SANITY_API_TOKEN,
      })
    : sanityClient;

// Server-side data fetching
export async function getResume() {
  return await sanityClient.fetch(resumeQueries.single);
}

export async function getStatement() {
  return await sanityClient.fetch(statementQueries.single);
}

export async function getBiography() {
  return await sanityClient.fetch(biographyQueries.single);
}

// Works carrying the tag with this slug, newest first.
export async function getWorksByTag(tag) {
  return await sanityClient.fetch(worksQueries.byTag, { tag });
}

export async function getWorksWithImages() {
  return await sanityClient.fetch(worksQueries.allWithImages);
}

export async function getWorkSlugs() {
  return await sanityClient.fetch(worksQueries.slugs);
}

export async function getTags() {
  return await sanityClient.fetch(tagQueries.list);
}

// Groups from the individuals singleton (only those with images).
export async function getIndividualGroups() {
  return (await sanityClient.fetch(individualQueries.groups)) ?? [];
}

export async function getWorkItem(slug) {
  return await sanityClient.fetch(worksQueries.single, { slug });
}

export async function getHomeSlides() {
  return (await sanityClient.fetch(homeQueries.slides)) ?? [];
}

export async function getSiteMeta() {
  return (await sanityClient.fetch(homeQueries.siteMeta)) ?? {};
}

// Link-unfurl image URL: 1200×630, cropped around the hotspot.
export const ogImageUrl = (image) =>
  image?.asset
    ? urlFor(image).width(1200).height(630).fit("crop").quality(80).url()
    : null;

export async function getContact() {
  return await sanityClient.fetch(contactQueries.single);
}
