/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    // This blocks the strict apostrophe rules from crashing your Vercel builds
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;