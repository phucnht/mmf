/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  exportPathMap: function () {
    return {
      '/': { page: '/' },
      '/metaverse': { page: '/metaverse' },
      '/metaverse/items': { page: '/metaverse/items' },
      '/metaverse/lands': { page: '/metaverse/lands' },
      '/metaverse/characters': { page: '/metaverse/characters' },
      '/dashboard': { page: '/dashboard' },
      '/dashboard/box': { page: '/dashboard/box' },
      '/dashboard/dashboard': { page: '/dashboard/dashboard' },
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
      },
      {
        source: '/metaverse',
        destination: '/metaverse/items',
        permanent: true
      },
      {
        source: '/dashboard',
        destination: '/dashboard/box',
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
