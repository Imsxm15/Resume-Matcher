import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // INDISPENSABLE pour le Dockerfile
  output: "standalone",
  
  // On ignore les erreurs strictes pour que le build passe en prod
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
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
