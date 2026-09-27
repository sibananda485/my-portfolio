import type { MetadataRoute } from "next"
import { SITE_URL } from "@/lib/site"

// /recruiter is deliberately not disallowed here: listing it would advertise
// the URL, and crawlers must be able to fetch it to see its noindex tag.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${SITE_URL}/sitemap.xml`,
  }
}
