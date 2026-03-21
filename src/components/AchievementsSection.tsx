import { ScrollReveal } from "./ScrollReveal";
import { Trophy, Star, Users, Globe, Award } from "lucide-react";

const achievements = [
  {
    icon: Trophy,
    title: "Lazarus 2.0 EIDOS Ideathon — Winners",
    year: "2023",
    description: "Won the Lazarus 2.0 EIDOS Ideathon competition with an innovative solution.",
  },
  {
    icon: Award,
    title: "Yarl SF Ohana Hackforce — Finalist",
    year: "2023",
    description: "Reached the finals of the Yarl SF Ohana Hackforce competition.",
  },
  {
    icon: Award,
    title: "Idealize 3.0 Hackathon — Finalist",
    year: "2022",
    description: "Selected as a finalist in the Idealize 3.0 Hackathon for an impactful tech project.",
  },
  {
    icon: Star,
    title: "Aspire Scholar '23",
    description: "Selected for the prestigious Aspire Leaders Program, recognizing leadership potential and social impact.",
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((a, i) => (
            <ScrollReveal key={i} delay={0.06 * i}>
              <div className="card-elevated h-full flex items-start gap-4">
                <div className="w-11 h-11 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                  <a.icon size={20} className="text-accent" />
                </div>
                <div>
                  <h3 className="font-bold mb-1">{a.title}</h3>
                  {"year" in a && <span className="text-xs font-medium text-primary">{a.year}</span>}
                  <p className="text-sm text-muted-foreground leading-relaxed mt-1">{a.description}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
