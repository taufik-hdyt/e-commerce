/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'http://ency.my.id/api/v1/:path*', // Proxy to Backend
      },
    ];
  },
};

module.exports = nextConfig;
