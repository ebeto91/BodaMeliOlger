import type { NextConfig } from "next";

const nextConfig: NextConfig = {
   images: {
    unoptimized: true, // 👈 Desactiva optimización
  },
};

export default nextConfig;
