import { Moon, Sun } from "lucide-react"

export default function Navbar({ dark, setDark }) {
  const links = [
    { href: "#about", label: "About" },
    { href: "#coursework", label: "Coursework" },
    { href: "#experience", label: "Experience" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ]

  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-white/70 dark:bg-slate-950/70 border-b border-slate-200 dark:border-slate-800">
      <nav className="max-w-6xl mx-auto px-4 py-3 flex items-center">
        {/* Left brand */}
        <a
          href="#"
          className="font-semibold tracking-tight text-slate-900 dark:text-slate-100"
        >
          Abhinav Padala
        </a>

        {/* Center links (pushed right) */}
        <div className="ml-auto hidden md:flex items-center gap-6 text-sm text-slate-700 dark:text-slate-300">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="hover:text-slate-900 dark:hover:text-white transition"
            >
              {l.label}
            </a>
          ))}
        </div>

        {/* Right actions */}
        <div className="ml-6 flex items-center gap-3">
          <button
            type="button"
            onClick={() => setDark(!dark)}
            className="p-2 rounded-xl border border-slate-300 hover:bg-slate-50 dark:border-slate-700 dark:hover:bg-slate-900 transition"
            aria-label="Toggle dark mode"
          >
            {dark ? (
              <Sun className="w-4 h-4 text-slate-800 dark:text-slate-100" />
            ) : (
              <Moon className="w-4 h-4 text-slate-800 dark:text-slate-100" />
            )}
          </button>

          <a
            href="#contact"
            className="text-sm px-3 py-2 rounded-xl border border-slate-300 hover:bg-slate-50 dark:border-slate-700 dark:hover:bg-slate-900 transition text-slate-900 dark:text-slate-100"
          >
            Get in touch
          </a>
        </div>
      </nav>
    </header>
  )
}
