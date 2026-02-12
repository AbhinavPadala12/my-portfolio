export default function About() {
  return (
    <section id="about" className="section-wrapper">
      {/* Centered heading */}
      <div className="text-center">

        <h2 className="mt-3 text-4xl md:text-5xl font-bold text-slate-900 dark:text-slate-100">
          About me
        </h2>
      </div>

      {/* Content */}
      <div className="mt-12 grid md:grid-cols-2 gap-12 items-center">
        {/* Left: Medium photo */}
        <div className="flex justify-center md:justify-start">
          <div
            className="
              w-[340px] h-[420px]
              md:w-[380px] md:h-[460px]
              rounded-[2rem] overflow-hidden
              border border-slate-200 bg-white shadow-sm
              dark:border-slate-800 dark:bg-slate-950
            "
          >
            <img
              src="/about.JPEG"
              alt="Abhinav Padala"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </div>

        {/* Right: Text */}
        <div>
          <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-slate-100">
            {" "}
            <span className="text-orange-500">Designing Reliable Systems Across the Stack</span>
          </h3>

          <div className="mt-5 space-y-5 text-slate-600 dark:text-slate-300 leading-relaxed text-base md:text-lg">
            <p>
              I’m a software engineer with a strong foundation in computer
              science, currently pursuing my <span className="font-semibold text-slate-900 dark:text-slate-100">Master’s in Computer Science</span> at the{" "}
              <span className="font-semibold text-slate-900 dark:text-slate-100">
                University of Massachusetts Lowell
              </span>
              , graduating <span className="font-semibold text-slate-900 dark:text-slate-100">May 2026</span>.
            </p>

            <p>
              I enjoy designing and building systems that are{" "}
              <span className="font-semibold text-slate-900 dark:text-slate-100">
                scalable, reliable, and thoughtfully engineered
              </span>
              . My interests span full-stack development, backend systems, cloud
              & DevOps, and applied AI.
            </p>

            <p>
              I’m looking for opportunities where I can contribute, learn fast,
              and grow while solving meaningful real-world problems.
            </p>
          </div>

          {/* Optional CTA button (keep if you want). If you want this removed, delete this block */}
          <div className="mt-8">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl
                         border border-slate-300 hover:bg-slate-50 transition
                         dark:border-slate-700 dark:hover:bg-slate-900
                         text-slate-900 dark:text-slate-100"
            >
              Let’s connect <span aria-hidden>↗</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
