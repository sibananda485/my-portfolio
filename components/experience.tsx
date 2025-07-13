export default function Experience() {
  const experiences = [
    {
      title: "Software Developer",
      company: "Finseal Software Pvt Ltd",
      duration: "JAN 2025 - Present",
      description:
        "Actively contributing to the end-to-end development of two core products—Sourceware (procurement platform) and PMS (Portfolio Management System)—focused on streamlining client onboarding, master data management, and day-to-day operational workflows",
      skills: ["React", "React Flow", "Tanstack Query", "Tailwind", "Redux Toolkit", "ShadCN", "MUI"],
      current: true,
    },
    {
      title: "Software Developer",
      company: "Actify Inc.",
      duration: "MAR 2024 - JAN 2025",
      description:
        "Played a core role in the frontend architecture and development of multiple B2B platforms, including HRMS, CRM, Vendor Portal, Shipping App, Approval System, and LMS, using React, TypeScript, Redux Toolkit, and modular component design.",
      skills: ["React", "ShadCN", "Tailwind", "Redux Toolkit", "Tanstack Table"],
      current: false,
    },
    {
      title: "Fullstack Engineer Intern",
      company: "Genex Co. Services",
      duration: "JAN 2024 - MAR 2024",
      description:
        "Translated Figma designs into responsive UI using Next.js and Medusa.js, delivering core pages like wishlist, cart, and order. Built full-stack features in collaboration with the team, integrating Node.js backend and enhancing overall user experience and functionality",
      skills: ["Next.js", "TypeScript", "Medusa.js", "Figma", "Stripe"],
      current: false,
    },
  ]

  return (
    <section id="experience" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-2">
        <div className="text-center mb-16 animate-on-scroll opacity-0">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-white">Work</span>{" "}
            <span className="bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">
              Experience
            </span>
          </h2>
          <p className="text-neutral-400 text-lg max-w-2xl mx-auto">
            My professional journey and the impact I've made along the way
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-2 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 to-accent-500 transform md:-translate-x-1/2" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`animate-on-scroll opacity-0 relative flex items-center ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Timeline dot */}
                <div className="absolute left-[1.1px] md:left-1/2 w-4 h-4 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full transform md:-translate-x-1/2 z-10">
                  {exp.current && (
                    <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full animate-ping" />
                  )}
                </div>

                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"} ml-5 md:ml-0`}>
                  <div className="group p-4 sm:p-8 bg-neutral-900/50 backdrop-blur-sm border border-neutral-800 rounded-2xl hover:border-neutral-700 transition-all duration-300 hover:-translate-y-1">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-white mb-1">{exp.title}</h3>
                        <p className="text-primary-400 font-medium">{exp.company}</p>
                      </div>
                      <div className="flex items-center gap-2 mt-2 md:mt-0">
                        {exp.current && (
                          <span className="px-2 py-1 bg-green-500/20 text-green-400 text-xs rounded-full">Current</span>
                        )}
                        <span className="text-accent-400 text-sm font-medium">{exp.duration}</span>
                      </div>
                    </div>

                    <p className="text-neutral-300 leading-relaxed mb-6">{exp.description}</p>

                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="px-3 py-1 bg-primary-500/10 text-primary-400 text-sm rounded-full border border-primary-500/20"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
