import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FiCode, FiTarget, FiBook } from "react-icons/fi";
import { PiSparkle } from "react-icons/pi";

export default function About() {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

    // Section-level staggered entrance
    const sectionVariants = {
        hidden: { opacity: 0, y: 18 },
        show: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut", staggerChildren: 0.12 },
        },
    };

    // Children basic fade up
    const item = {
        hidden: { opacity: 0, y: 14 },
        show: { opacity: 1, y: 0, transition: { duration: 0.55 } },
    };

    // Flip cards 
    const flipCard = {
        hidden: { rotateY: -90, opacity: 0 },
        show: {
            rotateY: 0,
            opacity: 1,
            transition: { duration: 0.7, ease: "easeOut" },
        },
        hover: { rotateY: 8, transition: { duration: 0.35 } },
    };

    return (
        <section
            id="about"
            className="py-20 bg-gradient-to-br from-[#0b1220]/90 via-[#0a132e]/80 to-[#050b16]/90"
        >
            <motion.div
                ref={ref}
                variants={sectionVariants}
                initial="hidden"
                animate={inView ? "show" : "hidden"}
                className="container mx-auto px-6 text-center"
            >
                {/* Title */}
                <motion.h2 variants={item} className="text-4xl md:text-5xl font-extrabold text-white">
                    About Me
                </motion.h2>

                {/* Underline */}
                <motion.div
                    variants={item}
                    className="w-28 h-[3px] bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mt-3 mb-6"
                />

                {/* Subtitle (S2) */}
                <motion.p
                    variants={item}
                    className="text-slate-300 text-sm md:text-base font-semibold mb-12"
                >
                    Full Stack Developer <span className="text-purple-400">|</span> Creative Tech Mind{" "}
                    <span className="text-purple-400">|</span> UI / UX Driven Engineer
                </motion.p>

                {/* Flip Cards */}
                <div className="grid md:grid-cols-2 gap-8 md:gap-10 mb-16 [perspective:1000px]">
                    {/* What I Do */}
                    <motion.div
                        variants={flipCard}
                        whileHover="hover"
                        style={{ transformStyle: "preserve-3d" }}
                        className="text-left bg-white/10 backdrop-blur-xl p-6 md:p-7 rounded-2xl border border-white/10 shadow-lg hover:shadow-purple-500/25 transition-shadow"
                    >
                        <div className="flex items-center gap-3 mb-3">
                            <FiCode className="text-purple-400 text-2xl" />
                            <h3 className="text-xl md:text-2xl font-bold text-white">What I Do</h3>
                        </div>
                        <p className="text-slate-300 text-sm md:text-[15px] leading-relaxed">
                            I specialize in building high-performance full-stack web applications using the MERN Stack — with a strong
                            focus on clean component architecture, reusable UI, API-driven development, and creating meaningful
                            digital experiences that users remember.
                        </p>
                    </motion.div>

                    {/* My Goals */}
                    <motion.div
                        variants={flipCard}
                        whileHover="hover"
                        style={{ transformStyle: "preserve-3d" }}
                        className="text-left bg-white/10 backdrop-blur-xl p-6 md:p-7 rounded-2xl border border-white/10 shadow-lg hover:shadow-purple-500/25 transition-shadow"
                    >
                        <div className="flex items-center gap-3 mb-3">
                            <FiTarget className="text-purple-400 text-2xl" />
                            <h3 className="text-xl md:text-2xl font-bold text-white">My Goals</h3>
                        </div>

                        <p className="text-slate-300 text-sm md:text-[15px] leading-relaxed mb-3">
                            I'm driven by a passion to build meaningful digital products that make a difference. I aim to:
                        </p>

                        <ul className="space-y-2">
                            <li className="flex items-start gap-2 text-slate-200 text-sm md:text-[15px]">
                                <PiSparkle className="mt-[2px] text-purple-300" />
                                <span>Master full-stack engineering, emerging technologies and UI/UX principles.</span>
                            </li>
                            <li className="flex items-start gap-2 text-slate-200 text-sm md:text-[15px]">
                                <PiSparkle className="mt-[2px] text-purple-300" />
                                <span>Build digital products that inspire, empower and create a positive impact.</span>
                            </li>
                            <li className="flex items-start gap-2 text-slate-200 text-sm md:text-[15px]">
                                <PiSparkle className="mt-[2px] text-purple-300" />
                                <span>Develop real-world solutions that solve meaningful problems and deliver value.</span>
                            </li>
                        </ul>
                    </motion.div>
                </div>

                {/* Education & Background */}
                <motion.div
                    variants={item}
                    className="bg-white/10 backdrop-blur-xl p-7 md:p-8 max-w-3xl mx-auto rounded-2xl border border-white/10 shadow-xl hover:shadow-purple-500/30 text-left"
                >
                    <h3 className="text-2xl md:text-[26px] font-bold text-white mb-6 flex items-center gap-2">
                        <FiBook className="text-purple-400 text-2xl" /> Education & Background
                    </h3>

                    {/* College (L1 layout) */}
                    <div className="flex items-center gap-4 md:gap-5 mb-5 group">
                        <div
                            className="w-10 h-10 rounded-full bg-white/30 backdrop-blur-md ring-1 ring-white/40 shadow-md flex items-center justify-center overflow-hiddengroup-hover:shadow-purple-500/30 transition-shadow"
                            title="IFET College of Engineering"
                        >
                            <img
                                src="/Ifet.jpeg"
                                alt="IFET College Logo"
                                className="w-9 h-9 rounded-full object-contain"
                            />
                        </div>
                        <div>
                            <p className="text-white font-semibold text-[15px] md:text-base">
                                IFET College of Engineering (2021 - 2025)
                            </p>
                            <p className="text-purple-300 text-[13px] md:text-sm">
                                B.E. Computer Science & Engineering — <span className="font-medium">CGPA: 8.10</span>
                            </p>
                        </div>
                    </div>

                    {/* School (L1 layout) */}
                    <div className="flex items-center gap-4 md:gap-5">
                        <div
                            className="w-10 h-10 rounded-full bg-white/30 backdrop-blur-md ring-1 ring-white/40 shadow-md flex items-center justify-center overflow-hidden group-hover:shadow-purple-500/30 transition-shadow"
                            title="Sacred Heart Convent A.I Higher Secondary School, Villupuram"
                        >
                            <img
                                src="/sch.jpeg"
                                alt="Sacred Heart Convent A.I Hr. Sec. School Logo"
                                className="w-9 h-9 rounded-full object-contain"
                            />
                        </div>
                        <div>
                            <p className="text-white font-semibold text-[15px] md:text-base">
                                Sacred Heart Convent A.I Higher Secondary School, Villupuram
                            </p>
                            <p className="text-purple-300 text-[13px] md:text-sm">
                                Higher Secondary — <span className="font-medium">88%</span>
                            </p>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </section>
    );
}