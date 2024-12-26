/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['lobinstores.com','localhost'], // Add domains for Image component
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },

  // Enable experimental features if needed
  experimental: {
    // Enable if you need app directory features
    appDir: true,
    // Enable server components
    serverComponents: true,
    // Enable server actions
    serverActions: true,
  },
 compress: true,
 output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
  experimental: {
    optimizePackageImports: ['radix-ui'],
  },
    webpack: (config, { isServer }) => {
      if (!isServer) {
        config.resolve.fallback = {
          fs: false,
          path: false,
          os: false,
        };
      }
      return config;
    },
  };


module.exports = nextConfig;
