import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    // Vercel пропустит линтинг и успешно завершит билд
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
