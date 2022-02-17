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
        destination: '/marketplace/items',
        permanent: true
      },
      {
        source: '/inventory',
        destination: '/inventory/airdrop',
        permanent: true
      }
    ];
  }
};

module.exports = nextConfig;
