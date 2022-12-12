/** @type {import('next').NextConfig} */

const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  reactStrictMode: true,
  images: {
    domains: ['greenliving.s3.eu-central-1.amazonaws.com'],
  },
}

module.exports = nextConfig
