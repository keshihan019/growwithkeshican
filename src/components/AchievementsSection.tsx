import { ScrollReveal } from "./ScrollReveal";
import { Trophy, Star, Users, Globe } from "lucide-react";

const achievements = [
  {
    icon: Star,
    title: "Aspire Scholar '23",
    description: "Selected for the prestigious Aspire Leaders Program, recognizing leadership potential and social impact.",
  },
  {
    icon: Trophy,
    title: "2× Salesforce Certified",
    description: "Earned two Salesforce certifications demonstrating expertise in CRM and cloud-based business solutions.",
  },
  {
    icon: Globe,
    title: "Social Impactpreneur",
    description: "Driving community empowerment initiatives through technology and digital innovation in Sri Lanka.",
  },
  {
    icon: Users,
    title: "5,600+ LinkedIn Followers",
    description: "Built a strong professional network sharing insights on technology, marketing, and career development.",
  },
];

export const AchievementsSection = () => {
  return (
    <section id="achievements" className="section-padding-sm" style={{ background: "var(--section-gradient)" }}>
      <div className="container-narrow">
        <ScrollReveal>
          <p className="text-sm font-semibold tracking-widest uppercase text-primary mb-3">Achievements</p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-10">Milestones & Recognition</h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {achievements.map((a, i) => (
            <ScrollReveal key={i} delay={0.08 * i}>
              <div className="card-elevated flex items-start gap-4">
                <div className="w-11 h-11 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                  <a.icon size={20} className="text-accent" />
                </div>
                <div>
                  <h3 className="font-bold mb-1">{a.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{a.description}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
