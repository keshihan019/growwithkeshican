import { ScrollReveal } from "./ScrollReveal";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Community Empowerment Platform",
    tags: ["Social Impact", "Web Dev"],
    description: "A digital platform connecting communities in Trincomalee with resources, mentorship, and opportunities.",
  },
  {
    title: "Freelance Portfolio Hub",
    tags: ["Full-Stack", "React"],
    description: "Personal portfolio and project showcase built with modern web technologies.",
    link: "https://linktr.ee/keshihan",
  },
  {
    title: "Digital Marketing Campaigns",
    tags: ["Marketing", "Analytics"],
    description: "End-to-end social media campaigns with data-driven insights and measurable ROI for multiple brands.",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="section-padding-sm" style={{ background: "var(--section-gradient)" }}>
      <div className="container-narrow">
        <ScrollReveal>
          <p className="text-sm font-semibold tracking-widest uppercase text-primary mb-3">Projects</p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-10">Featured Work</h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <ScrollReveal key={i} delay={0.08 * i}>
              <div className="card-elevated h-full flex flex-col">
                <div className="flex flex-wrap gap-2 mb-4">
                  {p.tags.map((t) => (
                    <span key={t} className="badge-skill text-xs">{t}</span>
                  ))}
                </div>
                <h3 className="font-bold text-lg mb-2">{p.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed flex-1">{p.description}</p>
                {p.link && (
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-primary mt-4 hover:underline"
                  >
                    View Project <ExternalLink size={14} />
                  </a>
                )}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
