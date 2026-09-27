// Import this only from the /recruiter route so the resume URL never reaches the
// HTML or client JavaScript of any other page.
export const recruiter = {
  resumeUrl: "https://entryedge.s3.ap-south-1.amazonaws.com/12-1777404599030-sibaResume_v11.pdf",
}

export type RecruiterInfo = typeof recruiter
