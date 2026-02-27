import ScrollAnimation from "./ScrollAnimation";

export default function About() {
  return (
    <section id="about" className="py-16 md:py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-5">
        <ScrollAnimation>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8 md:mb-12">
            About Me
            <div className="w-16 h-1 bg-blue-600 mx-auto mt-4"></div>
          </h2>
        </ScrollAnimation>
        <div className="max-w-5xl mx-auto">
          <ScrollAnimation delay={100}>
            <p className="text-base md:text-lg text-slate-600 mb-8 md:mb-12 text-center leading-relaxed px-4">
              My work has powered platforms serving hundreds of thousands of users, like SPMB Jateng 
              with 99.9% uptime, seamless performance, and enterprise-grade security. I hold 16 industry-recognized certifications across AWS, Google Cloud, and Alibaba Cloud, 
              demonstrating expertise in cloud architecture, security, DevOps practices, and networking.
            </p>
          </ScrollAnimation>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            <ScrollAnimation delay={200}>
              <div className="text-center p-6 md:p-8 bg-white rounded-xl shadow-md">
                <h3 className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">2+</h3>
                <p className="text-slate-600 text-sm md:text-base">Years Experience</p>
              </div>
            </ScrollAnimation>
            <ScrollAnimation delay={300}>
              <div className="text-center p-6 md:p-8 bg-white rounded-xl shadow-md">
                <h3 className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">16</h3>
                <p className="text-slate-600 text-sm md:text-base">Certifications</p>
              </div>
            </ScrollAnimation>
            <ScrollAnimation delay={400}>
              <div className="text-center p-6 md:p-8 bg-white rounded-xl shadow-md sm:col-span-2 md:col-span-1">
                <h3 className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">99.9%</h3>
                <p className="text-slate-600 text-sm md:text-base">Uptime Achievement</p>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </div>
    </section>
  );
}
