import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/about',
        destination: '/',
      },
      {
        source: '/experience',
        destination: '/',
      },
      {
        source: '/skills',
        destination: '/',
      },
      {
        source: '/projects',
        destination: '/',
      },
      {
        source: '/certifications',
        destination: '/',
      },
      {
        source: '/contact',
        destination: '/',
      },
    ];
  },
};

export default nextConfig;
