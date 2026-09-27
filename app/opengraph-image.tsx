import { ImageResponse } from "next/og"
import { figures, formatFigure, openSource, profile } from "@/lib/data"

export const alt = `${profile.name}, ${profile.role}`
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

// The preview card shown when the site link is shared on LinkedIn, Slack, etc.
export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background: "#09090b",
          backgroundImage: "radial-gradient(circle at 85% 10%, rgba(198,244,50,0.18), transparent 45%)",
          color: "#f4f4f5",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 14, fontSize: 26, color: "#a1a1aa" }}>
          <div style={{ width: 14, height: 14, borderRadius: 999, background: "#c6f432" }} />
          {profile.availability ?? profile.location}
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 92, fontWeight: 700, letterSpacing: -3 }}>{profile.name}</div>
          <div style={{ fontSize: 44, color: "#c6f432", marginTop: 8 }}>{profile.role}</div>
          <div style={{ fontSize: 30, color: "#a1a1aa", marginTop: 20 }}>
            React · TypeScript · Next.js · Enterprise B2B
          </div>
        </div>
        <div style={{ display: "flex", gap: 16, fontSize: 24 }}>
          {[
            `${formatFigure(figures.years)} years`,
            `${formatFigure(figures.platforms)} B2B platforms`,
            `MUI-X contributor (${openSource.version})`,
          ].map((item) => (
            <div
              key={item}
              style={{ display: "flex", padding: "10px 22px", border: "1px solid #3f3f46", borderRadius: 999 }}
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    ),
    size,
  )
}
