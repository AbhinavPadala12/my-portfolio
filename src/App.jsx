import { useEffect, useState } from "react"
import Navbar from "./components/Navbar"
import Hero from "./sections/Hero"
import Expertise from "./sections/Expertise"
import About from "./sections/About"
import Coursework from "./sections/Coursework"
import Experience from "./sections/Experience"
import Projects from "./sections/Projects"
import Contact from "./sections/Contact"

export default function App() {
  const [dark, setDark] = useState(false)

  useEffect(() => {
    const root = document.documentElement
    if (dark) root.classList.add("dark")
    else root.classList.remove("dark")
  }, [dark])

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100 transition-colors">
      <Navbar dark={dark} setDark={setDark} />
      <Hero />
      <Expertise />
      <About />
      <Experience />
      <Coursework />
      <Projects />
      <Contact />
    </div>
  )
}
