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
  },
  images: {
    loader: 'imgix',
    path: ''
  }
};

module.exports = nextConfig;
