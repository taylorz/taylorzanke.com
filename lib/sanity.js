import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";

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

// Commonly used image projections
export const imageProjection = `
  "asset": asset->,
  "metadata": asset->metadata,
  hotspot,
  crop,
  alt
`;
