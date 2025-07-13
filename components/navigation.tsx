"use client"

import { useEffect, useState } from "react"

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)

      // Update active section
      const sections = ["home", "about", "skills", "experience", "projects", "contact"]
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      if (currentSection) setActiveSection(currentSection)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ]

  return (
    <nav
      className={`fixed top-0 w-full z-40 transition-all duration-300 ${
        isScrolled ? "bg-neutral-950/80 backdrop-blur-xl border-b border-neutral-800" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <a
            href="#home"
            className="text-2xl font-bold bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent"
          >
            SIBA
          </a>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`relative px-3 py-2 text-sm font-medium transition-colors duration-300 ${
                  activeSection === item.id ? "text-primary-400" : "text-neutral-300 hover:text-white"
                }`}
              >
                {item.label}
                {activeSection === item.id && (
                  <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-primary-400 to-accent-400" />
                )}
              </a>
            ))}
          </div>

          <a
            href="#contact"
            className="hidden md:inline-flex items-center px-6 py-2 bg-gradient-to-r from-primary-500 to-accent-500 text-white font-medium rounded-full hover:shadow-lg hover:shadow-primary-500/25 transition-all duration-300"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </nav>
  )
}
