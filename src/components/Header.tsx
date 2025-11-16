import { useState } from 'react'
import ThemeToggle from './ThemeToggle'
import { Link } from 'react-scroll'

const items = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
]

export default function Header() {
    const [open, setOpen] = useState(false)

    return (
        <header className="fixed inset-x-0 top-0 z-50 bg-white/70 dark:bg-[#0b1020]/70 backdrop-blur border-b border-slate-100 dark:border-slate-800">
            <div className="container mx-auto px-6 py-3 flex items-center justify-between">
                <a href="#home" className="font-extrabold tracking-tight">Portfolio</a>
                <nav className="hidden md:flex items-center gap-6">
                    {items.map(i => (
                        <Link key={i.id} to={i.id} smooth duration={500} offset={-80}
                            className="cursor-pointer hover:text-brand-500">
                            {i.label}
                        </Link>
                    ))}
                    <a href="/MADHUMETHA_B_I_Resume.pdf" download className="px-3 py-2 rounded-md bg-brand-500 text-white hover:bg-brand-600">
                        Download Resume
                    </a>
                    <ThemeToggle />
                </nav>

                <div className="md:hidden flex items-center gap-2">
                    <ThemeToggle />
                    <button onClick={() => setOpen(s => !s)} aria-label="Toggle menu"
                        className="p-2 rounded-md ring-1 ring-slate-200 dark:ring-slate-700">
                        <div className="w-5 h-0.5 bg-slate-900 dark:bg-white mb-1"></div>
                        <div className="w-5 h-0.5 bg-slate-900 dark:bg-white mb-1"></div>
                        <div className="w-5 h-0.5 bg-slate-900 dark:bg-white"></div>
                    </button>
                </div>
            </div>

            {open && (
                <div className="md:hidden px-6 pb-4">
                    <nav className="flex flex-col gap-3 bg-white/95 dark:bg-[#0b1020] rounded-lg p-4 mx-2 shadow-soft">
                        {items.map(i => (
                            <Link key={i.id} to={i.id} smooth duration={500} offset={-80}
                                onClick={() => setOpen(false)} className="cursor-pointer">
                                {i.label}
                            </Link>
                        ))}
                        <a href="/MADHUMETHA_B_I_Resume.pdf" download className="px-3 py-2 rounded-md bg-brand-500 text-white text-center">
                            Download Resume
                        </a>
                    </nav>
                </div>
            )}
        </header>
    )
}