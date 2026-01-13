import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Campus Connect",
    problem: "Students struggle to find relevant events and communities on campus",
    solution: "Built a unified platform connecting students with clubs, events, and opportunities",
    impact: "500+ active users, 20+ clubs onboarded",
    tags: ["React", "Node.js", "MongoDB"],
    color: "#60a5fa", // blue
    featured: true,
  },
  {
    title: "AI Study Buddy",
    problem: "Personalized learning resources are hard to find",
    solution: "AI-powered platform that recommends study materials based on learning style",
    impact: "Improved study efficiency by 40% in pilot group",
    tags: ["Python", "TensorFlow", "FastAPI"],
    color: "#34d399", // green
    featured: true,
  },
  {
    title: "Green Track",
    problem: "Lack of awareness about personal carbon footprint",
    solution: "Mobile app that tracks and gamifies sustainable lifestyle choices",
    impact: "Winner at National Sustainability Hackathon",
    tags: ["React Native", "Firebase", "ML"],
    color: "#fbbf24", // yellow
    featured: true,
  },
];

export const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-24 md:py-32 relative bg-secondary/30" ref={ref}>
      <div className="absolute inset-0 cyber-grid opacity-30" />

      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Real-world projects built by our community members
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="glass-card rounded-2xl p-6 h-full hover-glow flex flex-col">
                <h3 className="font-display font-semibold text-xl mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>

                <div className="space-y-3 flex-1">
                  <div>
                    <span className="text-xs text-primary font-medium uppercase tracking-wider">
                      Problem
                    </span>
                    <p className="text-muted-foreground text-sm mt-1">
                      {project.problem}
                    </p>
                  </div>

                  <div>
                    <span className="text-xs text-primary font-medium uppercase tracking-wider">
                      Solution
                    </span>
                    <p className="text-muted-foreground text-sm mt-1">
                      {project.solution}
                    </p>
                  </div>

                  <div>
                    <span className="text-xs text-primary font-medium uppercase tracking-wider">
                      Impact
                    </span>
                    <p className="text-foreground text-sm font-medium mt-1">
                      {project.impact}
                    </p>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-border">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs rounded-md bg-muted text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex gap-2 mt-4">
                  <Button variant="ghost" size="sm" className="flex-1">
                    <Github className="w-4 h-4" />
                    Code
                  </Button>
                  <Button variant="ghost" size="sm" className="flex-1">
                    <ExternalLink className="w-4 h-4" />
                    Demo
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
