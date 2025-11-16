import { projects } from "../data/projects";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function Projects() {
    const categories = ["All", ...Array.from(new Set(projects.map((p) => p.category)))];
    const [filter, setFilter] = useState("All");

    const filteredProjects =
        filter === "All" ? projects : projects.filter((project) => project.category === filter);

    /* Section fade-in */
    const sectionVariants = {
        hidden: { opacity: 0, y: 20 },
        show: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut" as const,   
            },
        },
    };

    /* Card fade animation */
    const cardItem = {
        hidden: { opacity: 0, y: 20 },
        show: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: "easeOut" as const,
            },
        },
        exit: {
            opacity: 0,
            y: -10,
            transition: { duration: 0.3 },
        },
    };

    return (
        <section id="projects" className="py-20 bg-[#0b1220]">
            <motion.div
                className="container mx-auto px-6"
                variants={sectionVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
            >

                {/* Title */}
                <motion.h2
                    variants={cardItem}
                    className="text-4xl md:text-5xl font-extrabold text-white"
                >
                    Projects
                </motion.h2>

                {/* Underline */}
                <motion.div
                    variants={cardItem}
                    className="w-28 h-[3px] bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-3 mb-6"
                />

                {/* Subtitle */}
                <motion.p
                    variants={cardItem}
                    className="text-slate-300 max-w-2xl mb-10"
                >
                    Selected work showcasing my experience in building full-stack applications,
                    APIs, and clean responsive user interfaces.
                </motion.p>

                {/* Filter Buttons */}
                <motion.div variants={cardItem} className="flex flex-wrap gap-3 mb-10">
                    {categories.map((category, index) => (
                        <motion.button
                            key={index}
                            whileHover={{ scale: 1.08 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => setFilter(category)}
                            className={`px-4 py-2 rounded-full transition-all shadow-md 
                                ${filter === category
                                    ? "bg-purple-600 text-white shadow-purple-500/40"
                                    : "bg-white/10 text-slate-300 border border-white/10 hover:bg-white/20"
                                }`}
                        >
                            {category}
                        </motion.button>
                    ))}
                </motion.div>

                {/* Project Cards */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    <AnimatePresence>
                        {filteredProjects.map((project) => (
                            <motion.div
                                key={project.id}
                                variants={cardItem}
                                initial="hidden"
                                animate="show"
                                exit="exit"
                                whileHover={{
                                    scale: 1.04,
                                    boxShadow: "0 0 22px rgba(168, 85, 247, 0.35)",
                                    borderColor: "rgba(168, 85, 247, 0.8)",
                                }}
                                transition={{ duration: 0.35 }}
                                className="rounded-2xl overflow-hidden bg-white/10 backdrop-blur-xl border border-white/10 shadow-lg hover:shadow-purple-500/30 transition-all"
                            >
                                {/* Image */}
                                {project.image && (
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-44 object-cover"
                                    />
                                )}

                                <div className="p-5">
                                    {/* Title */}
                                    <h3 className="font-semibold text-lg text-white">
                                        {project.title}
                                    </h3>

                                    {/* Description */}
                                    <p className="text-sm text-slate-300 mt-2 leading-relaxed">
                                        {project.description}
                                    </p>

                                    {/* Tags */}
                                    <div className="mt-4 flex flex-wrap gap-2">
                                        {project.tags.map((tag, idx) => (
                                            <span
                                                key={idx}
                                                className="text-xs px-2 py-1 rounded bg-white/10 text-slate-200 border border-white/10"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Links */}
                                    <div className="mt-5 flex gap-4 text-sm">
                                        {project.repo && (
                                            <a
                                                href={project.repo}
                                                target="_blank"
                                                rel="noreferrer"
                                                className="text-purple-400 hover:underline"
                                            >
                                                GitHub →
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>
            </motion.div>
        </section>
    );
}