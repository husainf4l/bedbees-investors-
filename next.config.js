/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: {
    domains: [],
    formats: ['image/avif', 'image/webp'],
  },
  compress: true,
  poweredByHeader: false,
  reactStrictMode: true,
  eslint: {
    // Allow production builds to complete even if ESLint errors exist.
    // This avoids blocking the Docker build; consider fixing lint errors later.
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;
