// src/sections/Experience.jsx
import { Briefcase, GraduationCap } from "lucide-react"

export default function Experience() {
  const education = [
    {
      title: "MS in Computer Science",
      org: "University of Massachusetts Lowell",
      meta: "Aug 2024 – May 2026",
      logo: "/logos/umass.webp",
      courses: ["AI/ML", "Advanced DBMS", "Algorithms", "Data Mining", "Network Forensics"],
    },
    {
      title: "B.Tech in Computer Science",
      org: "SRM University",
      meta: "Sep 2020 – May 2024",
      logo: "/logos/srm.webp",
      courses: ["Python", "DBMS", "AI/ML", "Machine Learning", "Data Structures", "NLP", "Web Development"],
    },
  ]

  const roles = [
    {
      title: "Software Engineering Intern",
      org: "nirvanaHealth | RxAdvance",
      meta: "Feb 2025 – Present",
      bullets: [
        "Built production-grade REST APIs powering enterprise healthcare applications.",
        "Accelerated release cycles by ~40% via CI/CD pipeline engineering.",
        "Developed automated regression testing to improve release stability.",
      ],
    },
    {
      title: "Prototyping & Lab Operations Engineer",
      org: "M2D2",
      meta: "Sep 2024 – Jan 2025",
      bullets: [
        "Led end-to-end 3D prototyping workflows for med-tech startups using SolidWorks + GrabCAD.",
        "Reduced print failures by ~25% through geometry validation and material calibration.",
        "Troubleshot hardware/software integration issues across lab equipment and CAD systems.",
      ],
    },
    {
      title: "Graduate Assistant (Summer), Hospitality & Event Services",
      org: "UMass Lowell",
      meta: "May 2025 – Sep 2025",
      bullets: [
        "Resolved ops bottlenecks for housing services continuity.",
        "Standardized protocols; ~25% workflow efficiency gain.",
      ],
    },
  ]

  const Card = ({ icon, title, org, meta, bullets, accent }) => {
    const Icon = icon
    return (
      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-950">
        <div className="flex items-start gap-4">
          <div className={`w-11 h-11 rounded-xl flex items-center justify-center ${accent}`}>
            <Icon className="w-5 h-5" />
          </div>

          <div className="min-w-0">
            <p className="text-lg font-bold text-slate-900 dark:text-slate-100">{title}</p>
            <p className="text-slate-700 dark:text-slate-300 font-medium">{org}</p>
            <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">{meta}</p>

            <ul className="mt-4 space-y-2 text-slate-600 dark:text-slate-300 list-disc pl-5">
              {bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }

  const EducationCard = ({ title, org, meta, logo, courses }) => (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-950">
      <div className="flex items-start gap-4">
        <div className="w-11 h-11 rounded-xl overflow-hidden flex items-center justify-center border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900">
          <img src={logo} alt={`${org} logo`} className="w-full h-full object-cover" loading="lazy" />
        </div>

        <div className="min-w-0 w-full">
          <p className="text-lg font-bold text-slate-900 dark:text-slate-100">{title}</p>
          <p className="text-slate-700 dark:text-slate-300 font-medium">{org}</p>
          <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">{meta}</p>

          <div className="mt-4 flex flex-wrap gap-2">
            {courses.map((course) => (
              <span
                key={course}
                className="px-3 py-1.5 rounded-full text-xs font-medium bg-slate-100 text-slate-800 dark:bg-slate-900 dark:text-slate-200"
              >
                {course}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )

  return (
    <section id="experience" className="section-wrapper">
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-100">
          My Journey in Tech and Education
        </h2>
        <p className="mt-3 text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
          From strong computer science foundations to advanced systems and real-world impact.
        </p>
      </div>

      <div className="mt-12">
        <p className="font-semibold text-slate-900 dark:text-slate-100 flex items-center gap-2">
          <GraduationCap className="w-5 h-5 text-orange-500" /> Education
        </p>

        <div className="mt-6 grid md:grid-cols-2 gap-6">
          {education.map((e) => (
            <EducationCard key={e.title} {...e} />
          ))}
        </div>
      </div>

      <div className="mt-14">
        <p className="font-semibold text-slate-900 dark:text-slate-100 flex items-center gap-2">
          <Briefcase className="w-5 h-5 text-sky-600 dark:text-sky-400" /> Experience
        </p>

        <div className="mt-6 grid md:grid-cols-2 gap-6">
          {roles.map((r) => (
            <Card
              key={r.title + r.org}
              icon={Briefcase}
              title={r.title}
              org={r.org}
              meta={r.meta}
              bullets={r.bullets}
              accent="bg-sky-100 text-sky-700 dark:bg-sky-500/10 dark:text-sky-300"
            />
          ))}
        </div>
      </div>
    </section>
  )
}
