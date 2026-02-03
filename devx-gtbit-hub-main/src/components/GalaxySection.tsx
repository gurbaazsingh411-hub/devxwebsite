import { useState, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera, Stars } from "@react-three/drei";
import { motion, useInView } from "framer-motion";
import { ProjectNode } from "@/3d/galaxy/ProjectNode";
import { ConnectionLines } from "@/3d/galaxy/ConnectionLines";
import { CentralCore } from "@/3d/galaxy/CentralCore";
import { Nebula } from "@/3d/galaxy/Nebula";
import { StarField } from "@/3d/galaxy/StarField";
import { Project } from "@/lib/types";

const featuredProjects: Project[] = [
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
            Featured <span className="text-gradient">Projects</span> Galaxy
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Explore our featured projects in an interactive 3D visualization
          </p>
        </motion.div>

        {/* Project Info Panel */}
        {selectedProject !== null && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass-card rounded-2xl p-6 max-w-2xl mx-auto"
          >
            <h3 className="text-2xl font-display font-bold mb-2 text-primary">
              {featuredProjects[selectedProject].title}
            </h3>
            <p className="text-muted-foreground mb-4">
              {featuredProjects[selectedProject].solution}
            </p>
            <div className="flex flex-wrap gap-2">
              {featuredProjects[selectedProject].tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-sm rounded-md bg-muted text-muted-foreground"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        )}

        {/* Instructions */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.3 }}
          className="mt-8 text-center text-muted-foreground"
        >
          <p>Click on a project node to learn more • Drag to rotate the view • Scroll to zoom</p>
        </motion.div>
      </div>
    </section>
  );
};