import { ArrowUpRight, Check, GitMerge, GitPullRequest } from "lucide-react"
import Reveal from "@/components/ui/reveal"
import SectionHeading from "@/components/ui/section-heading"
import SpotlightCard from "@/components/ui/spotlight-card"
import { openSource } from "@/lib/data"

export default function OpenSource() {
  const release = openSource.timeline[openSource.timeline.length - 1]

  return (
    <section id="opensource" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionHeading
          index="02"
          label="Open Source"
          title={
            <>
              My fix ships in <span className="whitespace-nowrap text-brand-300">MUI-X</span>, downloaded {openSource.weeklyDownloads} times a
              week.
            </>
          }
        />

        <div className="grid items-start gap-8 lg:grid-cols-2">
          <Reveal>
            <SpotlightCard className="p-6 md:p-8">
              <div className="mb-6 flex flex-wrap items-center gap-3">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-violet-500/15 px-3 py-1 text-xs font-medium text-violet-300">
                  <GitMerge className="size-3.5" /> Merged
                </span>
                <span className="font-mono text-xs text-zinc-500">{openSource.pkg}</span>
              </div>
              <h3 className="text-xl font-semibold tracking-tight text-zinc-50 md:text-2xl">{openSource.title}</h3>

              <dl className="mt-6 space-y-5">
                <div>
                  <dt className="eyebrow text-zinc-500!">The bug</dt>
                  <dd className="mt-1.5 leading-relaxed text-zinc-300">{openSource.problem}</dd>
                </div>
                <div>
                  <dt className="eyebrow">The outcome</dt>
                  <dd className="mt-1.5 leading-relaxed text-zinc-300">{openSource.outcome}</dd>
                </div>
              </dl>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={openSource.pr.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 rounded-xl bg-brand-400 px-4 py-2.5 text-sm font-medium text-zinc-950 transition-colors hover:bg-brand-300"
                >
                  <GitPullRequest className="size-4" />
                  View PR #{openSource.pr.number}
                  <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
                <a
                  href={release.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 rounded-xl border border-zinc-700 px-4 py-2.5 text-sm font-medium text-zinc-100 transition-colors hover:border-zinc-500"
                >
                  {release.detail} release notes
                  <ArrowUpRight className="size-4 text-zinc-500 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
              </div>
            </SpotlightCard>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950 shadow-2xl shadow-black/40">
              <div className="flex items-center gap-2 border-b border-zinc-800 bg-zinc-900/60 px-4 py-3">
                <span className="size-3 rounded-full bg-zinc-700" />
                <span className="size-3 rounded-full bg-zinc-700" />
                <span className="size-3 rounded-full bg-zinc-700" />
                <span className="ml-3 font-mono text-xs text-zinc-500">{openSource.repo}</span>
              </div>

              <div className="p-5 font-mono text-sm md:p-6">
                <p className="text-zinc-500">
                  <span className="text-brand-400">$</span> contribution --repo {openSource.repo}
                </p>
                <ol className="mt-5 space-y-1">
                  {openSource.timeline.map((step, i) => (
                    <li key={step.label}>
                      <Reveal delay={0.25 + i * 0.25} y={6}>
                        <a
                          href={step.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group -mx-2 flex items-center gap-3 rounded-lg px-2 py-2 transition-colors hover:bg-zinc-900"
                        >
                          <Check className="size-4 shrink-0 text-brand-400" />
                          <span className="text-zinc-300">{step.label}</span>
                          <span className="ml-auto text-zinc-500 group-hover:text-brand-300">{step.detail}</span>
                          <ArrowUpRight className="size-3.5 text-zinc-700 group-hover:text-brand-300" />
                        </a>
                      </Reveal>
                    </li>
                  ))}
                </ol>
                <Reveal delay={0.25 + openSource.timeline.length * 0.25} y={0}>
                  <p className="mt-5 text-zinc-500">
                    <span className="text-brand-400">✓</span> shipped in {openSource.pkg}@{openSource.version.slice(1)}
                    <span className="ml-1 inline-block h-4 w-2 translate-y-0.5 animate-caret bg-brand-400" />
                  </p>
                </Reveal>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
