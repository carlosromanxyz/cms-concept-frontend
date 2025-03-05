import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'cms-concept-backend',
        port: '1337',
        pathname: '/uploads/**',
      }
    ]
  }
};

export default nextConfig;
