import { ImageResponse } from "next/og"
import { LOGO_PATH, LOGO_VIEWBOX } from "@/lib/logo"

export const size = { width: 180, height: 180 }
export const contentType = "image/png"

// Home-screen icon for iOS, which ignores SVG favicons. iOS rounds the corners
// itself, so the tile is a plain square; the monogram matches app/icon.svg.
export default function AppleIcon() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", background: "#c6f432" }}>
        <svg width="180" height="180" viewBox={LOGO_VIEWBOX}>
          <path fill="#09090b" d={LOGO_PATH} />
        </svg>
      </div>
    ),
    size,
  )
}
