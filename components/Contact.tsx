import { FaEnvelope, FaMapMarkerAlt, FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import ScrollAnimation from "./ScrollAnimation";

export default function Contact() {
  return (
    <section id="contact" className="py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-5">
        <ScrollAnimation>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8 md:mb-12">
            Get In Touch
            <div className="w-16 h-1 bg-blue-600 mx-auto mt-4"></div>
          </h2>
        </ScrollAnimation>
        <ScrollAnimation delay={100}>
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-base md:text-lg text-slate-600 mb-6 md:mb-8 px-4">
              I'm always open to discussing new projects, opportunities, or collaborations.
            </p>
            <div className="mb-6 md:mb-8 space-y-3 md:space-y-4">
              <div className="flex items-center justify-center gap-2 md:gap-3 text-base md:text-lg">
                <FaEnvelope className="text-blue-600 text-lg md:text-xl flex-shrink-0" />
                <a href="mailto:danangadi2005@gmail.com" className="text-slate-600 hover:text-blue-600 transition-colors break-all">
                  danangadi2005@gmail.com
                </a>
              </div>
              <div className="flex items-center justify-center gap-2 md:gap-3 text-base md:text-lg">
                <FaMapMarkerAlt className="text-blue-600 text-lg md:text-xl flex-shrink-0" />
                <span className="text-slate-600">DKI Jakarta, Indonesia</span>
              </div>
            </div>
            <div className="flex justify-center gap-3 md:gap-4 flex-wrap px-4">
              <a href="https://github.com/dananggadii" target="_blank" rel="noopener noreferrer" className="px-5 md:px-6 py-2.5 md:py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-all hover:-translate-y-0.5 flex items-center gap-2 text-sm md:text-base">
                <FaGithub /> GitHub
              </a>
              <a href="https://www.linkedin.com/in/danangadi/" target="_blank" rel="noopener noreferrer" className="px-5 md:px-6 py-2.5 md:py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-all hover:-translate-y-0.5 flex items-center gap-2 text-sm md:text-base">
                <FaLinkedin /> LinkedIn
              </a>
              <a href="https://www.instagram.com/danang.nugrho/" target="_blank" rel="noopener noreferrer" className="px-5 md:px-6 py-2.5 md:py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-all hover:-translate-y-0.5 flex items-center gap-2 text-sm md:text-base">
                <FaInstagram /> Instagram
              </a>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
}
