import { ScrollReveal } from "./ScrollReveal";
import { Megaphone, PenTool, Briefcase, Mic, Compass, Code } from "lucide-react";

const services = [
  {
    icon: Megaphone,
    title: "Digital Marketing",
    description: "Data-driven social media strategy, SEO, and paid campaigns that grow reach and conversions.",
  },
  {
    icon: PenTool,
    title: "Content Creation",
    description: "Engaging written, visual, and video content crafted to elevate your brand story.",
  },
  {
    icon: Briefcase,
    title: "Business Coaching",
    description: "Practical guidance for founders and teams to sharpen strategy, execution, and growth.",
  },
  {
    icon: Mic,
    title: "Voice-Over Services",
    description: "Clear, professional voice-overs for ads, explainers, and e-learning in multiple languages.",
  },
  {
    icon: Compass,
    title: "Career Coaching",
    description: "Personalised mentoring on CVs, interviews, and career direction for students and professionals.",
  },
  {
    icon: Code,
    title: "Full-Stack Development",
    description: "End-to-end web and mobile applications built with modern, scalable technologies.",
  },
];

export const ServicesSection = () => {
  return (
    <section id="services" className="section-padding bg-background">
      <div className="container-narrow">
        <ScrollReveal>
          <p className="text-sm font-semibold tracking-widest uppercase text-primary mb-3">Services</p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">What I Can Do For You</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mb-10">
            From concept to deployment — I offer a range of services to help bring your ideas to life.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <ScrollReveal key={s.title} delay={0.06 * i}>
              <div className="card-elevated h-full group">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                  <s.icon size={22} className="text-primary" />
                </div>
                <h3 className="font-bold text-lg mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
