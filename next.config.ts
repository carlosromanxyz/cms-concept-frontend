import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: 'standalone', // Enable serverless deployment
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        // hostname: 'localhost',
        hostname: '127.0.0.1',
        port: '1337',
        pathname: '/uploads/**',
      },
      {
        protocol: 'https',
        hostname: 'unsplash.it',
      }
    ]
  }
};

export default nextConfig;
