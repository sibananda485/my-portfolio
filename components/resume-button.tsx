import type { ReactNode } from "react"
import { profile } from "@/lib/data"

const requestHref = `mailto:${profile.email}?subject=${encodeURIComponent("Resume request")}`

// Without a resumeUrl (every page except /recruiter) the PDF location is never
// rendered; the button opens a pre-filled "Resume request" email instead.
export default function ResumeButton({
  resumeUrl,
  className,
  children,
}: {
  resumeUrl?: string
  className?: string
  children: ReactNode
}) {
  if (!resumeUrl) {
    return (
      <a href={requestHref} title="Email me to request my resume" className={className}>
        {children}
      </a>
    )
  }

  return (
    <a href={resumeUrl} target="_blank" rel="noopener noreferrer" className={className}>
      {children}
    </a>
  )
}
