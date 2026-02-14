import { useState, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { OrbitControls, PerspectiveCamera, Stars } from "@react-three/drei";
import { motion, useInView } from "framer-motion";
import { ProjectNode } from "@/3d/galaxy/ProjectNode";
import { ConnectionLines } from "@/3d/galaxy/ConnectionLines";
import { CentralCore } from "@/3d/galaxy/CentralCore";
import { Nebula } from "@/3d/galaxy/Nebula";
import { StarField } from "@/3d/galaxy/StarField";
import { Project } from "@/lib/types";

const featuredProjects: (Project & { link: string; image?: string })[] = [
  {
    title: "VIMUN",
    problem: "Managing high-stakes Model United Nations conferences at scale",
    solution: "Developed a premium portal for real-time news, committee management, and registrations",
    impact: "Successfully hosted 1000+ delegates across major conference circuits",
    tags: ["React", "MUN", "TailwindCSS"],
    color: "#60a5fa",
    featured: true,
    link: "https://vimun.netlify.app/",
    image: "/events/iiit-delhi.jpg",
  },
  {
    title: "Apertre 3.0",
    problem: "Barriers for developers entering the open-source ecosystem",
    solution: "Built a collaborative launch bay for open-source missions and community building",
    impact: "Gathering 500+ builders for real-world code discovery and shipping",
    tags: ["Open Source", "Community", "Hackathon"],
    color: "#34d399",
    featured: true,
    link: "https://apertre.resourcio.in/",
    image: "/events/wins-at-dtu.jpg",
  },
];

export const GalaxySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  // Calculate positions for the project nodes in a circular formation
  const projectPositions = featuredProjects.map((_, index) => {
    const totalProjects = featuredProjects.length;
    const angle = (index / totalProjects) * Math.PI * 2;
    const radius = 5;
    return [
      Math.cos(angle) * radius,
      Math.sin(angle * 0.5) * 2, // slight vertical variation
      Math.sin(angle) * radius,
    ] as [number, number, number];
  });

  return (
    <section
      id="galaxy"
      className="py-24 md:py-32 relative bg-black/90 min-h-screen"
      ref={ref}
    >
      <div className="absolute inset-0 w-full h-full">
        <Canvas
          camera={{ position: [0, 0, 15], fov: 75 }}
          onPointerMissed={() => setSelectedProject(null)}
        >
          <PerspectiveCamera makeDefault position={[0, 0, 15]} fov={75} />
          <OrbitControls
            enableZoom={true}
            enablePan={false}
            rotateSpeed={0.5}
            minDistance={8}
            maxDistance={20}
          />

          {/* Ambient lighting */}
          <ambientLight intensity={0.2} />
          <pointLight position={[0, 0, 10]} intensity={1} color="#ffffff" />

          {/* Central Core */}
          <CentralCore />

          {/* Nebula Effect - Disabled for stability */}
          {/* <Nebula /> */}

          {/* Star Field Background */}
          <StarField count={2000} />

          {/* Project Nodes */}
          {featuredProjects.map((project, index) => (
            <ProjectNode
              key={project.title}
              project={project}
              position={projectPositions[index]}
              onClick={() => setSelectedProject(selectedProject === index ? null : index)}
              isSelected={selectedProject === index}
              index={index}
            />
          ))}

          {/* Connection Lines between projects */}
          <ConnectionLines positions={projectPositions} />

          {/* Directional light for better illumination */}
          <directionalLight position={[10, 10, 5]} intensity={0.5} />
          <directionalLight position={[-10, -10, -5]} intensity={0.3} />
        </Canvas>
      </div>

      {/* Content overlay */}
      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4">
            <span className="text-gradient">Event</span> Galaxy
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Explore our events in an interactive 3D visualization
          </p>
        </motion.div>

        {/* Project Info Panel */}
        {selectedProject !== null && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass-card rounded-2xl overflow-hidden max-w-2xl mx-auto"
          >
            {/* Event Image */}
            {featuredProjects[selectedProject].image ? (
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={featuredProjects[selectedProject].image}
                  alt={featuredProjects[selectedProject].title}
                  className="object-cover w-full h-full"
                />
              </div>
            ) : (
              <div className="relative aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                <span className="text-muted-foreground text-lg font-medium">Coming Soon</span>
              </div>
            )}

            <div className="p-6">
              <h3 className="text-2xl font-display font-bold mb-2 text-primary">
                {featuredProjects[selectedProject].title}
              </h3>
              <p className="text-muted-foreground mb-4">
                {featuredProjects[selectedProject].solution}
              </p>
              <div className="flex flex-wrap items-center gap-2">
                {featuredProjects[selectedProject].tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-sm rounded-md bg-muted text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
                <Button
                  variant="hero"
                  size="sm"
                  className="ml-auto"
                  onClick={() => window.open(featuredProjects[selectedProject!].link, "_blank")}
                >
                  View
                  <ExternalLink className="w-4 h-4 ml-1" />
                </Button>
              </div>
            </div>
          </motion.div>
        )}


      </div>
    </section>
  );
};