"use client"

import { useEffect, useState } from "react"
import { Menu, X } from "lucide-react"

const navItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "opensource", label: "Open Source" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
]

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)

      // Update active section
      const currentSection = navItems.find(({ id }) => {
        const element = document.getElementById(id)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      if (currentSection) setActiveSection(currentSection.id)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    if (!menuOpen) return
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false)
    }
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [menuOpen])

  const closeMenu = () => setMenuOpen(false)

  return (
    <nav
      className={`fixed top-0 w-full z-40 transition-all duration-300 ${
        menuOpen
          ? "bg-neutral-950 border-b border-neutral-800"
          : isScrolled
            ? "bg-neutral-950/80 backdrop-blur-xl border-b border-neutral-800"
            : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <a href="#home" onClick={closeMenu} className="group flex items-center gap-0.5 font-mono text-sm font-semibold">
            <span className="text-accent-400 group-hover:text-accent-300 transition-colors duration-300">&lt;</span>
            <span className="bg-linear-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent text-base font-black tracking-wide">SIBA</span>
            <span className="text-accent-400 group-hover:text-accent-300 transition-colors duration-300"> /&gt;</span>
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
                  <div className="absolute bottom-0 left-0 w-full h-0.5 bg-linear-to-r from-primary-400 to-accent-400" />
                )}
              </a>
            ))}
          </div>

          <a
            href="#contact"
            className="hidden md:inline-flex items-center px-6 py-2 bg-linear-to-r from-primary-500 to-accent-500 text-white font-medium rounded-full hover:shadow-lg hover:shadow-primary-500/25 transition-all duration-300"
          >
            Get In Touch
          </a>

          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            className="md:hidden p-2 -mr-2 text-neutral-300 hover:text-white transition-colors duration-300"
          >
            {menuOpen ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>

        {menuOpen && (
          <div id="mobile-menu" className="md:hidden flex flex-col gap-1 pt-4 pb-2">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={closeMenu}
                className={`px-3 py-3 rounded-lg text-base font-medium transition-colors duration-300 ${
                  activeSection === item.id ? "text-primary-400 bg-neutral-800/50" : "text-neutral-300 hover:text-white"
                }`}
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={closeMenu}
              className="mt-3 text-center px-6 py-3 bg-linear-to-r from-primary-500 to-accent-500 text-white font-medium rounded-full"
            >
              Get In Touch
            </a>
          </div>
        )}
      </div>
    </nav>
  )
}
