import { useState } from "react"
import { MapPin, Linkedin } from "lucide-react"
import ResumeModal from "../components/ResumeModal"


export default function Hero() {
  const [resumeOpen, setResumeOpen] = useState(false)

  return (
    <section className="max-w-6xl mx-auto px-4 pt-20 pb-20">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        {/* LEFT SIDE */}
        <div>
          {/* I'm */}
          <p className="text-sm md:text-base text-slate-500 dark:text-slate-400 mb-2">
            I'm
          </p>

          {/* Role */}
          <p className="text-base md:text-lg font-medium text-slate-500 dark:text-slate-300 uppercase tracking-wide">
            A Software Engineer
          </p>

          {/* Location */}
          <p className="mt-2 text-base md:text-lg flex items-center gap-2">
            <MapPin className="w-5 h-5 text-sky-600 dark:text-sky-400" />
            <span className="text-sky-700 dark:text-sky-300 font-semibold">
              United States of America
            </span>
          </p>

          {/* Name */}
          <h1 className="mt-6 text-4xl md:text-6xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
            Venkata Abhinav Padala
          </h1>

          {/* Bio */}
          <p className="mt-6 text-base md:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-xl">
            New grad software engineer focused on building scalable, reliable,
            and user-centric applications. Strong in full-stack development,
            system design fundamentals, and delivering clean, practical solutions.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#contact"
              className="px-6 py-3 rounded-xl bg-slate-900 text-white text-base hover:opacity-95 transition
                         dark:bg-white dark:text-slate-900"
            >
              Get in Touch
            </a>

            {/* ✅ View Resume opens modal */}
            <button
              type="button"
              onClick={() => setResumeOpen(true)}
              className="px-6 py-3 rounded-xl border border-slate-300 text-base hover:bg-slate-50 transition
                         dark:border-slate-700 dark:hover:bg-slate-900 dark:text-slate-100"
            >
              View Resume
            </button>

            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3 rounded-xl border border-slate-300 text-base hover:bg-slate-50 transition
                         dark:border-slate-700 dark:hover:bg-slate-900 dark:text-slate-100
                         flex items-center gap-2"
            >
               <Linkedin
                 className="w-5 h-5 text-[#0A66C2]"
                 strokeWidth={2.2}
              />
              <span className="text-slate-900 dark:text-slate-100">
                LinkedIn
              </span>
            </a>
          </div>
        </div>

        {/* RIGHT SIDE (PHOTO) */}
        <div className="flex justify-center md:justify-end">
          <div className="relative">
            <div
              className="w-[460px] h-[360px] md:w-[600px] md:h-[440px] rounded-[2.5rem] overflow-hidden"
            >
              <img
                src="/profile.JPEG"
                alt="Abhinav Padala"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>

      {/* ✅ Resume Modal */}
      <ResumeModal open={resumeOpen} onClose={() => setResumeOpen(false)} />
    </section>
  )
}
