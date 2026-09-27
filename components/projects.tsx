import Image from "next/image"
import { ArrowUpRight } from "lucide-react"
import { Github } from "@/components/brand-icons"
import Reveal from "@/components/ui/reveal"
import SectionHeading from "@/components/ui/section-heading"
import TiltCard from "@/components/ui/tilt-card"
import { projects } from "@/lib/data"

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionHeading
          index="03"
          label="Projects"
          title="Side projects, built end to end."
          description="Full-stack apps I designed, built and deployed on my own: frontend, API, database and cloud storage."
        />

        <div className="space-y-24 md:space-y-32">
          {projects.map((project, index) => (
            <article key={project.title} className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
              <Reveal className={index % 2 === 1 ? "lg:order-2" : ""}>
                <TiltCard className="group relative overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900 shadow-2xl shadow-black/40">
                  <div className="flex items-center gap-1.5 border-b border-zinc-800 px-4 py-2.5">
                    <span className="size-2.5 rounded-full bg-zinc-700" />
                    <span className="size-2.5 rounded-full bg-zinc-700" />
                    <span className="size-2.5 rounded-full bg-zinc-700" />
                    <span className="ml-3 truncate rounded-md bg-zinc-800/70 px-3 py-0.5 font-mono text-[11px] text-zinc-500">
                      {project.live.replace(/^https?:\/\//, "").replace(/\/$/, "")}
                    </span>
                  </div>
                  <div className="relative aspect-video">
                    <Image
                      src={project.image}
                      alt={`Screenshot of ${project.title}`}
                      fill
                      sizes="(min-width: 1024px) 560px, 95vw"
                      className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
                    />
                  </div>
                </TiltCard>
              </Reveal>

              <Reveal delay={0.1}>
                <p className="eyebrow">{project.kind}</p>
                <h3 className="mt-3 text-3xl font-semibold tracking-tight text-zinc-50 md:text-4xl">{project.title}</h3>
                <p className="mt-4 text-lg leading-relaxed text-zinc-400 text-pretty">{project.description}</p>

                <ul className="mt-6 space-y-2.5">
                  {project.highlights.map((point) => (
                    <li key={point} className="flex gap-3 text-zinc-300">
                      <span aria-hidden="true" className="mt-2.5 h-px w-3 shrink-0 bg-brand-400/70" />
                      {point}
                    </li>
                  ))}
                </ul>

                <ul aria-label="Tech stack" className="mt-6 flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <li
                      key={tech}
                      className="rounded-md border border-zinc-800 bg-zinc-900/70 px-2.5 py-1 font-mono text-xs text-zinc-400"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>

                <div className="mt-8 flex flex-wrap gap-3">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2 rounded-xl bg-brand-400 px-4 py-2.5 text-sm font-medium text-zinc-950 transition-colors hover:bg-brand-300"
                  >
                    Live demo
                    <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl border border-zinc-700 px-4 py-2.5 text-sm font-medium text-zinc-100 transition-colors hover:border-zinc-500"
                  >
                    <Github className="size-4" />
                    Source
                  </a>
                </div>
              </Reveal>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
