import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { FiDownload } from "react-icons/fi";


const roles = [
    "MERN Stack Developer",
    "React & TypeScript Engineer",
    "Software Developer",
];

export default function Hero() {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const id = setInterval(() => setIndex((i) => (i + 1) % roles.length), 2500);
        return () => clearInterval(id);
    }, []);

    return (
        <section id="home" className="pt-28 md:pt-32 pb-20 bg-gradient-to-br from-[#020617] via-[#0b1231] to-[#111827]">
            <div className="container mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-12 items-center">

                    {/* LEFT CONTENT */}
                    <div className="text-center lg:text-left">
                        <motion.p
                            className="text-xl text-brand-400 text-gray-300 font-normal py-3"
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                        >
                            Hello, It's Me
                        </motion.p>

                        <motion.h1
                            className="text-5xl md:text-6xl font-extrabold leading-tight mt-2 text-white"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                        >
                            Madhumetha B I
                        </motion.h1>

                        {/* Animated Role */}
                        <div className="mt-3 text-xl md:text-2xl font-semibold text-slate-300 py-2 flex justify-center lg:justify-start items-center gap-2">
                            And I'm a{" "}
                            <span className="inline-block">
                                <AnimatePresence mode="wait">
                                    <motion.span
                                        key={index}
                                        initial={{ opacity: 0, y: 8 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -8 }}
                                        transition={{ duration: 0.35 }}
                                        className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500"
                                    >
                                        {roles[index]}
                                    </motion.span>
                                </AnimatePresence>
                            </span>
                        </div>

                        <p className="mt-4 text-lg text-slate-300 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                            I build modern, visually compelling and high-performance web experiences with the MERN Stack — where clean design, smooth interactions and innovation come together beautifully.
                        </p>

                        {/* CTA BUTTONS */}
                        <div className="mt-6 flex items-center justify-center lg:justify-start gap-4">
                            <a
                                href="/Madhumetha_B_I_Resume.pdf"
                                download
                                className="group flex items-center gap-2 px-8 py-3 rounded-lg font-medium text-white bg-gradient-to-r from-blue-500 to-purple-500 hover:scale-[1.03] hover:shadow-xl hover:shadow-purple-500/40 transition-all duration-300"
                            >
                                <FiDownload className="text-lg group-hover:translate-y-1 transition-transform duration-500" />
                                Download CV
                            </a>

                            <a
                                href="#projects"
                                className="px-5 py-2 rounded-lg font-medium text-slate-200 ring-1 ring-slate-500 hover:ring-purple-400 hover:text-white transition"
                            >
                                View Projects
                            </a>
                        </div>
                    </div>

                    {/* RIGHT: PROFILE IMAGE */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="flex justify-center lg:justify-end"
                    >
                        <div className="relative w-[380px] h-[380px] md:w-[430px] md:h-[430px] rounded-full p-[6px] bg-gradient-to-tr from-blue-500 via-indigo-500 to-purple-600 shadow-xl">

                            {/* Image Container */}
                            <div className="w-full h-full rounded-full overflow-hidden bg-white dark:bg-[#0e152a] flex items-center justify-center">
                                <img
                                    src="/mii.jpg"
                                    alt="Madhumetha"
                                    className="w-full h-full object-cover rounded-full object-[center_35%]"
                                />
                            </div>

                            {/* MEDIUM GLOW BEHIND */}
                            <div className="absolute -z-10 inset-0 rounded-full bg-gradient-to-tr from-blue-500 via-indigo-500 to-purple-600 blur-[75px] opacity-50" />
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}