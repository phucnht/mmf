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
  eslint: {
    ignoreDuringBuilds: true
  }
};

module.exports = nextConfig;
