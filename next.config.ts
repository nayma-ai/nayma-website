import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // nayma.ai is a GitHub Pages custom domain, so it serves this site at the
  // domain root rather than below the repository name.
  output: "export",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
