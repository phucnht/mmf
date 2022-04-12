/* eslint-disable @typescript-eslint/no-var-requires */
const withTM = require('next-transpile-modules')(['three']);
const withVideos = require('next-videos');

/** @type {import('next').NextConfig} */
module.exports = withVideos(
  withTM({
    images: {
      domains: [
        'vicapay-test.sgp1.digitaloceanspaces.com',
        'master.mymetafarm.com',
        'pegaxy.io',
        'my-metafarm-dev.s3.amazonaws.com',
        'd9hvi1ehclsbh.cloudfront.net'
      ]
    },
    reactStrictMode: true,
    exportPathMap: function () {
      return {
        '/': { page: '/' },
        '/404': { page: '/404' },
        '/500': { page: '/500' }
        // '/metaverse': { page: '/metaverse' },
        // '/marketplace': { page: '/marketplace' },
        // '/marketplace/items': { page: '/marketplace/items' },
        // '/marketplace/lands': { page: '/marketplace/lands' },
        // '/marketplace/characters': { page: '/marketplace/characters' },
        // '/dashboard': { page: '/dashboard' },
        // '/dashboard/box': { page: '/dashboard/box' },
        // '/dashboard/dashboard': { page: '/dashboard/dashboard' },
        // '/account': { page: '/account' },
        // '/inventory': { page: '/inventory' },
        // '/inventory/airdrop': { page: '/inventory/airdrop' }
      };
    },
    // async redirects() {
    //   return [
    //     {
    //       source: '/inventory',
    //       destination: '/inventory/airdrop',
    //       permanent: true
    //     },
    //     {
    //       source: '/marketplace',
    //       destination: '/marketplace/items',
    //       permanent: true
    //     },
    //     {
    //       source: '/dashboard',
    //       destination: '/dashboard/box',
    //       permanent: true
    //     }
    //   ];
    // },
    eslint: {
      ignoreDuringBuilds: true
    }
  })
);
