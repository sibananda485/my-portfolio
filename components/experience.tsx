export default function Experience() {
  const experiences = [
    {
      title: "Software Developer — Frontend",
      company: "Finseal Software Pvt Ltd",
      duration: "JAN 2025 – Present",
      highlights: [
        "Leading frontend development of Sourceware, a full procurement platform covering RFQs, bid analysis, purchase orders, invoices, approval workflows, and catalogs.",
        "Built a custom drag-and-drop workflow/approval builder using React Flow, enabling non-technical users to design dynamic approval pipelines.",
        "Developing scalable React + TypeScript components, integrating REST APIs, and managing complex application state with Redux Toolkit and Tanstack Query.",
        "Enforcing clean architecture, react design patterns, and performance best practices across an enterprise-scale codebase.",
      ],
      skills: ["React", "TypeScript", "React Flow", "Tanstack Query", "Redux Toolkit", "Tailwind", "ShadCN", "MUI"],
      current: true,
    },
    {
      title: "Software Developer — Frontend",
      company: "Actify Inc.",
      duration: "MAR 2024 – DEC 2024",
      highlights: [
        "Architected and delivered 6+ B2B platforms: HRMS, CRM, Vendor Portal, LMS, Approval System, and Shipping Management.",
        "Built reusable React + TypeScript component libraries and integrated APIs for seamless data flow across all platforms.",
        "Implemented dashboards, approval flows, and reporting modules that streamlined enterprise operations for clients.",
      ],
      skills: ["React", "TypeScript", "ShadCN", "Tailwind", "Redux Toolkit", "Tanstack Table"],
      current: false,
    },
    {
      title: "Fullstack Engineer Intern",
      company: "Genex Co. Services",
      duration: "JAN 2024 – MAR 2024",
      highlights: [
        "Built and customised a full e-commerce storefront using Medusa.js and React, covering wishlist, cart, and order pages from Figma designs.",
        "Integrated product, cart, and order management APIs; implemented Stripe payment flow.",
        "Collaborated with the backend team on Node.js integrations, ensuring responsive and scalable UI delivery.",
      ],
      skills: ["Next.js", "TypeScript", "Medusa.js", "Node.js", "Stripe", "Figma"],
      current: false,
    },
  ];

  return (
    <section id="experience" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-2">
        <div className="text-center mb-16 animate-on-scroll opacity-0">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-white">Work</span>{" "}
            <span className="bg-linear-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">
              Experience
            </span>
          </h2>
          <p className="text-neutral-400 text-lg max-w-2xl mx-auto">
            My professional journey and the impact I've made along the way
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-2 md:left-1/2 top-0 bottom-0 w-0.5 bg-linear-to-b from-primary-500 to-accent-500 transform md:-translate-x-1/2" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`animate-on-scroll opacity-0 relative flex items-start ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Timeline dot */}
                <div className="absolute left-[1.1px] md:left-1/2 w-4 h-4 bg-linear-to-r from-primary-500 to-accent-500 rounded-full transform md:-translate-x-1/2 z-10 mt-10">
                  {exp.current && (
                    <div className="absolute inset-0 bg-linear-to-r from-primary-500 to-accent-500 rounded-full animate-ping" />
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

                    <ul className="space-y-2 mb-6">
                      {exp.highlights.map((point, i) => (
                        <li key={i} className="flex items-start gap-2 text-neutral-300 leading-relaxed text-sm">
                          <span className="mt-1.5 size-1.5 rounded-full bg-primary-400 shrink-0" />
                          {point}
                        </li>
                      ))}
                    </ul>

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
  );
}
