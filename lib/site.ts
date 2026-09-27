// Absolute site URL for sitemap and JSON-LD. On Vercel the production URL is
// picked up automatically; set NEXT_PUBLIC_SITE_URL to use a custom domain.
const host = process.env.VERCEL_PROJECT_PRODUCTION_URL

export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? (host ? `https://${host}` : "http://localhost:3000")
).replace(/\/$/, "")
