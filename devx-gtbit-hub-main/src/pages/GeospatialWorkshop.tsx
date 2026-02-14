import { motion } from "framer-motion";
import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";

// --- Three.js Floating Particles (earth-toned) ---
function FloatingParticles({ count = 200 }) {
    const mesh = useRef<THREE.Points>(null!);

    const particles = useMemo(() => {
        const positions = new Float32Array(count * 3);
        for (let i = 0; i < count; i++) {
            positions[i * 3] = (Math.random() - 0.5) * 20;
            positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
            positions[i * 3 + 2] = (Math.random() - 0.5) * 20;
        }
        return positions;
    }, [count]);

    useFrame((state) => {
        if (mesh.current) {
            mesh.current.rotation.y = state.clock.elapsedTime * 0.03;
            mesh.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.02) * 0.1;
        }
    });

    return (
        <points ref={mesh}>
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    count={count}
                    array={particles}
                    itemSize={3}
                />
            </bufferGeometry>
            <pointsMaterial
                size={0.04}
                color="#34d399"
                transparent
                opacity={0.5}
                sizeAttenuation
            />
        </points>
    );
}

// --- Animated Text Line ---
const FadeInLine = ({
    children,
    delay = 0,
    className = "",
}: {
    children: React.ReactNode;
    delay?: number;
    className?: string;
}) => (
    <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5, delay }}
        className={className}
    >
        {children}
    </motion.div>
);

export default function GeospatialWorkshop() {
    const registrationLink =
        "https://docs.google.com/forms/d/e/1FAIpQLSeCamJFOSg39SaiTWhtDk5o74mptfvBZdmVzPSNoMLyzM7qQQ/viewform?usp=dialog";

    return (
        <div className="min-h-screen bg-background text-foreground overflow-x-hidden relative">
            <Navbar />

            {/* Three.js Background */}
            <div className="fixed inset-0 z-0 pointer-events-none">
                <Canvas camera={{ position: [0, 0, 6], fov: 60 }}>
                    <ambientLight intensity={0.3} />
                    <FloatingParticles />
                </Canvas>
            </div>

            <main className="relative z-10 pt-40 pb-32">
                <div className="max-w-3xl mx-auto px-6">

                    {/* Title */}
                    <FadeInLine className="mb-4">
                        <h1 className="text-4xl md:text-6xl font-display font-bold tracking-tight">
                            Geospatial Technology
                        </h1>
                    </FadeInLine>
                    <FadeInLine delay={0.05} className="mb-6">
                        <h2 className="text-2xl md:text-3xl font-display font-semibold text-primary/80">
                            Workshop
                        </h2>
                    </FadeInLine>
                    <FadeInLine delay={0.1} className="mb-20">
                        <p className="text-lg text-muted-foreground">
                            In Collaboration with <span className="text-foreground font-medium">MMGEIS</span>
                        </p>
                    </FadeInLine>

                    {/* About */}
                    <FadeInLine delay={0.15} className="mb-8">
                        <p className="text-xl md:text-2xl text-foreground/90 font-light leading-relaxed">
                            DevX is collaborating with the Master Mentor Geo-Enabling Indian
                            Scholars (MMGEIS) initiative — a national program by Centre for
                            Knowledge Sovereignty and Esri India to bring an exclusive workshop
                            on Geospatial Technology.
                        </p>
                    </FadeInLine>

                    <FadeInLine delay={0.2} className="mb-8">
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            This workshop will introduce students to GIS, spatial thinking, and
                            real-world applications in sectors like urban planning, disaster
                            management, and environmental solutions. Participants will also gain
                            exposure to opportunities that connect with premier institutions such
                            as ISRO and DRDO, opening pathways toward research, innovation, and
                            national-level impact.
                        </p>
                    </FadeInLine>

                    <FadeInLine delay={0.25} className="mb-32">
                        <p className="text-lg text-foreground/80 italic">
                            No prior experience is required — just curiosity and a
                            problem-solving mindset.
                        </p>
                    </FadeInLine>

                    {/* Divider */}
                    <FadeInLine className="mb-16">
                        <div className="h-px w-full bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
                    </FadeInLine>

                    {/* Register */}
                    <FadeInLine delay={0.05} className="text-center">
                        <p className="text-muted-foreground mb-8">
                            Secure your spot — limited seats available.
                        </p>
                        <Button
                            variant="hero"
                            size="xl"
                            className="px-12"
                            onClick={() => window.open(registrationLink, "_blank")}
                        >
                            Register Now
                            <Send className="w-5 h-5 ml-2" />
                        </Button>
                    </FadeInLine>
                </div>
            </main>

            <Footer />
        </div>
    );
}
