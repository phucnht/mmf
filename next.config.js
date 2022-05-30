/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config, { webpack }) => {
    config.plugins.push(
      new webpack.IgnorePlugin({
        resourceRegExp: /^electron$/,
      }),
    );
    return config;
  },
  images: {
    domains: ['my-metafarm-dev.s3.amazonaws.com'],
  },
};

module.exports = nextConfig;
