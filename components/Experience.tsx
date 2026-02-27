import ScrollAnimation from "./ScrollAnimation";

const experiences = [
  {
    date: "Jan 2026 - Present",
    title: "L2 Cloud DevOps Engineer",
    company: "PT. Aku Mitra Digital",
    description: "Strengthened GKE infrastructure security posture through comprehensive hardening measures and compliance implementation. Modernized CI/CD workflows by migrating to Jenkins-based pipelines with GitOps methodology using ArgoCD. Developed Terraform-based landing zone factory for automated, standardized infrastructure provisioning across AWS, GCP, and Alibaba Cloud for future customer projects."
  },
  {
    date: "Apr 2025 - Dec 2025",
    title: "Cloud Engineer",
    company: "PT. Aku Mitra Digital",
    description: "Led the containerization initiative by migrating all internal applications from traditional compute instances to Kubernetes, improving scalability and resource utilization. Architected and implemented CI/CD pipelines using Cloud Build and Cloud Deploy, accelerating deployment cycles. Managed multi-cloud infrastructure across Tencent Cloud, AWS, GCP, and Alibaba Cloud. Successfully deployed and provided on-site engineering support for SPMB Jateng (Central Java Student Registration System), serving hundreds of thousands of users with 99.9% uptime. Established centralized observability platform to monitor all internal infrastructure."
  },
  {
    date: "May 2024 - Mar 2025",
    title: "Cloud Engineer Internship",
    company: "PT. Aku Mitra Digital",
    description: "Orchestrated large-scale infrastructure migration from AWS and GCP to Alibaba Cloud, ensuring zero downtime and optimized cost efficiency. Developed the company's first backend API using NestJS and Prisma ORM with PostgreSQL. Provisioned and configured multi-cloud environments across GCP, AWS, and Alibaba Cloud for diverse customer requirements."
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-5">
        <ScrollAnimation>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8 md:mb-12">
            Experience
            <div className="w-16 h-1 bg-blue-600 mx-auto mt-4"></div>
          </h2>
        </ScrollAnimation>
        <div className="max-w-4xl mx-auto relative">
          <div className="hidden md:block absolute left-5 top-0 bottom-0 w-0.5 bg-blue-100"></div>
          {experiences.map((exp, index) => (
            <div key={index} className="relative md:pl-16 mb-8 md:mb-12 last:mb-0">
              <div className="hidden md:block absolute left-3 top-0 w-5 h-5 rounded-full bg-blue-600 border-4 border-white shadow-md"></div>
              <ScrollAnimation delay={index * 100}>
                <div className="bg-white p-6 md:p-8 rounded-xl shadow-md">
                  <span className="text-blue-600 font-semibold text-xs md:text-sm">{exp.date}</span>
                  <h3 className="text-xl md:text-2xl font-bold mt-2 mb-1">{exp.title}</h3>
                  <h4 className="text-slate-600 font-medium mb-3 md:mb-4 text-sm md:text-base">{exp.company}</h4>
                  <p className="text-slate-600 leading-relaxed text-sm md:text-base">{exp.description}</p>
                </div>
              </ScrollAnimation>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
