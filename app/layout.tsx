import type React from "react"
import type { Metadata, Viewport } from "next"
import { Analytics } from "@vercel/analytics/next"
import { Geist, Geist_Mono } from "next/font/google"
import MotionProvider from "@/components/motion-provider"
import { figures, formatFigure, openSource, profile } from "@/lib/data"
import { SITE_URL } from "@/lib/site"
import "./globals.css"

const geistSans = Geist({ subsets: ["latin"], variable: "--font-geist-sans" })
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono" })

const title = `${profile.name}, ${profile.role} (React, TypeScript, Next.js)`
const description = `${profile.role} with ${formatFigure(figures.years)} years building enterprise B2B platforms in React, TypeScript and Next.js. Open source contributor to MUI-X (fix shipped in ${openSource.version}).`

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title,
  description,
  applicationName: `${profile.name} Portfolio`,
  authors: [{ name: profile.name, url: profile.github }],
  keywords: [
    "Frontend Engineer",
    "React Developer",
    "TypeScript",
    "Next.js",
    "Tailwind CSS",
    "Redux Toolkit",
    "TanStack Query",
    "React Flow",
    "MUI",
    "Mumbai",
    profile.name,
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "profile",
    title,
    description,
    url: "/",
    siteName: profile.name,
    locale: "en_IN",
  },
  twitter: { card: "summary_large_image", title, description },
}

export const viewport: Viewport = {
  themeColor: "#09090b",
  colorScheme: "dark",
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  jobTitle: profile.role,
  url: SITE_URL,
  email: `mailto:${profile.email}`,
  image: `${SITE_URL}/myImage.webp`,
  address: { "@type": "PostalAddress", addressLocality: "Mumbai", addressCountry: "IN" },
  sameAs: [profile.github, profile.linkedin],
  knowsAbout: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Redux Toolkit", "TanStack Query", "React Flow", "Node.js"],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="font-sans">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
        />
        <MotionProvider>{children}</MotionProvider>
        <Analytics />
      </body>
    </html>
  )
}
