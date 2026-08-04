import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // GitHub Pages serves project sites below the repository name. This keeps
  // links and assets working both locally and at /nayma-website in production.
  output: "export",
  basePath: process.env.GITHUB_ACTIONS ? "/nayma-website" : "",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
