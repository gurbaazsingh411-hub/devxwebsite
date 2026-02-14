import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Code2, Cpu, GraduationCap, Send } from "lucide-react";

export default function VibeCodingWorkshop() {
    const submissionLink = "https://docs.google.com/forms/d/e/1FAIpQLSdwIiYyjUB05Lc0_iQ5ty4LN_KkHX1FgKxBLtTg6nTjBLGJJw/viewform?usp=dialog";
    const projectLink = "https://github.com/gurbaazsingh411/vibe-coding-demo"; // Placeholder or real link if provided

    return (
        <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
            <Navbar />

            <main className="pt-32 pb-24">
                <div className="section-container">
                    {/* Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-16"
                    >
                        <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
                            Vibe Coding <span className="text-gradient">Workshop</span>
                        </h1>
                        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                            A deep dive into the world of vibe coding, modern developer tools, and building with speed and intuition.
                        </p>
                    </motion.div>

                    {/* Info Section */}
                    <div className="grid md:grid-cols-2 gap-12 items-start mb-24">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="space-y-8"
                        >
                            <div className="glass-card p-8 rounded-2xl hover-glow">
                                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                                    <Code2 className="w-6 h-6 text-primary" />
                                </div>
                                <h2 className="text-2xl font-display font-bold mb-4">What is Vibe Coding?</h2>
                                <p className="text-muted-foreground leading-relaxed">
                                    Vibe coding is a modern approach to software development that prioritizes intuition, speed, and AI-assisted workflows. Instead of getting bogged down in boilerplate, we focus on the "vibe" or the soul of the project, letting powerful tools handle the heavy lifting while we focus on architecture and features.
                                </p>
                            </div>

                            <div className="glass-card p-8 rounded-2xl hover-glow">
                                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                                    <Cpu className="w-6 h-6 text-primary" />
                                </div>
                                <h2 className="text-2xl font-display font-bold mb-4">Tools of the Trade</h2>
                                <ul className="space-y-3 text-muted-foreground">
                                    <li className="flex items-center gap-2">
                                        <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                                        Cursor & Lovable (AI-first IDEs)
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                                        Vite & React (Fast Frontend Ecosystem)
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                                        Framer Motion (Premium Animations)
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                                        Lucide React (Modern Iconography)
                                    </li>
                                </ul>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="space-y-8"
                        >
                            <div className="glass-card p-8 rounded-2xl hover-glow">
                                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                                    <Github className="w-6 h-6 text-primary" />
                                </div>
                                <h2 className="text-2xl font-display font-bold mb-4">Git & GitHub</h2>
                                <p className="text-muted-foreground leading-relaxed mb-6">
                                    In this workshop, we also covered the essentials of version control. We learned how to track changes, collaborate with others, and deploy our projects to the world using Git and GitHub.
                                </p>
                                <Button
                                    variant="heroOutline"
                                    className="w-full"
                                    onClick={() => window.open(projectLink, "_blank")}
                                >
                                    View Workshop Project
                                    <ExternalLink className="w-4 h-4" />
                                </Button>
                            </div>

                            <div className="glass-card p-8 rounded-2xl border-primary/30 bg-primary/5">
                                <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center mb-6">
                                    <GraduationCap className="w-6 h-6 text-primary" />
                                </div>
                                <h2 className="text-2xl font-display font-bold mb-4">The Challenge</h2>
                                <p className="text-muted-foreground leading-relaxed">
                                    Now it's your turn! Take what you learned and build a personalized profile page using Vibe Coding principles. Make it fast, make it beautiful, and most importantly—make it yours.
                                </p>
                            </div>
                        </motion.div>
                    </div>

                    {/* Submission Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center"
                    >
                        <div className="glass-card p-12 rounded-3xl border-primary shadow-[0_0_30px_rgba(var(--primary-rgb),0.1)]">
                            <h2 className="text-3xl font-display font-bold mb-6">Ready to Submit?</h2>
                            <p className="text-muted-foreground mb-10 max-w-xl mx-auto">
                                Once you've completed your challenge, submit the link to your repository or live project here. We can't wait to see what you've built!
                            </p>
                            <Button
                                variant="hero"
                                size="xl"
                                className="px-12"
                                onClick={() => window.open(submissionLink, "_blank")}
                            >
                                Submit Your Entry
                                <Send className="w-5 h-5 ml-2" />
                            </Button>
                        </div>
                    </motion.div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
