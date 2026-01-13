import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Code2,
  Brain,
  Rocket,
  Trophy,
  Users,
  Lightbulb,
} from "lucide-react";

const services = [
  {
    icon: Code2,
    title: "Coding Bootcamps",
    description:
      "Intensive hands-on sessions covering DSA, web development, and competitive programming.",
  },
  {
    icon: Brain,
    title: "AI/ML Sessions",
    description:
      "Deep dives into machine learning, neural networks, and practical AI applications.",
  },
  {
    icon: Rocket,
    title: "Startup Incubation",
    description:
      "Mentorship and resources to transform your ideas into viable tech startups.",
  },
  {
    icon: Trophy,
    title: "Hackathon Training",
    description:
      "Preparation workshops and team building for national and international hackathons.",
  },
  {
    icon: Users,
    title: "Influencer Workshops",
    description:
      "Sessions led by industry leaders, tech influencers, and successful founders.",
  },
  {
    icon: Lightbulb,
    title: "Project Pods",
    description:
      "Team-based collaborative projects to build real-world applications together.",
  },
];

export const WhatWeDoSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 md:py-32 relative bg-secondary/30" ref={ref}>
      <div className="absolute inset-0 cyber-grid opacity-50" />

      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4">
            What We <span className="text-gradient">Do</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Building skills, fostering innovation, and creating opportunities
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="glass-card rounded-2xl p-8 h-full hover-glow relative overflow-hidden">
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                    <service.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>

                  <h3 className="font-display font-semibold text-xl mb-3">
                    {service.title}
                  </h3>

                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
