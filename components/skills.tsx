import Reveal from "@/components/ui/reveal"
import SectionHeading from "@/components/ui/section-heading"
import SpotlightCard from "@/components/ui/spotlight-card"
import TechIcon from "@/components/ui/tech-icon"
import { figures, formatFigure, skills, type Tech } from "@/lib/data"

function TechList({ items }: { items: Tech[] }) {
  return (
    <ul className="flex flex-wrap gap-2">
      {items.map((tech) => (
        <li
          key={tech.name}
          className="flex items-center gap-2 rounded-lg border border-zinc-800 bg-zinc-950/60 px-3 py-1.5 text-sm text-zinc-300 transition-colors hover:border-zinc-600 hover:text-zinc-50"
        >
          <TechIcon tech={tech} className="size-4 text-zinc-400" />
          {tech.name}
        </li>
      ))}
    </ul>
  )
}

export default function Skills() {
  const marquee = [...skills.core, ...skills.backend, ...skills.tooling, ...skills.testing].filter((tech) => tech.icon)

  return (
    <section id="skills" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionHeading
          index="04"
          label="Skills"
          title="A frontend specialist who can work across the whole stack."
        />

        <div className="grid gap-4 md:grid-cols-3">
          <Reveal className="md:col-span-2 md:row-span-2">
            <SpotlightCard className="flex h-full flex-col p-6 md:p-8">
              <h3 className="text-lg font-semibold text-zinc-50">Core: what I use every day</h3>
              <p className="mt-2 mb-8 text-sm text-zinc-500">The stack behind every production app I&apos;ve shipped.</p>
              <ul className="mb-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
                {skills.core.map((tech) => (
                  <li
                    key={tech.name}
                    className="group flex flex-col items-center gap-3 rounded-xl border border-zinc-800 bg-zinc-950/60 px-2 py-5 text-center transition-colors hover:border-brand-400/40"
                  >
                    <TechIcon
                      tech={tech}
                      className="size-7 text-zinc-400 transition-colors duration-300 group-hover:text-brand-300"
                    />
                    <span className="text-xs text-zinc-300">{tech.name}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-auto border-t border-zinc-800 pt-5 text-sm text-zinc-400">
                Plus modern JavaScript, semantic HTML and CSS, responsive layouts and accessible UI, used daily at
                Finseal and Actify across <span className="text-zinc-200">{formatFigure(figures.platforms)} production platforms</span>.
              </p>
            </SpotlightCard>
          </Reveal>

          <Reveal delay={0.05}>
            <SpotlightCard className="h-full p-6">
              <h3 className="mb-5 font-semibold text-zinc-50">Backend & data</h3>
              <TechList items={skills.backend} />
            </SpotlightCard>
          </Reveal>

          <Reveal delay={0.1}>
            <SpotlightCard className="h-full p-6">
              <h3 className="mb-5 font-semibold text-zinc-50">Cloud & tooling</h3>
              <TechList items={skills.tooling} />
            </SpotlightCard>
          </Reveal>

          <Reveal delay={0.15}>
            <SpotlightCard className="h-full p-6">
              <h3 className="mb-5 font-semibold text-zinc-50">Testing</h3>
              <TechList items={skills.testing} />
            </SpotlightCard>
          </Reveal>

          <Reveal delay={0.2} className="md:col-span-2">
            <SpotlightCard className="h-full p-6">
              <h3 className="mb-5 font-semibold text-zinc-50">How I build</h3>
              <ul className="flex flex-wrap gap-2">
                {skills.practices.map((practice) => (
                  <li
                    key={practice}
                    className="rounded-full border border-brand-400/20 bg-brand-400/5 px-3.5 py-1.5 text-sm text-brand-200"
                  >
                    {practice}
                  </li>
                ))}
              </ul>
            </SpotlightCard>
          </Reveal>
        </div>
      </div>

      <div
        aria-hidden="true"
        className="no-print mt-16 overflow-hidden mask-[linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]"
      >
        <div className="flex w-max animate-marquee gap-12 pr-12 hover:[animation-play-state:paused]">
          {[...marquee, ...marquee].map((tech, i) => (
            <span key={i} className="flex items-center gap-3 text-zinc-600">
              <TechIcon tech={tech} className="size-6" />
              <span className="text-lg font-medium">{tech.name}</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
