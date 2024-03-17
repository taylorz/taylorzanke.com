import { createClient } from "next-sanity";
export const client = createClient({
  projectId: "hhvbqtrb",
  dataset: "production",
  apiVersion: "2023-04-01",
  useCdn: false,
});
