"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function Hero() {
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const fullText = "Danang Adi Nugroho";
  
  useEffect(() => {
    let index = isDeleting ? fullText.length : 0;
    const speed = isDeleting ? 50 : 100;
    
    const timer = setInterval(() => {
      if (!isDeleting) {
        if (index <= fullText.length) {
          setDisplayedText(fullText.slice(0, index));
          index++;
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
          clearInterval(timer);
        }
      } else {
        if (index >= 0) {
          setDisplayedText(fullText.slice(0, index));
          index--;
        } else {
          setIsDeleting(false);
          clearInterval(timer);
        }
      }
    }, speed);
    
    return () => clearInterval(timer);
  }, [isDeleting]);

  return (
    <section id="home" className="pt-24 md:pt-32 pb-16 md:pb-20 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-5">
        <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
          <div className="text-center md:text-left order-2 md:order-1">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-4 leading-tight">
              Hi, I'm <span className="text-blue-600">{displayedText}</span>
              <span className="animate-pulse text-blue-600">|</span>
            </h1>
            <h2 className="text-xl sm:text-2xl md:text-3xl text-slate-600 mb-4 md:mb-6">L2 Cloud DevOps Engineer</h2>
            <p className="text-base md:text-lg text-slate-600 mb-6 md:mb-8 leading-relaxed">
              I'm a cloud infrastructure engineer with 2 years of hands-on experience designing, 
              migrating, and optimizing cloud environments for high-traffic, mission-critical systems.
            </p>
            <div className="hidden md:flex gap-3 md:gap-4 mb-6 md:mb-8 justify-center md:justify-start flex-wrap">
              <a href="#contact" className="px-6 md:px-8 py-3 md:py-3.5 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-all hover:-translate-y-0.5 shadow-lg text-sm md:text-base">
                Get In Touch
              </a>
              <a href="#projects" className="px-6 md:px-8 py-3 md:py-3.5 bg-transparent text-blue-600 border-2 border-blue-600 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-all text-sm md:text-base">
                View Projects
              </a>
            </div>
            <div className="flex gap-3 md:gap-4 justify-center md:justify-start">
              <a href="https://github.com/dananggadii" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="w-10 h-10 md:w-11 md:h-11 flex items-center justify-center rounded-full bg-blue-50 text-blue-600 text-lg md:text-xl hover:bg-blue-600 hover:text-white transition-all hover:-translate-y-1">
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/in/danangadi/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="w-10 h-10 md:w-11 md:h-11 flex items-center justify-center rounded-full bg-blue-50 text-blue-600 text-lg md:text-xl hover:bg-blue-600 hover:text-white transition-all hover:-translate-y-1">
                <FaLinkedin />
              </a>
              <a href="https://www.instagram.com/danang.nugrho/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-10 h-10 md:w-11 md:h-11 flex items-center justify-center rounded-full bg-blue-50 text-blue-600 text-lg md:text-xl hover:bg-blue-600 hover:text-white transition-all hover:-translate-y-1">
                <FaInstagram />
              </a>
            </div>
          </div>
          <div className="flex justify-center order-1 md:order-2">
            <Image
              src="/profile.jpg"
              alt="Danang Adi Nugroho"
              width={400}
              height={400}
              priority
              className="rounded-full shadow-2xl w-64 sm:w-80 md:w-full max-w-md object-cover aspect-square object-[center_20%]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
