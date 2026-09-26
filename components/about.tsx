import { Brain, Laptop, MapPin } from "lucide-react";
import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="animate-on-scroll opacity-0 relative">
            <div className="relative">
              <div className="w- h-80 mx-auto bg-linear-to-br from-primary-500/20 to-accent-500/20 rounded-3xl rotate-6 animate-float" />
              <div
                className="absolute inset-0 h-80 mx-auto bg-linear-to-br from-accent-500/20 to-primary-500/20 rounded-3xl -rotate-6 animate-float"
                style={{ animationDelay: "1s" }}
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w bg-neutral-800 rounded-2xl flex items-center justify-center text-6xl">
                  👨‍💻
                  <Image
                    src={"/myImage.jpg"}
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
              <span className="bg-linear-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">
                Me
              </span>
            </h2>
            <div className="space-y-6 text-neutral-300 leading-relaxed">
              <p>
                Software Developer with <span className="text-white font-semibold">2.5+ years of experience</span> specialising in
                frontend development with React, TypeScript, and Tailwind CSS. I build
                clean, scalable, high-quality applications and love learning through
                documentation.
              </p>
              <p>
                Currently at <span className="text-primary-400 font-medium">Finseal Software</span>, I'm building a full procurement
                platform end-to-end — including a custom drag-and-drop workflow builder
                with React Flow — and previously delivered multiple B2B platforms at
                Actify Inc (HRMS, CRM, LMS, Vendor Portal and more).
              </p>
              <p>
                I'm also an <span className="text-accent-400 font-medium">open source contributor</span> — I fixed a clipboard paste
                bug in MUI Data Grid Premium that was merged and shipped in the official
                v8.28.2 release, with a shoutout in the release notes.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <div className="px-4 py-2 bg-neutral-800 rounded-full text-sm flex items-center">
                <MapPin className="size-4 me-1" /> Mumbai, India
              </div>
              <div className="px-4 py-2 bg-neutral-800 rounded-full text-sm flex items-center">
                <Laptop className="size-4 me-1" /> 2.5+ Years Experience
              </div>
              <div className="px-4 py-2 bg-neutral-800 rounded-full text-sm flex items-center">
                <Brain className="size-4 me-1" /> Open Source Contributor
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
