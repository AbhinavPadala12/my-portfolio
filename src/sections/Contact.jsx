import { Linkedin, Github, Mail } from "lucide-react"

export default function Contact() {
  return (
    <section
      id="contact"
      className="section-wrapper text-center"
    >
      {/* Headline (Smaller) */}
      <h2 className="text-2xl md:text-4xl font-extrabold text-slate-900 dark:text-slate-100 leading-tight">
        Let’s Work
        <br />
        <span className="text-orange-500">Together</span>
      </h2>

      {/* Subtext (Tighter spacing) */}
     <p className="mt-4 text-base md:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
      I’m actively seeking full-time opportunities in{" "}
      <span className="font-semibold text-slate-900 dark:text-slate-100 whitespace-nowrap">
        Software Engineering and AI/ML
      </span>.
     </p>

     <p className="mt-2 text-base md:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
      If you have an exciting project or role, let’s connect!
     </p>


      {/* Divider */}
      <div className="mt-6 h-px bg-slate-200 dark:bg-slate-800 w-16 mx-auto"></div>

      {/* Contact Area (Reduced gap) */}
      <div className="mt-5">
        <p className="text-base font-semibold text-slate-900 dark:text-slate-100">
          Any Questions?
        </p>

        {/* Email Row */}
        <div className="mt-3 flex justify-center items-center gap-2 flex-wrap">
          <Mail className="w-4 h-4 text-orange-500" />

          <span className="text-slate-600 dark:text-slate-400 text-sm">
            Mail me at:
          </span>

          <a
            href="mailto:abhinavpadala22@gmail.com"
            className="text-base font-semibold bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent hover:opacity-80 transition"
          >
            abhinavpadala22@gmail.com
          </a>
        </div>

        {/* Social Buttons */}
        <div className="mt-5 flex justify-center gap-3 flex-wrap">
          <a
            href="https://linkedin.com/in/YOUR-LINK"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2 rounded-lg border border-slate-300 hover:bg-slate-50 transition
                       dark:border-slate-700 dark:hover:bg-slate-900 dark:text-slate-100 text-sm"
          >
            <Linkedin className="w-4 h-4 text-[#0A66C2]" />
            LinkedIn
          </a>

          <a
            href="https://github.com/AbhinavPadala12"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2 rounded-lg border border-slate-300 hover:bg-slate-50 transition
                       dark:border-slate-700 dark:hover:bg-slate-900 dark:text-slate-100 text-sm"
          >
            <Github className="w-4 h-4" />
            GitHub
          </a>
        </div>
      </div>
    </section>
  )
}
