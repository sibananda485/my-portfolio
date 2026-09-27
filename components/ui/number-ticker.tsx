"use client"

import { useEffect, useRef } from "react"
import { animate, useInView, useReducedMotion } from "motion/react"

// Counts up to `value` the first time it scrolls into view. The final value
// is rendered on the server so it is correct without JavaScript.
export default function NumberTicker({ value, decimals = 0 }: { value: number; decimals?: number }) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true })
  const reduceMotion = useReducedMotion()

  useEffect(() => {
    const el = ref.current
    if (!inView || !el || reduceMotion) return
    const controls = animate(0, value, {
      duration: 1.4,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => {
        el.textContent = v.toFixed(decimals)
      },
    })
    return () => controls.stop()
  }, [inView, value, decimals, reduceMotion])

  return (
    <span ref={ref} className="tabular-nums">
      {value.toFixed(decimals)}
    </span>
  )
}
