export default function Footer() {
    return (
        <footer className="py-10 border-t border-slate-100 dark:border-slate-800">
            <div className="container mx-auto px-6 text-center text-sm">
                <div>© {new Date().getFullYear()} Madhumetha B.I. — Built with ❤️ using React, TS & Tailwind</div>
                <div className="mt-3 space-x-4">
                    <a className="hover:underline" href="https://github.com/Madhu-metha" target="_blank" rel="noreferrer">GitHub</a>
                    <a className="hover:underline" href="http://www.linkedin.com/in/madhumethabalachandran" target="_blank" rel="noreferrer">LinkedIn</a>
                </div>
            </div>
        </footer>
    )
}
