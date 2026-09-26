"use client";

import type { ReactNode } from "react";

// Without a resumeUrl (every page except /recruiter) no link is rendered at
// all, so the PDF location is not exposed in the page.
export default function ResumeButton({
  resumeUrl,
  className,
  children,
}: {
  resumeUrl?: string;
  className?: string;
  children: ReactNode;
}) {
  if (!resumeUrl) {
    return (
      <button
        type="button"
        onClick={() => alert("INFO : Only recruiters can access resume")}
        className={`cursor-pointer ${className ?? ""}`}
      >
        {children}
      </button>
    );
  }

  return (
    <a
      href={resumeUrl}
      target="_blank"
      rel="noopener noreferrer"
      download
      className={className}
    >
      {children}
    </a>
  );
}
