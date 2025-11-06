import { motion } from "framer-motion";
import { SiReact, SiNextdotjs, SiTypescript, SiMui, SiJavascript, SiHtml5, SiCss3, SiTailwindcss, SiNodedotjs, SiExpress, SiMongodb, SiRedux, SiGit, SiGithub, SiPostman, SiVercel, SiRender, SiMysql,} from "react-icons/si";
import { FiCpu } from "react-icons/fi";

export default function Skills() {
    // Float animation
    const floatTransition = {
        repeat: Infinity,
        repeatType: "reverse",
        duration: 2,
        ease: "easeInOut",
    };

    // Card lift + glow animation 
    const cardHover = {
        scale: 1.04,
        boxShadow: "0px 0px 18px rgba(150, 80, 255, 0.4)",
        borderColor: "rgba(168, 85, 247, 0.8)",
    };

    const categories = [
        {
            title: "Frontend",
            skills: [
                { name: "React.js", icon: <SiReact color="#61DBFB" /> },
                { name: "Next.js", icon: <SiNextdotjs color="white" /> },
                { name: "TypeScript", icon: <SiTypescript color="#3178C6" /> },
                { name: "JavaScript", icon: <SiJavascript color="#F7DF1E" /> },
                { name: "HTML5", icon: <SiHtml5 color="#E34F26" /> },
                { name: "CSS3", icon: <SiCss3 color="#1572B6" /> },
                { name: "Tailwind CSS", icon: <SiTailwindcss color="#38BDF8" /> },
                { name: "Material UI", icon: <SiMui color="#007FFF" /> },
            ],
        },
        {
            title: "Backend & API",
            skills: [
                { name: "Node.js", icon: <SiNodedotjs color="#8CC84B" /> },
                { name: "Express.js", icon: <SiExpress color="white" /> },
                { name: "REST APIs", icon: "🌐" },
                { name: "Microservices", icon: "🧩" },
                { name: "Axios", icon: "⚡" },
                { name: "Middleware", icon: "🧵" },
            ],
        },
        {
            title: "State & Data",
            skills: [
                { name: "Redux", icon: <SiRedux color="#764ABC" /> },
                { name: "React Query", icon: "🔍" },
                { name: "JWT Auth", icon: "🔐" },
                { name: "MongoDB", icon: <SiMongodb color="#4DB33D" /> },
                { name: "SQL", icon: <SiMysql color="#00618A" /> },
            ],
        },
        {
            title: "Tools & DevOps",
            skills: [
                { name: "Git", icon: <SiGit color="#F05033" /> },
                { name: "GitHub", icon: <SiGithub color="white" /> },
                { name: "VS Code", icon: <FiCpu color="white" /> },
                { name: "Postman", icon: <SiPostman color="#FF6C37" /> },
                { name: "Vercel", icon: <SiVercel color="white" /> },
                { name: "Render", icon: <SiRender color="#46E3B7" /> },
            ],
        },
        {
            title: "CS Fundamentals",
            skills: [
                { name: "OOP", icon: "📘" },
                { name: "MVC", icon: "🏛️" },
                { name: "System Design", icon: "🧠" },
            ],
        },
    ];

    return (
        <section id="skills" className="py-20 bg-[#0b1220]">
            <div className="container mx-auto px-6 text-center">
                {/* Title */}
                <h2 className="text-4xl md:text-5xl font-extrabold text-white">
                    My Tech Stack
                </h2>
                <div className="w-28 h-[3px] bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mt-3 mb-12" />

                {/* Categories Grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {categories.map((category, index) => (
                        <motion.div
                            key={index}
                            whileHover={cardHover}
                            className="bg-white/10 border border-white/20 backdrop-blur-xl rounded-2xl p-6 shadow-lg transition-all text-left"
                        >
                            <h3 className="text-xl font-bold text-white mb-4">
                                {category.title}
                            </h3>

                            <div className="flex flex-wrap gap-3">
                                {category.skills.map((skill, i) => (
                                    <motion.div
                                        key={i}
                                        animate={{ y: [0, -6, 0] }}
                                        transition={floatTransition}
                                        className="flex items-center gap-2 text-sm font-medium text-slate-200 bg-white/10 px-3 py-2 rounded-lg border border-white/10 hover:bg-white/20 hover:scale-[1.05] transition-all"
                                    >
                                        <span className="text-lg">{skill.icon}</span>
                                        {skill.name}
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
