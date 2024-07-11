/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  staticPageGenerationTimeout: 300,
  images: {
    domains: [
      'www.notion.so',
      'notion.so',
      'images.unsplash.com',
      'pbs.twimg.com',
      's3.us-west-2.amazonaws.com'
    ],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**'
      }
    ],
    formats: ['image/avif', 'image/webp']
  },
  async redirects() {
    return [
      {
        source: '/nsoc/games',
        destination: '/NSOC/Games/index.html',
        permanent: true
      }
    ];
  }
};

module.exports = nextConfig;
