import { FileDown, Mail, Phone } from "lucide-react"
import { Whatsapp } from "@/components/brand-icons"
import Reveal from "@/components/ui/reveal"
import TechIcon from "@/components/ui/tech-icon"
import { figures, formatFigure, openSource, profile, skills } from "@/lib/data"
import type { RecruiterInfo } from "@/lib/recruiter"

// At-a-glance summary shown only on /recruiter, directly under the hero.
export default function RecruiterBrief({ recruiter }: { recruiter: RecruiterInfo }) {
  const facts = [
    { label: "Looking for", value: profile.availability ?? profile.role },
    { label: "Experience", value: `${formatFigure(figures.years)} years · ${formatFigure(figures.platforms)} B2B platforms` },
    { label: "Based in", value: profile.location },
    { label: "Open source", value: `Merged fix in MUI-X ${openSource.version}` },
  ]

  return (
    <section aria-labelledby="recruiter-brief" className="relative pb-8">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <Reveal>
          <div className="rounded-3xl border border-brand-400/30 bg-brand-400/[0.04] p-6 md:p-8">
            <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
              <h2 id="recruiter-brief" className="eyebrow">
                Recruiter quick view
              </h2>
              <span className="font-mono text-xs text-zinc-500">Everything you need in 30 seconds</span>
            </div>

            <dl className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {facts.map((fact) => (
                <div key={fact.label}>
                  <dt className="text-xs uppercase tracking-wider text-zinc-500">{fact.label}</dt>
                  <dd className="mt-1 font-medium text-zinc-100">{fact.value}</dd>
                </div>
              ))}
            </dl>

            <div className="mt-6 flex flex-wrap gap-2">
              {skills.core.slice(0, 7).map((tech) => (
                <span
                  key={tech.name}
                  className="flex items-center gap-1.5 rounded-full border border-zinc-800 bg-zinc-900 px-3 py-1 text-sm text-zinc-300"
                >
                  <TechIcon tech={tech} className="size-3.5" />
                  {tech.name}
                </span>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-3 border-t border-zinc-800 pt-6">
              <a
                href={recruiter.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-brand-400 px-4 py-2.5 text-sm font-medium text-zinc-950 transition-colors hover:bg-brand-300"
              >
                <FileDown className="size-4" /> Download resume (PDF)
              </a>
              <a
                href={`tel:${profile.phone.replace(/\s/g, "")}`}
                className="inline-flex items-center gap-2 rounded-xl border border-zinc-700 px-4 py-2.5 text-sm font-medium text-zinc-100 transition-colors hover:border-zinc-500"
              >
                <Phone className="size-4" /> {profile.phone}
              </a>
              <a
                href={profile.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-zinc-700 px-4 py-2.5 text-sm font-medium text-zinc-100 transition-colors hover:border-[#25D366]/60"
              >
                <Whatsapp className="size-4 text-[#25D366]" /> WhatsApp
              </a>
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-2 rounded-xl border border-zinc-700 px-4 py-2.5 text-sm font-medium text-zinc-100 transition-colors hover:border-zinc-500"
              >
                <Mail className="size-4" /> {profile.email}
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
