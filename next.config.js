/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ['@tremor/react'],
  experimental: { appDir: true },
  async redirects () {
    return [
      {
        source: '/',
        destination: '/dashboard',
        permanent: true
      }
    ]
  }
}

module.exports = nextConfig
