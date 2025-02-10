/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["hebbkx1anhila5yf.public.blob.vercel-storage.com"],
  },
  experimental: {
    optimizeCss: true,
    modern: true,
  },
  webpack: (config, { dev, isServer }) => {
    // Only run in production and when not on the server
    if (!dev && !isServer) {
      // Enable granular chunks
      config.optimization.splitChunks.chunks = "all"
      config.optimization.splitChunks.cacheGroups = {
        ...config.optimization.splitChunks.cacheGroups,
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendors",
          chunks: "all",
        },
      }
    }
    return config
  },
}

module.exports = nextConfig

