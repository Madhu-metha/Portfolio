import { motion } from "framer-motion";
import { Github, Linkedin, Mail, MessageCircle } from "lucide-react";

export default function SocialBar() {
    const socials = [
        {
            icon: <Github size={18} />,
            url: "https://github.com/Madhu-metha",
            label: "GitHub",
            newTab: true,
        },
        {
            icon: <Linkedin size={18} />,
            url: "https://www.linkedin.com/in/madhumetha-b-i/",
            label: "LinkedIn",
            newTab: true,
        },
        {
            icon: <Mail size={18} />,
            url: "mailto:madhumetha.b.i@gmail.com",
            label: "Email",
            newTab: false, 
        },
        {
            icon: <MessageCircle size={18} />,
            url: "https://wa.me/918610599679", 
            label: "WhatsApp",
            newTab: true,
        },
    ];

    return (
        <div className="hidden lg:flex flex-col gap-4 fixed left-6 top-1/3 z-50">
            {socials.map((item, index) => (
                <motion.a
                    key={item.label}
                    href={item.url}
                    target={item.newTab ? "_blank" : undefined}
                    rel={item.newTab ? "noreferrer" : undefined}
                    aria-label={item.label}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.12, duration: 0.4 }}
                    whileHover={{
                        scale: 1.25,
                        y: -3,
                        boxShadow: "0 0 12px rgba(59,130,246,0.7)",
                    }}
                    className="p-3 rounded-full bg-white dark:bg-[#0c1a34] shadow-md ring-1 ring-slate-300 dark:ring-slate-700 hover:bg-brand-500 hover:text-white transition cursor-pointer"
                >
                    {item.icon}
                </motion.a>
            ))}

            <div className="w-[2px] h-24 bg-slate-400 dark:bg-slate-600 mx-auto mt-2"></div>
        </div>
    );
}
