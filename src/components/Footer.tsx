import { motion } from "framer-motion";
import { FiGithub, FiLinkedin } from "react-icons/fi";

export default function Footer() {
    return (
        <footer className="py-12 bg-gradient-to-t from-[#060b17] to-[#0b1220] border-t border-white/10">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="container mx-auto px-6 text-center"
            >
                {/* Top Divider Glow */}
                <div className="w-24 h-[3px] bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mb-6" />

                {/* Footer Text */}
                <p className="text-slate-300 text-sm md:text-base">
                    © {new Date().getFullYear()} Madhumetha B.I — Built with ❤️ using React, TypeScript & Tailwind CSS
                </p>

                {/* Social Icons */}
                <div className="mt-6 flex justify-center gap-6">
                    <motion.a
                        href="https://github.com/Madhu-metha"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.15 }}
                        className="text-white text-2xl p-3 rounded-full 
                        bg-white/10 backdrop-blur-xl border border-white/10
                        hover:text-purple-400 hover:shadow-lg hover:shadow-purple-500/30 
                        transition-all"
                    >
                        <FiGithub />
                    </motion.a>

                    <motion.a
                        href="https://www.linkedin.com/in/madhumethabalachandran"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.15 }}
                        className="text-white text-2xl p-3 rounded-full 
                        bg-white/10 backdrop-blur-xl border border-white/10
                        hover:text-blue-400 hover:shadow-lg hover:shadow-blue-500/30 
                        transition-all"
                    >
                        <FiLinkedin />
                    </motion.a>
                </div>

                {/* Bottom Spacing */}
                <div className="mt-6 text-[11px] text-slate-500">
                    Designed for a seamless & responsive web experience ✨
                </div>
            </motion.div>
        </footer>
    );
}
