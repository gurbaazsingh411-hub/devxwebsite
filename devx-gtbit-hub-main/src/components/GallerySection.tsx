import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const galleryImages = [
  { id: 1, alt: "DevX Workshop", category: "Workshop" },
  { id: 2, alt: "Hackathon Event", category: "Hackathon" },
  { id: 3, alt: "Team Meetup", category: "Meetup" },
  { id: 4, alt: "Coding Session", category: "Session" },
  { id: 5, alt: "Award Ceremony", category: "Event" },
  { id: 6, alt: "Project Showcase", category: "Showcase" },
];

export const GallerySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="py-24 md:py-32 relative" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4">
            <span className="text-gradient">Gallery</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Moments from our events, workshops, and community gatherings
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="relative aspect-video rounded-xl overflow-hidden group cursor-pointer"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Placeholder gradient background */}
              <div
                className={`absolute inset-0 bg-gradient-to-br transition-all duration-500 ${
                  index % 3 === 0
                    ? "from-primary/30 to-cyan-500/20"
                    : index % 3 === 1
                    ? "from-cyan-500/30 to-primary/20"
                    : "from-primary/20 to-cyan-600/30"
                }`}
              />

              {/* Grid pattern overlay */}
              <div className="absolute inset-0 cyber-grid opacity-30" />

              {/* Hover overlay */}
              <div
                className={`absolute inset-0 bg-background/80 backdrop-blur-sm flex items-center justify-center transition-opacity duration-300 ${
                  hoveredIndex === index ? "opacity-100" : "opacity-0"
                }`}
              >
                <div className="text-center p-4">
                  <p className="text-primary text-sm font-medium mb-1">
                    {image.category}
                  </p>
                  <p className="text-foreground font-display font-semibold">
                    {image.alt}
                  </p>
                </div>
              </div>

              {/* Glow effect */}
              <div
                className={`absolute inset-0 shadow-[inset_0_0_40px_hsl(185_98%_46%/0.3)] rounded-xl transition-opacity duration-300 ${
                  hoveredIndex === index ? "opacity-100" : "opacity-0"
                }`}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
