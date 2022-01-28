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
  }
};

module.exports = nextConfig;
