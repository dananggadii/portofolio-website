import Image from "next/image";
import ScrollAnimation from "./ScrollAnimation";

const skills = [
  {
    category: "Cloud Platforms",
    items: [
      { name: "AWS", icon: "/aws.png" },
      { name: "Google Cloud", icon: "/gcp.png" },
      { name: "Alibaba Cloud", icon: "/alibaba-cloud.png" },
    ]
  },
  {
    category: "Infrastructure as Code",
    items: [
      { name: "Terraform", icon: "/terraform.png" },
      { name: "Ansible", icon: "/ansible.png" },
    ]
  },
  {
    category: "Containers & Orchestration",
    items: [
      { name: "Docker", icon: "/docker.png" },
      { name: "Kubernetes", icon: "/kubernetes.png" },
    ]
  },
  {
    category: "CI/CD",
    items: [
      { name: "Jenkins", icon: "/jenkins.png" },
      { name: "Cloud Build", icon: "/build.png" },
      { name: "Cloud Deploy", icon: "/deploy.png" },
      { name: "Argo CD", icon: "/argocd.png" },
    ]
  },
  {
    category: "Monitoring & Observability",
    items: [
      { name: "Grafana", icon: "/grafana.png" },
      { name: "Prometheus", icon: "/prometheus.png" },
      { name: "Loki", icon: "/loki.png" },
      { name: "Alloy", icon: "/alloy.png" },
    ]
  },
  {
    category: "Programming",
    items: [
      { name: "Golang", icon: "/go.png" },
    ]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-16 md:py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-5">
        <ScrollAnimation>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8 md:mb-12">
            Skills & Technologies
            <div className="w-16 h-1 bg-blue-600 mx-auto mt-4"></div>
          </h2>
        </ScrollAnimation>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {skills.map((skillGroup, index) => (
            <ScrollAnimation key={index} delay={index * 100} className="h-full">
              <div className="bg-white p-6 md:p-8 rounded-xl shadow-md h-full">
                <h3 className="text-lg md:text-xl font-bold mb-4 md:mb-6 text-center text-slate-900">
                  {skillGroup.category}
                </h3>
                <div className="grid grid-cols-2 gap-4 md:gap-6">
                  {skillGroup.items.map((skill, skillIndex) => (
                    <div key={skillIndex} className="flex flex-col items-center gap-2 md:gap-3">
                      <div className="w-12 h-12 md:w-16 md:h-16 relative flex items-center justify-center">
                        <Image
                          src={skill.icon}
                          alt={skill.name}
                          width={64}
                          height={64}
                          className="object-contain"
                        />
                      </div>
                      <span className="text-xs md:text-sm font-medium text-slate-700 text-center">
                        {skill.name}
                      </span>
                    </div>
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
