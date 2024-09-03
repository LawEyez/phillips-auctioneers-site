/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: 'properties.phillipsauctioneers.co.ke',
        protocol: 'https'
      },
      {
        hostname: 'images.unsplash.com',
        protocol: 'https'
      },
    ]
  }
};

export default nextConfig;
