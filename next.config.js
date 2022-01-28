/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/marketplace',
        destination: '/marketplace/inventory',
        permanent: true
      }
    ];
  }
};

module.exports = nextConfig;
