import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/project-pdfy",
        destination: "/#project-pdfy",
        permanent: true,
      },
      {
        source: "/project-pactmate",
        destination: "/#project-pactmate",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
