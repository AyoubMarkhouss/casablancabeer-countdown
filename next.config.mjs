/** @type {import('next').NextConfig} */
const nextConfig = {
  // reactStrictMode: true,
  distDir: "_next",
  images: {
    unoptimized: true,
  },
  typescript: { ignoreBuildErrors: true },
  eslint: { ignoreDuringBuilds: true },
  swcMinify: true,
};

export default nextConfig;
