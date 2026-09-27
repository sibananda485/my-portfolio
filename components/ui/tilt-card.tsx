"use client"

import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from "motion/react"

// Tilts gently towards the mouse in 3D. Inert for touch and reduced motion.
export default function TiltCard({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const reduceMotion = useReducedMotion()
  const px = useMotionValue(0.5)
  const py = useMotionValue(0.5)
  const spring = { stiffness: 180, damping: 20 }
  const rotateX = useSpring(useTransform(py, [0, 1], [6, -6]), spring)
  const rotateY = useSpring(useTransform(px, [0, 1], [-8, 8]), spring)

  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (reduceMotion || e.pointerType !== "mouse") return
    const rect = e.currentTarget.getBoundingClientRect()
    px.set((e.clientX - rect.left) / rect.width)
    py.set((e.clientY - rect.top) / rect.height)
  }

  const reset = () => {
    px.set(0.5)
    py.set(0.5)
  }

  return (
    <div className="perspective-distant">
      <motion.div
        onPointerMove={onPointerMove}
        onPointerLeave={reset}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className={className}
      >
        {children}
      </motion.div>
    </div>
  )
}
