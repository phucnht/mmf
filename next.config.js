/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  exportPathMap: function () {
    return {
      '/': { page: '/' }
    };
  },
  images: {
    loader: 'imgix',
    path: ''
  },
  async redirects() {
    return [
      {
        source: '/marketplace',
        destination: '/marketplace/inventory',
        permanent: true
      },
      {
        source: '/marketplace/inventory',
        destination: '/marketplace/inventory/airdrop',
        permanent: true
      }
    ];
  }
};

module.exports = nextConfig;
