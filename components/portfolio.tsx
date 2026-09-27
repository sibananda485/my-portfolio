import About from "@/components/about"
import Background from "@/components/background"
import Contact from "@/components/contact"
import Experience from "@/components/experience"
import Footer from "@/components/footer"
import Hero from "@/components/hero"
import Navigation from "@/components/navigation"
import OpenSource from "@/components/opensource"
import Projects from "@/components/projects"
import RecruiterBrief from "@/components/recruiter-brief"
import ScrollProgress from "@/components/scroll-progress"
import Skills from "@/components/skills"
import type { RecruiterInfo } from "@/lib/recruiter"

// The whole site. Rendered by both `/` and `/recruiter`; only /recruiter
// passes `recruiter` (the resume URL).
export default function Portfolio({ recruiter }: { recruiter?: RecruiterInfo }) {
  return (
    <>
      {/* Without JavaScript the reveal animations never run, so show everything */}
      <noscript>
        <style>{`.reveal { opacity: 1 !important; transform: none !important; }`}</style>
      </noscript>

      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-60 focus:rounded-lg focus:bg-brand-400 focus:px-4 focus:py-2 focus:text-zinc-950"
      >
        Skip to content
      </a>

      <Background />
      <ScrollProgress />
      <Navigation resumeUrl={recruiter?.resumeUrl} />

      <main id="main" tabIndex={-1} className="overflow-x-clip outline-none">
        <Hero resumeUrl={recruiter?.resumeUrl} />
        {recruiter && <RecruiterBrief recruiter={recruiter} />}
        <Experience />
        <OpenSource />
        <Projects />
        <Skills />
        <About />
        <Contact recruiter={recruiter} />
      </main>

      <Footer />
    </>
  )
}
