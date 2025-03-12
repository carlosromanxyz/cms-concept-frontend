import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: 'standalone', // Enable serverless deployment
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        // hostname: 'cms-concept-backend',
        hostname: 'localhost',
        port: '1337',
        pathname: '/uploads/**',
      }
    ]
  }
};

export default nextConfig;
