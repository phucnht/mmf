/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  exportPathMap: function () {
    return {
      '/': { page: '/' },
      '/metaverse': { page: '/metaverse' },
      '/dashboard': { page: '/dashboard' },
      '/account': { page: '/account' },
      '/inventory': { page: '/inventory' },
      '/inventory/airdrop': { page: '/inventory/airdrop' }
    };
  },
  async redirects() {
    return [
      {
        source: '/inventory',
        destination: '/inventory/airdrop',
        permanent: true
      }
    ];
  },
  images: {
    loader: 'imgix',
    path: ''
  },
  eslint: {
    ignoreDuringBuilds: true
  }
};

module.exports = nextConfig;
