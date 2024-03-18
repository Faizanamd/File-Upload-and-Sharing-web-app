/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'file-upload-and-sharing-web-app.vercel.app',
      },
    ],
  },
};

export default nextConfig;
