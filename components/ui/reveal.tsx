"use client"

import { motion } from "motion/react"

// Fades and lifts its children into view once. The `reveal` class lets the
// <noscript> and print styles force the content visible.
export default function Reveal({
  children,
  delay = 0,
  y = 24,
  className = "",
}: {
  children: React.ReactNode
  delay?: number
  y?: number
  className?: string
}) {
  return (
    <motion.div
      className={`reveal ${className}`}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -10% 0px" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}
