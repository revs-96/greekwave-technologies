/** @type {import('next').NextConfig} */

// GitHub Pages serves the site from /<repo-name>/, so the workflow sets
// NEXT_PUBLIC_BASE_PATH (e.g. "/greekwave-technologies"). Locally it is empty.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ''

const nextConfig = {
  output: 'export',
  basePath,
  trailingSlash: true,
  images: {
    loader: 'custom',
    loaderFile: './src/lib/imageLoader.ts',
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
    ],
  },
}

module.exports = nextConfig
