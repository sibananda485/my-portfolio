import Navigation from "@/components/navigation"
import Hero from "@/components/hero"
import About from "@/components/about"
import Skills from "@/components/skills"
import Experience from "@/components/experience"
import OpenSource from "@/components/opensource"
import Projects from "@/components/projects"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import ScrollProgress from "@/components/scroll-progress"
import ScrollAnimations from "@/components/scroll-animations"

// The whole site. Rendered by both `/` and `/recruiter`; only /recruiter
// passes a resumeUrl.
export default function Portfolio({ resumeUrl }: { resumeUrl?: string }) {
  return (
    <main className="bg-neutral-950 text-white overflow-x-hidden">
      {/* Without JavaScript the scroll observer never runs, so show everything */}
      <noscript>
        <style>{`.animate-on-scroll { opacity: 1 !important; transform: none !important; }`}</style>
      </noscript>

      {/* Background Elements */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-linear-to-br from-neutral-950 via-neutral-900 to-neutral-950" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl animate-float" />
        <div
          className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "3s" }}
        />
        <div
          className="absolute top-1/2 left-1/2 w-96 h-96 bg-primary-400/5 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "1.5s" }}
        />
      </div>

      <ScrollProgress />
      <Navigation />
      <Hero resumeUrl={resumeUrl} />
      <About />
      <Skills />
      <Experience />
      <OpenSource />
      <Projects />
      <Contact resumeUrl={resumeUrl} />
      <Footer />
      <ScrollAnimations />
    </main>
  )
}
