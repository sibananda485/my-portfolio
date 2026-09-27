"use client"

import { useEffect, useRef } from "react"

// Fixed dot grid with a soft glow that follows the mouse. Pure CSS
// backgrounds, so it is cheap to paint; the glow is skipped on touch devices.
export default function Background() {
  const glowRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const glow = glowRef.current
    if (!glow || !window.matchMedia("(pointer: fine)").matches) return

    let frame = 0
    const onMove = (e: PointerEvent) => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(() => {
        glow.style.setProperty("--gx", `${e.clientX}px`)
        glow.style.setProperty("--gy", `${e.clientY}px`)
        glow.style.opacity = "1"
      })
    }
    window.addEventListener("pointermove", onMove, { passive: true })
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener("pointermove", onMove)
    }
  }, [])

  return (
    <div aria-hidden="true" className="no-print pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div
        className="absolute inset-0 opacity-60"
        style={{
          backgroundImage: "radial-gradient(rgb(255 255 255 / 0.09) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
          maskImage: "radial-gradient(ellipse 80% 60% at 50% 0%, black 30%, transparent 80%)",
        }}
      />
      <div className="absolute -top-40 left-1/2 h-[480px] w-[900px] -translate-x-1/2 rounded-full bg-brand-400/[0.07] blur-[120px]" />
      <div
        ref={glowRef}
        className="absolute inset-0 opacity-0 transition-opacity duration-700"
        style={{
          background:
            "radial-gradient(600px circle at var(--gx, 50%) var(--gy, 50%), rgb(198 244 50 / 0.05), transparent 40%)",
        }}
      />
    </div>
  )
}
