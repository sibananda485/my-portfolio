"use client"

import { useEffect, useState } from "react"
import { motion } from "motion/react"
import { Command, Menu, X } from "lucide-react"
import CommandPalette from "@/components/command-palette"
import { navItems } from "@/lib/nav"

export default function Navigation({ resumeUrl }: { resumeUrl?: string }) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState<string | null>(null)
  const [menuOpen, setMenuOpen] = useState(false)
  const [paletteOpen, setPaletteOpen] = useState(false)
  const [shortcut, setShortcut] = useState("⌘K")

  useEffect(() => {
    if (!/Mac|iPhone|iPad/.test(navigator.userAgent)) setShortcut("Ctrl K")

    const onScroll = () => setIsScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })

    // A section is active while it crosses the middle band of the viewport
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActiveSection(entry.target.id)
        }
      },
      { rootMargin: "-45% 0px -50% 0px" },
    )
    const sections = [document.getElementById("home"), ...navItems.map(({ id }) => document.getElementById(id))]
    sections.forEach((el) => el && observer.observe(el))

    return () => {
      window.removeEventListener("scroll", onScroll)
      observer.disconnect()
    }
  }, [])

  useEffect(() => {
    if (!menuOpen) return
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false)
    }
    window.addEventListener("keydown", onKeyDown)
    return () => window.removeEventListener("keydown", onKeyDown)
  }, [menuOpen])

  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      <header className="no-print fixed inset-x-0 top-0 z-40 px-4 pt-4">
        <nav
          aria-label="Main"
          className={`mx-auto flex max-w-6xl items-center justify-between rounded-2xl border px-3 py-2 transition-[background-color,border-color,box-shadow] duration-300 md:px-4 ${
            isScrolled || menuOpen
              ? "border-zinc-800/80 bg-zinc-950/75 shadow-lg shadow-black/20 backdrop-blur-xl"
              : "border-transparent bg-transparent"
          }`}
        >
          <a href="#home" onClick={closeMenu} className="flex items-center gap-2 rounded-lg px-1 py-1">
            <span className="grid size-8 place-items-center rounded-lg bg-brand-400 font-mono text-sm font-bold text-zinc-950">
              SS
            </span>
            <span className="hidden font-semibold tracking-tight text-zinc-100 sm:inline">Sibananda Sahu</span>
          </a>

          <ul className="hidden items-center gap-1 lg:flex">
            {navItems.map((item) => {
              const active = activeSection === item.id
              return (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    aria-current={active ? "location" : undefined}
                    className={`relative block rounded-full px-3.5 py-1.5 text-sm transition-colors duration-200 ${
                      active ? "text-zinc-50" : "text-zinc-400 hover:text-zinc-100"
                    }`}
                  >
                    {active && (
                      <motion.span
                        layoutId="nav-active"
                        className="absolute inset-0 -z-10 rounded-full bg-zinc-800"
                        transition={{ type: "spring", stiffness: 400, damping: 32 }}
                      />
                    )}
                    {item.label}
                  </a>
                </li>
              )
            })}
          </ul>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setPaletteOpen(true)}
              aria-label="Open command menu"
              className="flex items-center gap-2 rounded-lg border border-zinc-800 bg-zinc-900/60 px-2.5 py-1.5 text-xs text-zinc-400 transition-colors hover:border-zinc-700 hover:text-zinc-100"
            >
              <Command className="size-3.5" />
              <kbd className="hidden font-mono sm:inline">{shortcut}</kbd>
            </button>
            <a
              href="#contact"
              className="hidden rounded-lg bg-brand-400 px-4 py-1.5 text-sm font-medium text-zinc-950 transition-colors hover:bg-brand-300 md:inline-flex"
            >
              Let&apos;s talk
            </a>
            <button
              type="button"
              onClick={() => setMenuOpen((open) => !open)}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              className="rounded-lg p-1.5 text-zinc-300 transition-colors hover:text-white lg:hidden"
            >
              {menuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </nav>

        {menuOpen && (
          <motion.ul
            id="mobile-menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            className="mx-auto mt-2 flex max-w-6xl flex-col gap-1 rounded-2xl border border-zinc-800 bg-zinc-950/95 p-2 backdrop-blur-xl lg:hidden"
          >
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={closeMenu}
                  className={`block rounded-xl px-4 py-3 text-base transition-colors ${
                    activeSection === item.id ? "bg-zinc-800 text-zinc-50" : "text-zinc-300 hover:text-white"
                  }`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </motion.ul>
        )}
      </header>

      <CommandPalette open={paletteOpen} onOpenChange={setPaletteOpen} resumeUrl={resumeUrl} />
    </>
  )
}
