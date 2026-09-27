import type { Tech } from "@/lib/data"

// Brand logo from simple-icons, or the first letter when there is none.
export default function TechIcon({ tech, className = "size-4" }: { tech: Tech; className?: string }) {
  if (!tech.icon) {
    return (
      <span
        aria-hidden="true"
        className={`${className} inline-grid place-items-center rounded-sm bg-zinc-700 font-mono text-[10px] font-bold text-zinc-200`}
      >
        {tech.name[0]}
      </span>
    )
  }
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="currentColor">
      <path d={tech.icon.path} />
    </svg>
  )
}
