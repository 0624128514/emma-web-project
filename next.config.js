/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  // Removed output: 'export' to disable static export mode
  // Removed images: { unoptimized: true } to enable Next.js image optimization
};

module.exports = nextConfig;
