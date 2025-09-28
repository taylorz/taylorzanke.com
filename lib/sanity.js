import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import { workQueries } from "./queries";

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
export async function getWorks() {
  return await sanityClient.fetch(workQueries.list);
}

export async function getSelectedWorks() {
  return await sanityClient.fetch(workQueries.selectedList);
}

export async function getWork(slug) {
  return await sanityClient.fetch(workQueries.single, { slug });
}

export async function getWorkImages() {
  return await sanityClient.fetch(workQueries.homepage);
}
