import { Github } from "@/components/brand-icons"
import { profile } from "@/lib/data"

export default function Footer() {
  return (
    <footer className="border-t border-zinc-900 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 text-sm text-zinc-500 md:flex-row md:px-6">
        <p>
          &copy; {new Date().getFullYear()} {profile.name}. Built with Next.js, Tailwind CSS and Motion.
        </p>
        <div className="no-print flex items-center gap-5">
          <span className="hidden md:inline">
            Press <kbd className="rounded border border-zinc-700 px-1.5 py-0.5 font-mono text-xs text-zinc-400">⌘K</kbd> /{" "}
            <kbd className="rounded border border-zinc-700 px-1.5 py-0.5 font-mono text-xs text-zinc-400">Ctrl K</kbd>{" "}
            to navigate
          </span>
          <a
            href={profile.source}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 transition-colors hover:text-zinc-200"
          >
            <Github className="size-4" /> View source
          </a>
        </div>
      </div>
    </footer>
  )
}
