import { Lock } from "lucide-react"
import Reveal from "@/components/ui/reveal"
import SectionHeading from "@/components/ui/section-heading"
import TracingBeam from "@/components/ui/tracing-beam"
import { experience } from "@/lib/data"

export default function Experience() {
  return (
    <section id="experience" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionHeading
          index="01"
          label="Experience"
          title="Shipping enterprise frontends since 2024."
          description="Procurement, HR, CRM, learning and vendor platforms used by business teams every day."
        />

        <TracingBeam>
          <ol className="space-y-14">
            {experience.map((job, index) => (
              <li key={job.company} className="relative pl-10 md:pl-14">
                <span
                  aria-hidden="true"
                  className={`absolute left-0 top-1.5 grid size-3.75 place-items-center rounded-full border md:size-5.75 ${
                    job.current ? "border-brand-400 bg-brand-400/15" : "border-zinc-700 bg-zinc-950"
                  }`}
                >
                  <span className={`size-1.5 rounded-full md:size-2 ${job.current ? "bg-brand-400" : "bg-zinc-600"}`} />
                </span>

                <Reveal delay={index * 0.05}>
                  <div className="grid gap-6 md:grid-cols-[220px_1fr] md:gap-10">
                    <div>
                      <p className="font-mono text-sm text-zinc-500">{job.period}</p>
                      {job.current && (
                        <span className="mt-2 inline-block rounded-full bg-brand-400/10 px-2.5 py-0.5 font-mono text-xs text-brand-300">
                          Current
                        </span>
                      )}
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold tracking-tight text-zinc-50 md:text-2xl">
                        {job.role} <span className="text-zinc-500">at</span>{" "}
                        <span className="text-brand-300">{job.company}</span>
                      </h3>
                      <p className="mt-3 text-zinc-300 text-pretty">{job.summary}</p>
                      <ul className="mt-5 space-y-3">
                        {job.highlights.map((point) => (
                          <li key={point} className="flex gap-3 text-[15px] leading-relaxed text-zinc-400">
                            <span aria-hidden="true" className="mt-2.5 h-px w-3 shrink-0 bg-brand-400/70" />
                            {point}
                          </li>
                        ))}
                      </ul>
                      <ul aria-label="Tech stack" className="mt-6 flex flex-wrap gap-2">
                        {job.stack.map((tech) => (
                          <li
                            key={tech}
                            className="rounded-md border border-zinc-800 bg-zinc-900/70 px-2.5 py-1 font-mono text-xs text-zinc-400"
                          >
                            {tech}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>
        </TracingBeam>

        <Reveal>
          <p className="mt-14 flex items-center gap-2 pl-10 text-sm text-zinc-500 md:pl-14">
            <Lock className="size-3.5" />
            Client and employer work is under NDA, so no screenshots here. Happy to walk through it in an interview.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
