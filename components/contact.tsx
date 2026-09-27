import { ArrowUpRight, FileText, Mail, Phone } from "lucide-react"
import { Github, Instagram, Linkedin, Whatsapp } from "@/components/brand-icons"
import CopyButton from "@/components/copy-button"
import ResumeButton from "@/components/resume-button"
import Reveal from "@/components/ui/reveal"
import { profile } from "@/lib/data"
import type { RecruiterInfo } from "@/lib/recruiter"

export default function Contact({ recruiter }: { recruiter?: RecruiterInfo }) {
  const links = [
    { label: "LinkedIn", value: "in/sibananda485", href: profile.linkedin, icon: Linkedin },
    { label: "GitHub", value: "sibananda485", href: profile.github, icon: Github },
    { label: "WhatsApp", value: profile.phone, href: profile.whatsappUrl, icon: Whatsapp },
    ...(recruiter ? [] : [{ label: "Instagram", value: "sibananda485", href: profile.instagram, icon: Instagram }]),
  ]

  return (
    <section id="contact" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900/60 px-6 py-14 text-center md:px-16 md:py-20">
            <div
              aria-hidden="true"
              className="absolute -top-32 left-1/2 h-64 w-160 -translate-x-1/2 rounded-full bg-brand-400/15 blur-[100px]"
            />
            <p className="eyebrow relative">06 / Contact</p>
            <h2 className="relative mx-auto mt-4 max-w-2xl text-3xl font-semibold tracking-tight text-zinc-50 text-balance md:text-5xl">
              Hiring for a frontend role? Let&apos;s talk.
            </h2>
            <p className="relative mx-auto mt-5 max-w-xl text-lg text-zinc-400 text-pretty">
              Open to full-time frontend roles. Email is the fastest way to reach me.
            </p>

            <div className="relative mt-10 flex flex-wrap items-center justify-center gap-3">
              <div className="inline-flex overflow-hidden rounded-xl bg-brand-400 font-medium text-zinc-950">
                <a
                  href={`mailto:${profile.email}`}
                  className="inline-flex items-center gap-2 px-5 py-3 transition-colors hover:bg-brand-300"
                >
                  <Mail className="size-4" />
                  {profile.email}
                </a>
                <CopyButton
                  value={profile.email}
                  label="email address"
                  className="border-l border-zinc-950/15 px-3.5 hover:bg-brand-300"
                />
              </div>
              <div className="inline-flex overflow-hidden rounded-xl border border-zinc-700 text-sm font-medium text-zinc-100 transition-colors hover:border-zinc-500">
                <a
                  href={`tel:${profile.phone.replace(/\s/g, "")}`}
                  className="inline-flex items-center gap-2 px-4 py-3 transition-colors hover:bg-zinc-800/60"
                >
                  <Phone className="size-4" />
                  {profile.phone}
                </a>
                <CopyButton
                  value={profile.phone}
                  label="phone number"
                  className="border-l border-zinc-700 px-3.5 text-zinc-400 hover:bg-zinc-800/60 hover:text-zinc-100"
                />
              </div>
              <ResumeButton
                resumeUrl={recruiter?.resumeUrl}
                className="inline-flex items-center gap-2 rounded-xl border border-zinc-700 px-4 py-3 text-sm font-medium text-zinc-100 transition-colors hover:border-zinc-500"
              >
                <FileText className="size-4" />
                {recruiter ? "Download resume" : "Request resume"}
              </ResumeButton>
            </div>

            <ul className="relative mt-10 flex flex-wrap justify-center gap-3">
              {links.map(({ label, value, href, icon: Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-3 rounded-xl border border-zinc-800 bg-zinc-950/50 px-4 py-3 text-left transition-colors hover:border-zinc-600"
                  >
                    <Icon className="size-5 text-zinc-400 group-hover:text-zinc-100" />
                    <span>
                      <span className="block text-xs text-zinc-500">{label}</span>
                      <span className="block text-sm text-zinc-200">{value}</span>
                    </span>
                    <ArrowUpRight className="size-4 text-zinc-600 group-hover:text-brand-300" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
