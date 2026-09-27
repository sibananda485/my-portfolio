import type { Metadata } from "next"
import Portfolio from "@/components/portfolio"
import { recruiter } from "@/lib/recruiter"

// Shared privately with recruiters; keep it out of search results.
export const metadata: Metadata = {
  robots: { index: false, follow: false },
}

export default function RecruiterPage() {
  return <Portfolio recruiter={recruiter} />
}
