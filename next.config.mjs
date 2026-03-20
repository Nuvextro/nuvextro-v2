/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  output: 'export',
  basePath: '/nuvextro-v2',
  assetPrefix: '/nuvextro-v2',
  images: {
    unoptimized: true,
  },
}

export default nextConfig
