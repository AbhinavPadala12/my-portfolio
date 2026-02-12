export default function Coursework() {
  const coursework = [
    "Data Structures",
    "Computer Networks",
    "Operating Systems",
    "Database Management",
    "System Design",
    "Software Engineering",
    "Full Stack Development",
    "Artificial Intelligence",
    "Deep Learning",
    "Natural Language Processing",
    "Data Mining",
    "Computer Graphics",
    "Internet of Things (IoT)",
    "Machine Learning",
    "Compiler Design",
    "Blockchain",
    "Ethical Artificial Intelligence",
    "Rapid Prototyping",
  ]

  return (
    <section id="coursework" className="section-wrapper">
      {/* Header */}
      <div className="text-center">

        <h2 className="mt-2 text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-slate-100">
          <span className="text-slate-900 dark:text-slate-100">Relevant</span>{" "}
          <span className="text-orange-500">Coursework</span>
        </h2>

        <p className="mt-3 text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
          A snapshot of core computer science foundations and advanced topics I’ve studied.
        </p>
      </div>

      {/* Coursework Pills */}
      <div
        className="mt-10 rounded-2xl border border-slate-200 bg-white p-8 shadow-sm
                   dark:border-slate-800 dark:bg-slate-950"
      >
        <div className="flex flex-wrap justify-center gap-3">
          {coursework.map((course) => (
            <span
              key={course}
              className="px-4 py-2 rounded-xl text-sm font-medium
                         bg-slate-100 text-slate-800
                         dark:bg-slate-900 dark:text-slate-200"
            >
              {course}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
