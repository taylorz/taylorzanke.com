/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["cdn.shopify.com", "cdn.sanity.io"],
  },
};

module.exports = nextConfig;
