import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "amalfijets.com",
      },
    ],
  },
};

export default nextConfig;
