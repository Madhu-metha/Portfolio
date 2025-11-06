import { projects } from '../data/projects'
import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'

export default function Projects() {
    const categories = ['All', ...Array.from(new Set(projects.map((p) => p.category)))]
    const [filter, setFilter] = useState('All')

    const filteredProjects =
        filter === 'All' ? projects : projects.filter((project) => project.category === filter)

    return (
        <section id="projects" className="py-20 bg-slate-50 dark:bg-[#0a162c]">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl font-bold mb-6">Projects</h2>
                <p className="text-slate-600 dark:text-slate-300 mb-6 max-w-2xl">
                    Selected work showcasing my experience in building full-stack applications, APIs, and responsive UIs.
                </p>

                {/* Filter Buttons */}
                <div className="flex flex-wrap gap-3 mb-8">
                    {categories.map((category, index) => (
                        <button
                            key={index}
                            onClick={() => setFilter(category)}
                            className={`px-4 py-2 rounded-full ${filter === category
                                    ? 'bg-brand-500 text-white'
                                    : 'bg-white dark:bg-[#0c1a34] text-slate-700 dark:text-slate-200'
                                }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* Project Cards */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    <AnimatePresence>
                        {filteredProjects.map((project, index) => (
                            <motion.div
                                key={project.id}
                                layout
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0 }}
                                transition={{ delay: index * 0.08 }}
                                whileHover={{ scale: 1.03 }}
                                className="rounded-xl overflow-hidden bg-white dark:bg-[#0c1a34] shadow-soft"
                            >
                                {project.image && (
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-40 object-cover"
                                    />
                                )}

                                <div className="p-4">
                                    <h3 className="font-semibold text-lg">{project.title}</h3>
                                    <p className="text-sm text-slate-600 dark:text-slate-300 mt-2">
                                        {project.description}
                                    </p>

                                    <div className="mt-3 flex flex-wrap gap-2">
                                        {project.tags.map((tag, idx) => (
                                            <span
                                                key={idx}
                                                className="text-xs px-2 py-1 rounded bg-slate-100 dark:bg-slate-800"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="mt-4 flex gap-4">
                                        {project.repo && (
                                            <a
                                                href={project.repo}
                                                target="_blank"
                                                rel="noreferrer"
                                                className="text-brand-500 hover:underline text-sm"
                                            >
                                                GitHub
                                            </a>
                                        )}
                                        {project.live && (
                                            <a
                                                href={project.live}
                                                target="_blank"
                                                rel="noreferrer"
                                                className="text-brand-500 hover:underline text-sm"
                                            >
                                                Live Demo
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>
            </div>
        </section>
    )
}
