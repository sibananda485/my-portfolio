import Image from "next/image";

export default function Projects() {
  const projects = [
    {
      title: "Full Stack Job Portal",
      description:
        "A comprehensive job board application with advanced features including job listings, intelligent search, candidate profiles, resume upload, real-time chat, and a complete recruiter dashboard for job posting and management.",
      image: "/entryedge.png",
      techStack: [
        "React",
        "TypeScript",
        "ShadCN",
        "Redux Toolkit",
        "Express",
        "PostgreSQL",
        "Prisma ORM",
        "Socket.io",
        "AWS S3",
      ],
      liveDemo: null,
      github: "https://github.com/sibananda485/entryedge.git",
      featured: true,
    },
    {
      title: "Full Stack E-commerce",
      description:
        "A feature-rich e-commerce platform with product catalog, shopping cart, user authentication, order management, payment integration, and a comprehensive admin dashboard for inventory and user management.",
      image: "/tailshop.png",
      techStack: [
        "React",
        "JavaScript",
        "Tailwind CSS",
        "Redux Toolkit",
        "Node.js",
        "Express",
        "MongoDB",
      ],
      liveDemo: "https://tailshop-ruby.vercel.app/",
      github: "https://github.com/sibananda485/Ecommerce-Tailshop.git",
      featured: true,
    },
  ];

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-2">
        <div className="text-center mb-16 animate-on-scroll opacity-0">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-white">Featured</span>{" "}
            <span className="bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="text-neutral-400 text-lg max-w-2xl mx-auto">
            A showcase of my recent work and the technologies I've used to build
            them
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="animate-on-scroll opacity-0 group relative bg-neutral-900/50 backdrop-blur-sm border border-neutral-800 rounded-2xl overflow-hidden hover:border-neutral-700 transition-all duration-500 hover:-translate-y-2"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {project.featured && (
                <div className="absolute top-4 left-4 z-20">
                  <span className="px-3 py-1 bg-gradient-to-r from-primary-500 to-accent-500 text-white text-xs font-medium rounded-full">
                    Featured
                  </span>
                </div>
              )}

              <div className="relative h-64 overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-transparent to-transparent" />
              </div>

              <div className="p-8">
                <h3 className="text-2xl font-semibold text-white mb-3">
                  {project.title}
                </h3>
                <p className="text-neutral-300 leading-relaxed mb-6">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.techStack.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-neutral-800 text-neutral-300 text-sm rounded-full hover:bg-neutral-700 transition-colors duration-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="space-y-4 sm:space-y-0 sm:flex gap-4">
                  {project.liveDemo ? (
                    <a
                      href={project.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary-500 to-accent-500 text-white font-medium rounded-full hover:shadow-lg hover:shadow-primary-500/25 transition-all duration-300"
                    >
                      <div className="mx-auto flex items-center gap-1 text-center">
                        <span>Live Demo</span>
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                          />
                        </svg>
                      </div>
                    </a>
                  ) : (
                    <div className="items-center gap-1 text-center">
                      <span className=" flex items-center gap-2 px-6 py-3 bg-neutral-800 text-neutral-500 font-medium rounded-full cursor-not-allowed">
                        <div className="flex items-center gap-1 justify-center mx-auto">
                          <span>Live Demo</span>
                          <svg
                            className="w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                            />
                          </svg>
                        </div>
                      </span>
                    </div>
                  )}

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 border-2 border-neutral-700 text-white font-medium rounded-full hover:border-primary-500 hover:text-primary-400 transition-all duration-300"
                  >
                    <div className="mx-auto flex items-center gap-1 text-center">
                      <span>GitHub</span>
                      <svg
                        className="w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
