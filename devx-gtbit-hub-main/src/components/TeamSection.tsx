import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Linkedin, Twitter, Github } from "lucide-react";

const team = [
  {
    name: "Gurbaaz Singh",
    role: "President",
    description: "Leading the DevX chapter with vision and innovation",
    image: "/team/gurbaaz.png",
  },
  {
    name: "Harsh Yadav",
    role: "Vice President",
    description: "Driving growth and operational excellence",
    image: "/team/harsh.jpg",
  },
  {
    name: "Dhriti",
    role: "Content Head",
    description: "Crafting the narrative and community engagement",
    image: "/team/dhriti.jpg",
  },
];

export const TeamSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="team" className="py-24 md:py-32 relative" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4">
            Meet the <span className="text-gradient">Team</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            The passionate individuals driving DevX GTBIT forward
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-8">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="group"
            >
              <div className="glass-card rounded-2xl p-6 text-center hover-glow">
                {/* Avatar */}
                <div className="relative w-24 h-24 mx-auto mb-4">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/50 to-cyan-500/50 blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <img
                    src={member.image}
                    alt={member.name}
                    className="relative w-24 h-24 rounded-full border-2 border-border group-hover:border-primary transition-colors duration-300 object-cover object-center"
                  />
                </div>

                <h3 className="font-display font-semibold text-lg mb-1">
                  {member.name}
                </h3>

                <p className="text-primary text-sm font-medium mb-2">
                  {member.role}
                </p>

                <p className="text-muted-foreground text-xs mb-4">
                  {member.description}
                </p>

                {/* Social Links */}
                <div className="flex items-center justify-center gap-3">
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Twitter className="w-4 h-4" />
                  </a>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
