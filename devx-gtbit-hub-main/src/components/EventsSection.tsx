import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Calendar, MapPin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const events = [
  {
    title: "Apertre",
    date: "February 2025",
    location: "Online / GTBIT",
    description:
      "A massive open-source hackathon focused on building impactful solutions and contributing to the ecosystem.",
    type: "Hackathon",
    link: "https://apertre.resourcio.in/",
  },
  {
    title: "Vibe Coding Workshop",
    date: "February 2025",
    location: "GTBIT Campus",
    description:
      "A unique workshop on the intersection of music, coding, and creative development. Learn to build with vibes.",
    type: "Workshop",
    internalLink: "/vibe-coding",
  },
  {
    title: "Geospatial Technology Workshop",
    date: "Coming Soon",
    location: "GTBIT Campus",
    description:
      "In collaboration with MMGEIS — explore GIS, spatial thinking, and real-world applications in urban planning, disaster management & more. No prior experience needed.",
    type: "Workshop",
    internalLink: "/geospatial-workshop",
  },
];

export const EventsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const navigate = useNavigate();

  return (
    <section id="events" className="py-24 md:py-32 relative" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4">
            Upcoming <span className="text-gradient">Events</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Join us for workshops, hackathons, and networking events
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event, index) => (
            <motion.div
              key={event.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="glass-card rounded-2xl overflow-hidden hover-glow h-full flex flex-col">
                {/* Event Type Badge */}
                <div className="px-6 pt-6">
                  <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary border border-primary/20">
                    {event.type}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="font-display font-semibold text-xl mb-3 group-hover:text-primary transition-colors">
                    {event.title}
                  </h3>

                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4 text-primary" />
                      {event.date}
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4 text-primary" />
                      {event.location}
                    </div>
                  </div>

                  <p className="text-muted-foreground text-sm leading-relaxed flex-1">
                    {event.description}
                  </p>

                  <Button
                    variant="ghost"
                    className="mt-4 w-full justify-between group/btn"
                    onClick={() => {
                      if (event.internalLink) {
                        navigate(event.internalLink);
                      } else if (event.link) {
                        window.open(event.link, "_blank", "noopener,noreferrer");
                      }
                    }}
                  >
                    {event.internalLink ? "View Highlights" : event.link ? "Register Now" : "Register Soon"}
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-12"
        >
          <Button variant="heroOutline" size="lg">
            View All Events
            <ArrowRight className="w-5 h-5" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
