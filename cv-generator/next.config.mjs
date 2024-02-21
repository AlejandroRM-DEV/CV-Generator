/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: false,
  experimental: {
    serverComponentsExternalPackages: ['@react-pdf/renderer'],
  }
};

export default nextConfig;
