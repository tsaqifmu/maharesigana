/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "213.210.21.45",
        port: "1337",
      },
    ],
  },
};

export default nextConfig;
