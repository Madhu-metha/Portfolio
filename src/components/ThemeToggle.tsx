import { useEffect, useState } from 'react'
import { Sun, Moon } from 'lucide-react'

export default function ThemeToggle() {
    const [theme, setTheme] = useState<'light' | 'dark'>(() =>
        (localStorage.getItem('theme') as 'light' | 'dark') || 'light'
    )

    useEffect(() => {
        const root = document.documentElement
        if (theme === 'dark') root.classList.add('dark')
        else root.classList.remove('dark')
        localStorage.setItem('theme', theme)
    }, [theme])

    return (
        <button
            aria-label="Toggle theme"
            onClick={() => setTheme(t => (t === 'light' ? 'dark' : 'light'))}
            className="p-2 rounded-lg ring-1 ring-slate-200 dark:ring-slate-700 hover:ring-brand-500 transition"
        >
            {theme === 'light' ? <Moon size={16} /> : <Sun size={16} />}
        </button>
    )
}
