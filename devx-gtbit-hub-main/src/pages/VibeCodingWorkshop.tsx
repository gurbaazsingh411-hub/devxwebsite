import { motion } from "framer-motion";
import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";

// --- Three.js Floating Particles ---
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
                color="#a78bfa"
                transparent
                opacity={0.6}
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

// --- Page ---
export default function VibeCodingWorkshop() {
    const submissionLink =
        "https://docs.google.com/forms/d/e/1FAIpQLSdwIiYyjUB05Lc0_iQ5ty4LN_KkHX1FgKxBLtTg6nTjBLGJJw/viewform?usp=dialog";

    const learnings = [
        "How to build modern frontends with React & Vite",
        "How to connect and query a database",
        "How to integrate your backend with the database",
        "How to ship fast — building MVPs that matter",
    ];

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
                    <FadeInLine className="mb-6">
                        <h1 className="text-5xl md:text-7xl font-display font-bold tracking-tight">
                            Vibe Coding
                        </h1>
                    </FadeInLine>
                    <FadeInLine delay={0.1} className="mb-20">
                        <p className="text-lg text-muted-foreground">
                            A workshop by DevX GTBIT
                        </p>
                    </FadeInLine>

                    {/* What We Learned */}
                    <FadeInLine delay={0.15} className="mb-10">
                        <h2 className="text-sm uppercase tracking-[0.2em] text-primary font-medium">
                            What we learned
                        </h2>
                    </FadeInLine>

                    <div className="space-y-5 mb-32">
                        {learnings.map((item, i) => (
                            <FadeInLine key={i} delay={0.2 + i * 0.08}>
                                <p className="text-xl md:text-2xl text-foreground/90 font-light leading-relaxed">
                                    {item}
                                </p>
                            </FadeInLine>
                        ))}
                    </div>

                    {/* Divider */}
                    <FadeInLine className="mb-32">
                        <div className="h-px w-full bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
                    </FadeInLine>

                    {/* Challenge */}
                    <FadeInLine className="mb-6">
                        <h2 className="text-sm uppercase tracking-[0.2em] text-primary font-medium">
                            The Challenge
                        </h2>
                    </FadeInLine>
                    <FadeInLine delay={0.1} className="mb-4">
                        <p className="text-xl md:text-2xl text-foreground/90 font-light leading-relaxed">
                            Build something. Ship it. Make it yours.
                        </p>
                    </FadeInLine>
                    <FadeInLine delay={0.15} className="mb-16">
                        <p className="text-muted-foreground">
                            Take what you learned and create a project using vibe coding
                            principles. The only rule — it has to be real.
                        </p>
                    </FadeInLine>

                    {/* Submit */}
                    <FadeInLine delay={0.2}>
                        <Button
                            variant="hero"
                            size="xl"
                            className="px-10"
                            onClick={() => window.open(submissionLink, "_blank")}
                        >
                            Submit Your Entry
                            <Send className="w-5 h-5 ml-2" />
                        </Button>
                    </FadeInLine>
                </div>
            </main>

            <Footer />
        </div>
    );
}
