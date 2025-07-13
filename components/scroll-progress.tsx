"use client"

import { useEffect, useState } from "react"

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight
      const currentProgress = (window.scrollY / totalHeight) * 100
      setProgress(currentProgress)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="fixed top-0 left-0 w-full h-1 bg-neutral-800 z-50">
      <div
        className="h-full bg-gradient-to-r from-primary-500 to-accent-500 transition-all duration-300 ease-out"
        style={{ width: `${progress}%` }}
      />
    </div>
  )
}
