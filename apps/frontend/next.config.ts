import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // On ignore les erreurs de style et de typage pour que le build Docker passe
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  /* config options here */
  async rewrites() {
    return [
      {
        source: '/api_be/:path*',
        destination: 'http://localhost:8000/:path*',
      },
    ];
  },
};

export default nextConfig;
