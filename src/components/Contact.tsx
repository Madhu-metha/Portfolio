// import React, { useState } from 'react';
// import { motion } from 'framer-motion';

// const Contact: React.FC = () => {
//     const [name, setName] = useState('');
//     const [email, setEmail] = useState('');
//     const [msg, setMsg] = useState('');

//     const submit = (e: React.FormEvent) => {
//         e.preventDefault();
//         // Hook into your backend or use EmailJS / Formspree
//         alert('Thanks — I will get back to you soon!');
//         setName(''); setEmail(''); setMsg('');
//     };

//     return (
//         <section id="contact" className="py-20">
//             <div className="container mx-auto px-6 max-w-xl">
//                 <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="text-3xl font-bold mb-4">Get in touch</motion.h2>
//                 <motion.form onSubmit={submit} className="grid gap-4" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
//                     <input value={name} onChange={(e) => setName(e.target.value)} required placeholder="Name" className="p-3 rounded-md bg-white dark:bg-[#061423] border" />
//                     <input value={email} onChange={(e) => setEmail(e.target.value)} required placeholder="Email" type="email" className="p-3 rounded-md bg-white dark:bg-[#061423] border" />
//                     <textarea value={msg} onChange={(e) => setMsg(e.target.value)} required placeholder="Message" rows={6} className="p-3 rounded-md bg-white dark:bg-[#061423] border" />
//                     <motion.button whileHover={{ scale: 1.02 }} className="px-5 py-3 rounded-md bg-sky-600 text-white">Send message</motion.button>
//                 </motion.form>
//             </div>
//         </section>
//     );
// };

// export default Contact;

import { useState } from 'react'
import { motion } from 'framer-motion'

export default function Contact() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [msg, setMsg] = useState('')

    const submit = (e: React.FormEvent) => {
        e.preventDefault()
        alert('Thanks — I will get back to you soon!')
        setName(''); setEmail(''); setMsg('')
    }

    return (
        <section id="contact" className="py-20">
            <div className="container mx-auto px-6 max-w-xl">
                <motion.h2 className="text-3xl font-bold mb-6"
                    initial={{ opacity: 0, y: 6 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                    Connect with me
                </motion.h2>
                <form onSubmit={submit} className="grid gap-4">
                    <input className="p-3 rounded-lg bg-white dark:bg-[#0c1a34] border border-slate-200 dark:border-slate-700"
                        placeholder="Name" value={name} onChange={e => setName(e.target.value)} required />
                    <input type="email" className="p-3 rounded-lg bg-white dark:bg-[#0c1a34] border border-slate-200 dark:border-slate-700"
                        placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} required />
                    <textarea rows={6} className="p-3 rounded-lg bg-white dark:bg-[#0c1a34] border border-slate-200 dark:border-slate-700"
                        placeholder="Message" value={msg} onChange={e => setMsg(e.target.value)} required />
                    <motion.button whileHover={{ scale: 1.02 }}
                        className="px-5 py-3 rounded-lg bg-brand-500 text-white hover:bg-brand-600">
                        Send Message
                    </motion.button>
                </form>

                <div className="mt-6 text-sm text-slate-600 dark:text-slate-300">
                    Or email me: <a className="text-brand-500 hover:underline" href="mailto:madhumetha.b.i@gmail.com">madhumetha.b.i@gmail.com</a>
                </div>
            </div>
        </section>
    )
}
