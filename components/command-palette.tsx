"use client"

import { useEffect, useRef, useState } from "react"
import { Command } from "cmdk"
import { ArrowRight, Check, Copy, ExternalLink, FileDown, Printer, Search } from "lucide-react"
import { Github, Linkedin, Whatsapp } from "@/components/brand-icons"
import { navItems } from "@/lib/nav"
import { profile } from "@/lib/data"

const itemClass =
  "flex cursor-pointer items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-zinc-300 data-[selected=true]:bg-zinc-800 data-[selected=true]:text-zinc-50"
const groupClass =
  "[&_[cmdk-group-heading]]:px-3 [&_[cmdk-group-heading]]:pb-1 [&_[cmdk-group-heading]]:pt-3 [&_[cmdk-group-heading]]:font-mono [&_[cmdk-group-heading]]:text-[11px] [&_[cmdk-group-heading]]:uppercase [&_[cmdk-group-heading]]:tracking-widest [&_[cmdk-group-heading]]:text-zinc-500"

// ⌘K / Ctrl+K menu for jumping around the page and quick actions. Uses a
// native <dialog> so focus trapping and Escape come from the browser.
export default function CommandPalette({
  open,
  onOpenChange,
  resumeUrl,
}: {
  open: boolean
  onOpenChange: (open: boolean) => void
  resumeUrl?: string
}) {
  const dialogRef = useRef<HTMLDialogElement>(null)
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key.toLowerCase() === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        onOpenChange(!open)
      }
    }
    document.addEventListener("keydown", onKeyDown)
    return () => document.removeEventListener("keydown", onKeyDown)
  }, [open, onOpenChange])

  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return
    if (open && !dialog.open) {
      dialog.showModal()
      // showModal() moves focus itself, so put it back on the search box
      dialog.querySelector("input")?.focus()
    }
    if (!open && dialog.open) dialog.close()
  }, [open])

  const run = (action: () => void) => {
    onOpenChange(false)
    action()
  }

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      window.location.href = `mailto:${profile.email}`
    }
  }

  const openUrl = (url: string) => window.open(url, "_blank", "noopener,noreferrer")

  return (
    <>
      <dialog
        ref={dialogRef}
        aria-label="Command menu"
        onClose={() => onOpenChange(false)}
        onClick={(e) => e.target === dialogRef.current && onOpenChange(false)}
        className="no-print fixed inset-x-0 top-[15vh] mx-auto w-[min(560px,calc(100vw-32px))] overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/95 p-0 text-zinc-100 shadow-2xl shadow-black/50 backdrop-blur-xl backdrop:bg-black/60 backdrop:backdrop-blur-sm"
      >
        {open && (
          <Command label="Command menu" loop>
            <div className="flex items-center gap-3 border-b border-zinc-800 px-4">
              <Search className="size-4 shrink-0 text-zinc-500" />
              <Command.Input
                placeholder="Search sections and actions…"
                className="h-14 w-full bg-transparent text-sm text-zinc-100 outline-none placeholder:text-zinc-500"
              />
              <kbd className="rounded border border-zinc-700 px-1.5 py-0.5 font-mono text-[10px] text-zinc-500">ESC</kbd>
            </div>
            <Command.List className="max-h-[min(400px,60vh)] overflow-y-auto p-2">
              <Command.Empty className="px-3 py-8 text-center text-sm text-zinc-500">No results.</Command.Empty>

              <Command.Group heading="Go to" className={groupClass}>
                {navItems.map((item) => (
                  <Command.Item
                    key={item.id}
                    value={`go ${item.label}`}
                    onSelect={() => run(() => document.getElementById(item.id)?.scrollIntoView())}
                    className={itemClass}
                  >
                    <ArrowRight className="size-4 text-zinc-500" />
                    {item.label}
                  </Command.Item>
                ))}
              </Command.Group>

              <Command.Group heading="Actions" className={groupClass}>
                <Command.Item keywords={["mail", "contact"]} onSelect={() => run(copyEmail)} className={itemClass}>
                  <Copy className="size-4 text-zinc-500" />
                  Copy email address
                  <span className="ml-auto font-mono text-xs text-zinc-500">{profile.email}</span>
                </Command.Item>
                {resumeUrl && (
                  <Command.Item keywords={["cv", "pdf"]} onSelect={() => run(() => openUrl(resumeUrl))} className={itemClass}>
                    <FileDown className="size-4 text-zinc-500" />
                    Download resume
                  </Command.Item>
                )}
                <Command.Item keywords={["pdf", "save"]} onSelect={() => run(() => setTimeout(() => window.print(), 100))} className={itemClass}>
                  <Printer className="size-4 text-zinc-500" />
                  Print / save this page as PDF
                </Command.Item>
              </Command.Group>

              <Command.Group heading="Links" className={groupClass}>
                <Command.Item onSelect={() => run(() => openUrl(profile.github))} className={itemClass}>
                  <Github className="size-4 text-zinc-500" />
                  GitHub
                  <ExternalLink className="ml-auto size-3.5 text-zinc-600" />
                </Command.Item>
                <Command.Item keywords={["chat", "message", "phone"]} onSelect={() => run(() => openUrl(profile.whatsappUrl))} className={itemClass}>
                  <Whatsapp className="size-4 text-zinc-500" />
                  WhatsApp
                  <ExternalLink className="ml-auto size-3.5 text-zinc-600" />
                </Command.Item>
                <Command.Item onSelect={() => run(() => openUrl(profile.linkedin))} className={itemClass}>
                  <Linkedin className="size-4 text-zinc-500" />
                  LinkedIn
                  <ExternalLink className="ml-auto size-3.5 text-zinc-600" />
                </Command.Item>
                <Command.Item keywords={["code", "repo"]} onSelect={() => run(() => openUrl(profile.source))} className={itemClass}>
                  <Github className="size-4 text-zinc-500" />
                  Source code of this site
                  <ExternalLink className="ml-auto size-3.5 text-zinc-600" />
                </Command.Item>
              </Command.Group>
            </Command.List>
          </Command>
        )}
      </dialog>

      <div
        role="status"
        aria-live="polite"
        className={`no-print fixed bottom-6 left-1/2 z-60 -translate-x-1/2 transition-all duration-300 ${
          copied ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"
        }`}
      >
        {copied && (
          <span className="flex items-center gap-2 rounded-full border border-zinc-700 bg-zinc-900 px-4 py-2 text-sm text-zinc-100 shadow-xl">
            <Check className="size-4 text-brand-400" /> Email copied
          </span>
        )}
      </div>
    </>
  )
}
