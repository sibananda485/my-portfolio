"use client"

import { useRef } from "react"

// A card whose border and surface glow under the pointer (see the
// `spotlight-card` utility in globals.css).
export default function SpotlightCard({
  children,
  className = "",
}: {
  children: React.ReactNode
  className?: string
}) {
  const ref = useRef<HTMLDivElement>(null)

  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const el = ref.current
    if (!el || e.pointerType !== "mouse") return
    const rect = el.getBoundingClientRect()
    el.style.setProperty("--x", `${e.clientX - rect.left}px`)
    el.style.setProperty("--y", `${e.clientY - rect.top}px`)
  }

  const onPointerLeave = () => {
    ref.current?.style.setProperty("--y", "-100%")
  }

  return (
    <div
      ref={ref}
      onPointerMove={onPointerMove}
      onPointerLeave={onPointerLeave}
      className={`spotlight-card rounded-2xl ${className}`}
    >
      {children}
    </div>
  )
}
