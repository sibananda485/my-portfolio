"use client";

import { useEffect, useRef } from "react";

export default function Hero() {
  const textRef = useRef<HTMLSpanElement>(null);

  // useEffect(() => {
  //   const text = "Fullstack Developer"
  //   const element = textRef.current
  //   if (!element) return

  //   let index = 0
  //   element.textContent = ""

  //   const typeWriter = () => {
  //     if (index < text.length) {
  //       element.textContent += text.charAt(index)
  //       index++
  //       setTimeout(typeWriter, 100)
  //     }
  //   }

  //   setTimeout(typeWriter, 1000)
  // }, [])

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 py-20 text-center">
        <div className="animate-slide-up">
          <div className="mb-6">
            <span className="inline-block px-4 py-2 bg-primary-500/10 border border-primary-500/20 rounded-full text-primary-400 text-sm font-medium mb-6">
              👋 Welcome to my portfolio
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="block text-white">Hi, I'm</span>
            <span className="block bg-gradient-to-r from-primary-400 via-accent-400 to-primary-600 bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
              SIBANANDA SAHU
            </span>
          </h1>

          <div className="text-xl md:text-2xl text-neutral-300 mb-8 h-8">
            <span ref={textRef} className=" pr-1">
              Fullstack Developer
            </span>
          </div>

          <p className="text-lg text-neutral-400 max-w-2xl mx-auto mb-12 leading-relaxed">
            Crafting digital experiences with modern technologies. I build
            scalable web applications that combine beautiful design with
            powerful functionality.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#experience"
              className="group relative px-8 py-4 bg-gradient-to-r from-primary-500 to-accent-500 text-white font-semibold rounded-full overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-primary-500/25 hover:-translate-y-1"
            >
              <span className="relative z-10">View My Work</span>
              <div className="absolute inset-0 bg-gradient-to-r from-accent-500 to-primary-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
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
