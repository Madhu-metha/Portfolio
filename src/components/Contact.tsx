import { useState } from "react";
import { motion } from "framer-motion";

export default function Contact() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [msg, setMsg] = useState("");

    const submit = (e: React.FormEvent) => {
        e.preventDefault();
        alert("Thanks — I will get back to you soon! 😊");
        setName("");
        setEmail("");
        setMsg("");
    };

    return (
        <section
            id="contact"
            className="py-20 bg-gradient-to-b from-[#0b1220] via-[#0b1220]/95 to-[#050b16]"
        >
            <motion.div
                className="container mx-auto px-6 max-w-xl"
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
            >
                {/* Title */}
                <h2 className="text-4xl md:text-5xl font-extrabold text-center text-white">
                    Contact Me
                </h2>
                <div className="w-28 h-[3px] bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mt-3 mb-10" />

                {/* Contact Form Card */}
                <motion.div
                    className="bg-white/10 backdrop-blur-xl p-8 rounded-2xl border border-white/10 shadow-xl"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                >
                    <form onSubmit={submit} className="grid gap-4">
                        <input
                            className="p-3 rounded-lg bg-white/10 text-white border border-white/20 placeholder-slate-400 focus:ring-2 focus:ring-purple-500 outline-none"
                            placeholder="Your Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />

                        <input
                            type="email"
                            className="p-3 rounded-lg bg-white/10 text-white border border-white/20 placeholder-slate-400 focus:ring-2 focus:ring-purple-500 outline-none"
                            placeholder="Your Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />

                        <textarea
                            rows={6}
                            className="p-3 rounded-lg bg-white/10 text-white border border-white/20 placeholder-slate-400 focus:ring-2 focus:ring-purple-500 outline-none"
                            placeholder="Your Message..."
                            value={msg}
                            onChange={(e) => setMsg(e.target.value)}
                            required
                        />

                        <motion.button
                            whileHover={{ scale: 1.05, boxShadow: "0 0 18px rgba(168, 85, 247, 0.4)" }}
                            whileTap={{ scale: 0.96 }}
                            className="px-5 py-3 rounded-lg font-semibold bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
                        >
                            Send Message ✨
                        </motion.button>
                    </form>
                </motion.div>

                {/* Contact Email */}
                <motion.div
                    className="mt-6 text-center text-slate-300 text-sm md:text-base"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                >
                    Or email me directly 👉{" "}
                    <a
                        className="text-purple-400 hover:underline font-semibold"
                        href="mailto:madhumetha.b.i@gmail.com"
                    >
                        madhumetha.b.i@gmail.com
                    </a>
                </motion.div>
            </motion.div>
        </section>
    );
}
