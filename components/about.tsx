import Reveal from "@/components/ui/reveal"
import SectionHeading from "@/components/ui/section-heading"
import { about } from "@/lib/data"

export default function About() {
  return (
    <section id="about" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionHeading index="05" label="About" title="Calm interfaces for complicated work." />

        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr]">
          <Reveal>
            <div className="space-y-5 text-lg leading-relaxed text-zinc-300 text-pretty">
              {about.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <div className="mt-8 rounded-2xl border border-zinc-800 bg-zinc-900/50 p-5">
              <p className="eyebrow">What I&apos;m looking for</p>
              <p className="mt-2 text-zinc-300">{about.lookingFor}</p>
            </div>
          </Reveal>

          <ol className="space-y-4">
            {about.principles.map((principle, i) => (
              <li key={principle.title}>
                <Reveal delay={i * 0.08}>
                  <div className="flex gap-5 rounded-2xl border border-zinc-800 p-5 transition-colors hover:border-zinc-700">
                    <span className="font-mono text-sm text-brand-400">0{i + 1}</span>
                    <div>
                      <h3 className="font-semibold text-zinc-50">{principle.title}</h3>
                      <p className="mt-1 text-zinc-400">{principle.body}</p>
                    </div>
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
