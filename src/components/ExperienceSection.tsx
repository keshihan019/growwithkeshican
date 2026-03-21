import { ScrollReveal } from "./ScrollReveal";

const experiences = [
  {
    role: "Business Analyst Intern",
    company: "Dialog Axiata PLC",
    period: "Aug 2024 – Feb 2025",
    description:
      "Experienced in developing and maintaining dynamic sales dashboards on a weekly, monthly, and quarterly basis to track performance metrics. Skilled in analyzing sales trends, market insights, and partner performance data to identify gaps and recommend actionable improvements.",
  },
  {
    role: "Social Media Analyst",
    company: "Hashtag Generation",
    period: "Sep 2024 – Feb 2025",
    description:
      "Served as a Social Media Analyst at Hashtag Generation, monitoring platform-specific trends and audience behavior to optimize content strategy. Prepared performance reports and analyzed campaign results to provide actionable insights, enhance engagement, and support data-driven decision-making.",
  },
  {
    role: "Social Media Analyst",
    company: "Qubitz",
    period: "Current",
    description:
      "Analyzing social media performance, crafting data-driven strategies, and managing brand presence across digital platforms.",
  },
  {
    role: "Development Intern",
    company: "International Youth Alliance for Peace (IYAP)",
    period: "Feb 2023 – Jul 2023",
    description:
      "During my time as a Development Intern at the International Youth Alliance For Peace, I had the opportunity to work on various tasks such as graphic designing, social media management, strategy planning, blogging, writing articles, completing online courses, and working on the blogger recruitment project.",
  },
  {
    role: "Digital Marketing Intern",
    company: "Commercial Technologies Plus",
    period: "Aug 2022 – Feb 2023",
    description:
      "Worked as a Digital Marketing Intern at Commercial Technologies Plus, an award-winning product development company supporting global startups, and investors. Assisted in executing digital campaigns, optimizing content strategies, and contributing to brand visibility across multiple online platforms.",
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
