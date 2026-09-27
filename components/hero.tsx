import Image from "next/image"
import { ArrowDown, CheckCircle2, FileText, MapPin } from "lucide-react"
import ResumeButton from "@/components/resume-button"
import NumberTicker from "@/components/ui/number-ticker"
import Reveal from "@/components/ui/reveal"
import TechIcon from "@/components/ui/tech-icon"
import { companies, openSource, profile, skills, stats } from "@/lib/data"

export default function Hero({ resumeUrl }: { resumeUrl?: string }) {
  return (
    <section id="home" className="relative flex min-h-svh items-center pb-16 pt-32">
      <div className="mx-auto grid w-full max-w-6xl items-center gap-14 px-4 md:px-6 lg:grid-cols-[1.35fr_1fr]">
        <div>
          {profile.availability && (
            <Reveal>
              <p className="mb-8 inline-flex items-center gap-2.5 rounded-full border border-zinc-800 bg-zinc-900/60 py-1.5 pl-3 pr-4 text-sm text-zinc-300">
                <span className="relative flex size-2">
                  <span className="absolute inline-flex size-full animate-pulse-ring rounded-full bg-brand-400" />
                  <span className="relative inline-flex size-2 rounded-full bg-brand-400" />
                </span>
                {profile.availability}
                <span className="hidden text-zinc-600 sm:inline">·</span>
                <span className="hidden items-center gap-1 text-zinc-400 sm:inline-flex">
                  <MapPin className="size-3.5" />
                  {profile.location}
                </span>
              </p>
            </Reveal>
          )}

          {/* Headline and portrait are not wrapped in Reveal: they are the largest
              content on first paint and must be visible before JavaScript loads. */}
          <div>
            <p className="mb-3 font-mono text-sm text-zinc-400">{profile.name}</p>
            <h1 className="text-4xl font-semibold leading-[1.05] tracking-tight text-zinc-50 text-balance sm:text-5xl md:text-6xl">
              {profile.role} building <span className="text-shine">enterprise</span> React products.
            </h1>
          </div>

          <Reveal delay={0.15}>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-zinc-400 text-pretty">{profile.summary}</p>
          </Reveal>

          <Reveal delay={0.25}>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <a
                href="#experience"
                className="group inline-flex items-center gap-2 rounded-xl bg-brand-400 px-5 py-3 font-medium text-zinc-950 transition-colors hover:bg-brand-300"
              >
                See my work
                <ArrowDown className="size-4 transition-transform group-hover:translate-y-0.5" />
              </a>
              <ResumeButton
                resumeUrl={resumeUrl}
                className="inline-flex items-center gap-2 rounded-xl border border-zinc-700 bg-zinc-900/50 px-5 py-3 font-medium text-zinc-100 transition-colors hover:border-zinc-500"
              >
                <FileText className="size-4" />
                {resumeUrl ? "Download resume" : "Request resume"}
              </ResumeButton>
              <a
                href="#contact"
                className="rounded-xl px-4 py-3 font-medium text-zinc-400 transition-colors hover:text-zinc-100"
              >
                Contact
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.35}>
            <dl className="mt-12 grid max-w-xl grid-cols-3 gap-6 border-t border-zinc-800/80 pt-8">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <dt className="sr-only">{stat.label}</dt>
                  <dd className="text-3xl font-semibold tracking-tight text-zinc-50 md:text-4xl">
                    <NumberTicker value={stat.value} decimals={stat.decimals} />
                    <span className="text-brand-400">{stat.suffix}</span>
                  </dd>
                  <dd aria-hidden="true" className="mt-1 text-sm leading-snug text-zinc-500">
                    {stat.label}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>

        <div className="relative mx-auto w-full max-w-sm lg:max-w-none">
          <div className="relative aspect-4/5 overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900">
            <Image
              src="/myImage.jpg"
              alt={`Portrait of ${profile.name}`}
              fill
              loading="eager"
              fetchPriority="high"
              sizes="(min-width: 1024px) 420px, 90vw"
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-linear-to-t from-zinc-950/80 via-transparent to-transparent" />
            <div className="absolute inset-x-4 bottom-4 flex flex-wrap gap-2">
              {skills.core.slice(0, 4).map((tech) => (
                <span
                  key={tech.name}
                  className="flex items-center gap-1.5 rounded-full border border-white/10 bg-zinc-950/70 px-2.5 py-1 text-xs text-zinc-200 backdrop-blur"
                >
                  <TechIcon tech={tech} className="size-3.5" />
                  {tech.name}
                </span>
              ))}
            </div>
          </div>

          <a
            href="#opensource"
            className="absolute -left-4 top-8 flex items-center gap-3 rounded-2xl border border-zinc-700/80 bg-zinc-900/90 px-4 py-3 shadow-2xl shadow-black/40 backdrop-blur transition-colors hover:border-brand-400/60 sm:-left-8"
          >
            <CheckCircle2 className="size-5 shrink-0 text-brand-400" />
            <span className="text-left">
              <span className="block text-sm font-medium text-zinc-100">Merged into MUI-X</span>
              <span className="block font-mono text-xs text-zinc-400">shipped in {openSource.version}</span>
            </span>
          </a>
        </div>

        <Reveal delay={0.45} className="lg:col-span-2">
          <div className="flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-zinc-800/60 pt-8">
            <span className="font-mono text-xs uppercase tracking-widest text-zinc-600">Shipped at</span>
            {companies.map((company) => (
              <span key={company} className="text-base font-medium tracking-tight text-zinc-400">
                {company}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
