import { ScrollReveal } from "./ScrollReveal";

const experiences = [
  {
    role: "Social Media Analyst",
    company: "Qubitz",
    period: "Current",
    description:
      "Analyzing social media performance, crafting data-driven strategies, and managing brand presence across digital platforms.",
  },
  {
    role: "Digital Marketing Intern",
    company: "Commercial Technologies Plus",
    period: "Internship",
    description:
      "Hands-on experience in SEO, content marketing, paid advertising campaigns, and marketing analytics.",
  },
  {
    role: "Development Intern",
    company: "International Youth Alliance for Peace (IYAP)",
    period: "Internship",
    description:
      "Contributed to web development projects and supported digital initiatives for youth-driven peace-building programs.",
  },
];

export const ExperienceSection = () => {
  return (
    <section id="experience" className="section-padding bg-background">
      <div className="container-narrow">
        <ScrollReveal>
          <p className="text-sm font-semibold tracking-widest uppercase text-primary mb-3">Experience</p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-10">Professional Journey</h2>
        </ScrollReveal>

        <div className="relative pl-8 border-l-2 border-border space-y-10">
          {experiences.map((exp, i) => (
            <ScrollReveal key={i} delay={0.08 * i}>
              <div className="relative">
                {/* Timeline dot */}
                <div className="absolute -left-[calc(2rem+5px)] top-1.5 w-3 h-3 rounded-full bg-primary ring-4 ring-background" />
                <div className="card-elevated">
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <h3 className="text-lg font-bold">{exp.role}</h3>
                    <span className="badge-skill text-xs">{exp.period}</span>
                  </div>
                  <p className="text-primary font-medium text-sm mb-3">{exp.company}</p>
                  <p className="text-muted-foreground leading-relaxed">{exp.description}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
