"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { FileText } from "lucide-react";

const stats = [
  { value: "2.5+", label: "Years Experience" },
  { value: "10+", label: "B2B Apps Delivered" },
  { value: "MUI-X", label: "OSS Contributor" },
];

export default function Hero() {
  const textRef = useRef<HTMLSpanElement>(null);
  const pathName = usePathname();
  const showResume = pathName === "/recruiter";

  useEffect(() => {
    const roles = ["Frontend Developer", "React Specialist", "OSS Contributor"];
    const element = textRef.current;
    if (!element) return;

    let roleIndex = 0;
    let charIndex = 0;
    let deleting = false;

    const tick = () => {
      const current = roles[roleIndex];
      if (!deleting) {
        element.textContent = current.slice(0, charIndex + 1);
        charIndex++;
        if (charIndex === current.length) {
          deleting = true;
          setTimeout(tick, 1800);
          return;
        }
      } else {
        element.textContent = current.slice(0, charIndex - 1);
        charIndex--;
        if (charIndex === 0) {
          deleting = false;
          roleIndex = (roleIndex + 1) % roles.length;
        }
      }
      setTimeout(tick, deleting ? 60 : 100);
    };

    const timeout = setTimeout(tick, 800);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 py-20 text-center">
        <div className="animate-slide-up">
          <div className="mb-6">
            <span className="inline-block px-4 py-2 bg-primary-500/10 border border-primary-500/20 rounded-full text-primary-400 text-sm font-medium">
              👋 Welcome to my portfolio
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="block text-white">Hi, I'm</span>
            <span className="block bg-gradient-to-r from-primary-400 via-accent-400 to-primary-600 bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
              SIBANANDA SAHU
            </span>
          </h1>

          <div className="text-xl md:text-2xl text-neutral-300 mb-4 h-8">
            <span ref={textRef} className="border-r-2 border-primary-400 pr-1" />
          </div>

          <p className="text-lg text-neutral-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            Software Developer with <span className="text-white font-medium">2.5+ years</span> of experience
            building clean, scalable frontend applications using React, TypeScript, and Tailwind.
            Open source contributor to <span className="text-primary-400 font-medium">MUI-X</span> — fix shipped in v8.28.2.
          </p>

          {/* Stats row */}
          <div className="flex flex-wrap justify-center gap-8 mb-12">
            {stats.map((stat, i) => (
              <div key={i} className="text-center">
                <p className="text-2xl font-bold bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">
                  {stat.value}
                </p>
                <p className="text-neutral-500 text-sm mt-0.5">{stat.label}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#experience"
              className="group relative px-8 py-4 bg-gradient-to-r from-primary-500 to-accent-500 text-white font-semibold rounded-full overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-primary-500/25 hover:-translate-y-1"
            >
              <span className="relative z-10">View My Work</span>
              <div className="absolute inset-0 bg-gradient-to-r from-accent-500 to-primary-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </a>

            <a
              onClick={(e) => {
                if (!showResume) {
                  e.preventDefault();
                  alert("INFO : Only recruiters can access resume");
                }
              }}
              href="https://entryedge.s3.ap-south-1.amazonaws.com/12-1777404599030-sibaResume_v11.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-8 py-4 border-2 border-neutral-700 text-white font-semibold rounded-full hover:border-primary-500 hover:text-primary-400 transition-all duration-300"
            >
              <FileText className="size-4" />
              Resume
            </a>

            <a
              href="#contact"
              className="px-8 py-4 border-2 border-neutral-700 text-white font-semibold rounded-full hover:border-primary-500 hover:text-primary-400 transition-all duration-300"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 border border-primary-500/20 rounded-full animate-float" />
      <div
        className="absolute bottom-20 right-10 w-16 h-16 border border-accent-500/20 rounded-full animate-float"
        style={{ animationDelay: "2s" }}
      />
      <div
        className="absolute top-1/2 right-20 w-12 h-12 bg-primary-500/10 rounded-full animate-float"
        style={{ animationDelay: "1s" }}
      />
    </section>
  );
}
