import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Linkedin, Twitter, Github } from "lucide-react";

const team = [
  {
    name: "Rahul Sharma",
    role: "President",
    description: "Leading the DevX revolution at GTBIT",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=rahul&backgroundColor=0D1117",
  },
  {
    name: "Priya Singh",
    role: "Vice President",
    description: "Operations & strategic partnerships",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=priya&backgroundColor=0D1117",
  },
  {
    name: "Arjun Patel",
    role: "Tech Lead",
    description: "Full-stack wizard & open source enthusiast",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=arjun&backgroundColor=0D1117",
  },
  {
    name: "Sneha Gupta",
    role: "Design Lead",
    description: "Creating beautiful experiences",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=sneha&backgroundColor=0D1117",
  },
  {
    name: "Vikram Kumar",
    role: "AI/ML Lead",
    description: "Building intelligent solutions",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=vikram&backgroundColor=0D1117",
  },
  {
    name: "Ananya Joshi",
    role: "Events Lead",
    description: "Orchestrating memorable experiences",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=ananya&backgroundColor=0D1117",
  },
  {
    name: "Karan Mehta",
    role: "Web Dev Lead",
    description: "Crafting the digital presence",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=karan&backgroundColor=0D1117",
  },
  {
    name: "Ishita Roy",
    role: "Community Manager",
    description: "Building connections that matter",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=ishita&backgroundColor=0D1117",
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

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
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
                    className="relative w-24 h-24 rounded-full border-2 border-border group-hover:border-primary transition-colors duration-300"
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
