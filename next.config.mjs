/** @type {import('next').NextConfig} */
const nextConfig = {
  // images: {
  //   // domains: ['file-upload-and-sharing-web-app.vercel.app/'],
  //   domains: ['http://localhost:3000'],
  // },
  // images: {
  //   remotePatterns: [
  //     {
  //       protocol: 'https',
  //       hostname: 'localhost',
  //       port: '3000',
  //     },
  //   ],
  // },
  images: {
    domains: ['file-upload-and-sharing-web-app.vercel.app'], // Add localhost to the domains array
  },


  // images: {
  //   remotePatterns: [
  //     {
  //       protocol: 'http',
  //       hostname: '**',
  //       port: '',
  //       pathname: '',
  //     },
  //   ],
  // },
};

export default nextConfig;
