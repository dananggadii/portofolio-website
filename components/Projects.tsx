import ScrollAnimation from "./ScrollAnimation";

const projects = [
  {
    title: "SPMB Jateng",
    tag: "Alibaba Cloud",
    description: "Central Java Student Registration System serving hundreds of thousands of users with 99.9% uptime. Implemented high-availability architecture with enterprise-grade security on Alibaba Cloud.",
    tech: ["Alibaba Cloud", "High Availability", "Load Balancer"]
  },
  {
    title: "Company Internal Infrastructure",
    tag: "GCP",
    description: "Built scalable internal infrastructure on GKE with centralized observability using Grafana and Prometheus. Implemented automated CI/CD pipelines with Cloud Build and Cloud Deploy.",
    tech: ["GKE", "Grafana", "Prometheus", "Cloud Build"]
  },
  {
    title: "Odoo Application",
    tag: "AWS",
    description: "Designed and deployed cloud infrastructure on AWS with focus on reliability, security, and cost optimization. Implemented auto-scaling and disaster recovery strategies.",
    tech: ["AWS", "EC2", "RDS", "AWS WAF", "EFS"]
  },
  {
    title: "Company Profile API",
    tag: "Backend",
    description: "Developed RESTful API using NestJS framework with Prisma ORM for PostgreSQL database management. Implemented clean architecture and best practices.",
    tech: ["NestJS", "Prisma", "PostgreSQL", "GCP"]
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-5">
        <ScrollAnimation>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8 md:mb-12">
            Featured Projects
            <div className="w-16 h-1 bg-blue-600 mx-auto mt-4"></div>
          </h2>
        </ScrollAnimation>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <ScrollAnimation key={index} delay={index * 100}>
              <div className="bg-white p-6 md:p-8 rounded-xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all h-full">
                <div className="flex justify-between items-start mb-3 md:mb-4 flex-wrap gap-2">
                  <h3 className="text-xl md:text-2xl font-bold">{project.title}</h3>
                  <span className="px-3 py-1 bg-blue-50 text-blue-600 rounded-xl text-xs font-semibold">
                    {project.tag}
                  </span>
                </div>
                <p className="text-slate-600 mb-4 md:mb-6 leading-relaxed text-sm md:text-base">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span key={techIndex} className="px-2.5 md:px-3 py-1 md:py-1.5 bg-slate-100 text-slate-600 rounded-md text-xs md:text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
}
