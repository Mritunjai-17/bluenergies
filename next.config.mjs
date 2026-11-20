/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  async redirects() {
    return [
      {
        source: '/assets-and-operations',
        destination: '/assets-and-operations/overview/',
        permanent: true
      },
      {
        source: '/investors',
        destination: '/investors/outlook/',
        permanent: true
      },
      {
        source: '/news-and-media',
        destination: '/news-and-media/news/',
        permanent: true
      },
      {
        source: '/contact',
        destination: '/contact/contact-details/',
        permanent: true
      }
    ];
  }
};

export default nextConfig;
