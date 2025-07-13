import {
  FileText,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  PhoneCall,
} from "lucide-react";

export default function Contact() {
  const contactInfo = [
    {
      icon: <Mail className="size-5" />,
      label: "Email",
      value: "sahsiba485@gmail.com",
      href: "mailto:sahsiba485@gmail.com",
    },
    {
      icon: <Linkedin className="size-5" />,
      label: "LinkedIn",
      value: "linkedin.com/in/sibananda485",
      href: "https://www.linkedin.com/in/sibananda485",
    },
    {
      icon: <Github className="size-5" />,
      label: "GitHub",
      value: "github.com/sibananda485",
      href: "https://www.github.com/sibananda485",
    },
    {
      icon: <MapPin className="size-5" />,
      label: "Location",
      value: "Mumbai, India",
      href: null,
    },
  ];

  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 animate-on-scroll opacity-0">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-white">Let's Work</span>{" "}
            <span className="bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">
              Together
            </span>
          </h2>
          <p className="text-neutral-400 text-lg max-w-2xl mx-auto">
            I'm always interested in new opportunities and exciting projects.
            Let's discuss how we can bring your ideas to life!
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="animate-on-scroll opacity-0 bg-neutral-900/50 backdrop-blur-sm border border-neutral-800 rounded-3xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="">
                <h3 className="text-2xl font-semibold text-white mb-6">
                  Get In Touch
                </h3>
                <p className="text-neutral-300 leading-relaxed mb-8">
                  Ready to start your next project? I'd love to hear about your
                  ideas and discuss how we can work together to create something
                  amazing.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <a
                    href="tel:+918433980976"
                    className="flex items-center justify-center gap-3 px-6 py-4 bg-gradient-to-r from-primary-500 to-accent-500 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-primary-500/25 transition-all duration-300"
                  >
                    <span>
                      <PhoneCall />
                    </span>
                    <span>+91 8433980976</span>
                  </a>

                  <a
                    href="https://entryedge.s3.ap-south-1.amazonaws.com/12-1745606889206-sibaResumeUpdated.pdf"
                    target="_blank"
                    download
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-3 px-6 py-4 border-2 border-neutral-700 text-white font-semibold rounded-full hover:border-primary-500 hover:text-primary-400 transition-all duration-300"
                  >
                    <span>
                      <FileText />
                    </span>
                    <span>Download Resume</span>
                  </a>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-white mb-6">
                  Contact Information
                </h3>
                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-4 p-4 bg-neutral-800/50 rounded-xl hover:bg-neutral-800 transition-colors duration-200"
                    >
                      <span className="text-2xl">{info.icon}</span>
                      <div>
                        <p className="text-neutral-400 text-sm">{info.label}</p>
                        {info.href ? (
                          <a
                            href={info.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white hover:text-primary-400 transition-colors duration-200"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-white">{info.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
