/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  swcMinify: true,
  // Bun is automatically detected and used when available
  // Enable static exports
  output: 'export',
  // Disable image optimization for static export
  images: {
    unoptimized: true
  }
};

module.exports = config; 