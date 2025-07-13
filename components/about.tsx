import { Brain, Laptop, MapPin } from "lucide-react";
import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="animate-on-scroll opacity-0 relative">
            <div className="relative">
              <div className="w- h-80 mx-auto bg-gradient-to-br from-primary-500/20 to-accent-500/20 rounded-3xl rotate-6 animate-float" />
              <div
                className="absolute inset-0 h-80 mx-auto bg-gradient-to-br from-accent-500/20 to-primary-500/20 rounded-3xl -rotate-6 animate-float"
                style={{ animationDelay: "1s" }}
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w bg-neutral-800 rounded-2xl flex items-center justify-center text-6xl">
                  👨‍💻
                  <Image
                    src={"/myimage.png"}
                    alt={"Sibananda"}
                    fill
                    className="object-cover object-center group-hover:scale-110 transition-transform duration-500 rounded-3xl opacity-"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="animate-on-scroll opacity-0">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-white">About</span>{" "}
              <span className="bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">
                Me
              </span>
            </h2>
            <div className="space-y-6 text-neutral-300 leading-relaxed">
              <p>
                I'm a passionate fullstack developer with expertise in modern
                web technologies. I love creating digital solutions that make a
                real impact and provide exceptional user experiences.
              </p>
              <p>
                With experience across the entire development stack, I
                specialize in React, Next.js, Node.js, and cloud technologies.
                I'm always eager to learn new technologies and take on
                challenging projects.
              </p>
              <p>
                When I'm not coding, you can find me exploring new technologies,
                contributing to open-source projects, or sharing knowledge with
                the developer community.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <div className="px-4 py-2 bg-neutral-800 rounded-full text-sm flex items-center">
                <MapPin className="size-4 me-1" /> Mumbai, India
              </div>
              <div className="px-4 py-2 bg-neutral-800 rounded-full text-sm flex items-center">
                <Laptop className="size-4 me-1" /> Available for work
              </div>
              <div className="px-4 py-2 bg-neutral-800 rounded-full text-sm flex items-center">
                <Brain className="size-4 me-1" /> Experienced & Skilled
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
