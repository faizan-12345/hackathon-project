import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 's3-alpha-sig.figma.com',
        port: '',
        pathname: '/img/**',
      },
    ],
  },
  // experimental: {
  //   appDir: true,  // Enable App Directory routing
  // },
};

export default nextConfig;
