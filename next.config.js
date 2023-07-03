/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  env: {
    OPENAI_API_KEY: process.env.OPENAI_API_KEY,
  },
  exportPathMap: async function (
    defaultPathMap,
    {dev, dir, outDir, distDir, buildId}
  ) {
    return {
      '/': {page: '/'},
    };
  },
  compiler: {
    // Enables the styled-components SWC transform
    styledComponents: true,
  },
};

module.exports = nextConfig;
