/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compress: true,
  compiler: {
    styledComponents: true,
    removeConsole: process.env.NEXT_PUBLIC_BRANCH === 'production'
  },
  eslint: {
    ignoreDuringBuilds: true
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
};

export default nextConfig;
