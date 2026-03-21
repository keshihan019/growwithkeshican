import { ScrollReveal } from "./ScrollReveal";

const categories = [
  {
    title: "Programming",
    skills: ["Python", "JavaScript", "SQL", "HTML5", "CSS3"],
  },
  {
    title: "Frameworks & Tools",
    skills: ["React Native", "Flutter", "Bootstrap", "GitHub Pages"],
  },
  {
    title: "Design",
    skills: ["Figma", "Canva", "Adobe Photoshop", "Adobe Lightroom"],
  },
  {
    title: "Data & Analytics",
    skills: ["Google Analytics", "MySQL", "Business Analysis", "Data Visualization"],
  },
  {
    title: "Marketing",
    skills: ["Social Media Marketing", "SEO", "Content Strategy", "Digital Advertising"],
  },
  {
    title: "Platforms",
    skills: ["Salesforce", "Slack", "Microsoft Teams", "Zoom"],
  },
];

export const CompetenciesSection = () => {
  return (
    <section id="competencies" className="section-padding-sm" style={{ background: "var(--section-gradient)" }}>
      <div className="container-narrow">
        <ScrollReveal>
          <p className="text-sm font-semibold tracking-widest uppercase text-primary mb-3">Competencies</p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-10">Skills & Expertise</h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat, i) => (
            <ScrollReveal key={cat.title} delay={0.06 * i}>
              <div className="card-elevated h-full">
                <h3 className="font-bold text-sm uppercase tracking-wider text-primary mb-4">{cat.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((s) => (
                    <span key={s} className="badge-skill text-xs">{s}</span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
