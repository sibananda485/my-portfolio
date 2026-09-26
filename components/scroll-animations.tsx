"use client"

import { useEffect } from "react"

// Adds `animate-fade-in` to `.animate-on-scroll` elements as they enter the viewport.
export default function ScrollAnimations() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in")
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" },
    )

    document.querySelectorAll(".animate-on-scroll").forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return null
}
