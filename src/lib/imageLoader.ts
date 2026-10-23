// Static export has no image optimization server, so images are served as-is.
// Local images need the GitHub Pages base path prepended; remote URLs pass through.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ''

export default function imageLoader({ src, width }: { src: string; width: number; quality?: number }) {
  if (src.startsWith('/')) {
    return `${basePath}${src}?w=${width}`
  }
  return src
}
