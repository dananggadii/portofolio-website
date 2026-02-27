"use client";

import { useState, useEffect } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#experience", label: "Experience" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#certifications", label: "Certifications" },
  ];

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-white shadow-lg" : "bg-transparent"}`}>
      <div className="max-w-7xl mx-auto px-5">
        <div className="flex justify-center items-center py-4 relative">
          {/* Desktop Navigation */}
          <ul className="hidden md:flex md:gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a 
                  href={link.href} 
                  className={`font-medium transition-colors ${scrolled ? "text-slate-900 hover:text-blue-600" : "text-slate-900 hover:text-blue-600"}`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile Hamburger */}
          <div
            className="md:hidden flex flex-col gap-1 cursor-pointer absolute right-0"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className={`w-6 h-0.5 bg-slate-900 transition-transform duration-300 ${isOpen ? "rotate-45 translate-y-1.5" : ""}`}></span>
            <span className={`w-6 h-0.5 bg-slate-900 transition-opacity duration-300 ${isOpen ? "opacity-0" : ""}`}></span>
            <span className={`w-6 h-0.5 bg-slate-900 transition-transform duration-300 ${isOpen ? "-rotate-45 -translate-y-1.5" : ""}`}></span>
          </div>

          {/* Mobile Navigation Menu */}
          <div className={`md:hidden fixed left-0 top-[70px] w-full bg-white shadow-lg transition-transform duration-300 ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          }`}>
            <ul className="flex flex-col py-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a 
                    href={link.href} 
                    onClick={handleLinkClick}
                    className="block px-6 py-3 text-slate-900 font-medium hover:text-blue-600 hover:bg-blue-50 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Mobile Overlay */}
      {isOpen && (
        <div 
          className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-[-1]"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </nav>
  );
}
