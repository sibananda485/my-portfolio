export default function Skills() {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: "⚛️",
      skills: [
        "TypeScript",
        "JavaScript",
        "React.js",
        "Next.js",
        "Tailwind CSS",
        "ShadCN",
        "Redux Toolkit",
        "React Flow",
        "Tanstack Query",
      ],
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Backend Development",
      icon: "🗄️",
      skills: ["Node.js", "Express.js", "REST APIs", "WebSocket", "MongoDB", "PostgreSQL", "Prisma ORM", "Zod"],
      color: "from-green-500 to-emerald-500",
    },
    {
      title: "Cloud & DevOps",
      icon: "☁️",
      skills: ["Git", "GitHub", "AWS IAM", "AWS EC2", "AWS S3"],
      color: "from-purple-500 to-pink-500",
    },
  ]

  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 animate-on-scroll opacity-0">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-white">Technical</span>{" "}
            <span className="bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">
              Skills
            </span>
          </h2>
          <p className="text-neutral-400 text-lg max-w-2xl mx-auto">
            Here are the technologies and tools I work with to bring ideas to life
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="animate-on-scroll opacity-0 group relative p-8 bg-neutral-900/50 backdrop-blur-sm border border-neutral-800 rounded-2xl hover:border-neutral-700 transition-all duration-300 hover:-translate-y-2"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`}
              />

              <div className="relative z-10">
                <div className="text-4xl mb-4">{category.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-4">{category.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 bg-neutral-800 text-neutral-300 text-sm rounded-full hover:bg-neutral-700 transition-colors duration-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
