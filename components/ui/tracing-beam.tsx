"use client"

import { useRef } from "react"
import { motion, useScroll, useSpring } from "motion/react"

// A vertical line that fills in as the timeline scrolls past.
export default function TracingBeam({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 70%", "end 60%"] })
  const scaleY = useSpring(scrollYProgress, { stiffness: 200, damping: 40, restDelta: 0.001 })

  return (
    <div ref={ref} className="relative">
      <div aria-hidden="true" className="absolute bottom-0 left-[7px] top-2 w-px bg-zinc-800 md:left-[11px]">
        <motion.div style={{ scaleY }} className="h-full w-full origin-top bg-linear-to-b from-brand-400 via-brand-400 to-brand-400/0" />
      </div>
      {children}
    </div>
  )
}
