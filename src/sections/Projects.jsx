// src/sections/Projects.jsx

const ProjectCard = ({ title, desc, tech, link }) => (
  <div
    className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm
               dark:border-slate-800 dark:bg-slate-950"
  >
    <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">
      {title}
    </h3>

    <p className="mt-3 text-slate-600 dark:text-slate-300">{desc}</p>

    <div className="mt-4 flex flex-wrap gap-2">
      {tech.map((t) => (
        <span
          key={t}
          className="px-3 py-1 text-xs rounded-xl bg-slate-100 text-slate-800
                     dark:bg-slate-900 dark:text-slate-200"
        >
          {t}
        </span>
      ))}
    </div>

    <div className="mt-6">
      <a
        href={link}
        target="_blank"
        rel="noreferrer"
        className="block w-full text-center
                   px-5 py-3 rounded-2xl
                   border border-slate-300
                   hover:bg-slate-50
                   dark:border-slate-700
                   dark:hover:bg-slate-900
                   text-slate-900 dark:text-slate-100
                   font-medium transition"
      >
        View Project Details <span className="text-base">↗</span>
      </a>
    </div>
  </div>
)

export default function Projects() {
  const projects = [
    {
      title: "NexusMend — Autonomous Microservice Fault Detection & Recovery",
      desc: "Designed a multi-agent SRE system (LangGraph + Kafka) that autonomously diagnoses root causes at 92% confidence across 4 microservices and opens GitHub PRs to fix them — cutting MTTR from hours to under 10 seconds. Powered by OpenTelemetry & Prometheus observability, validated across 5 Chaos Engineering scenarios, with a React dashboard for real-time monitoring.",
      tech: ["Python", "LangGraph", "Kafka", "React", "Docker", "OpenTelemetry", "Prometheus"],
      link: "https://github.com/AbhinavPadala12",
    },
    {
      title: "AI Self-Healing Automation",
      desc: "Built a self-healing E2E testing framework that detects broken selectors, captures DOM context, and uses a local LLM to repair CSS selectors at runtime—reducing flaky test maintenance and keeping CI/CD green.",
      tech: ["Playwright", "JavaScript", "Node.js", "Ollama", "LLM (Llama 3.2)", "CI/CD"],
      link: "https://github.com/AbhinavPadala12/AI-Self-Healing-Automation",
    },
    {
      title: "NYC Transit Pipeline",
      desc: "Designed an end-to-end data pipeline to process NYC transit data using distributed compute and cloud warehousing, enabling fast analytical queries through structured ETL workflows.",
      tech: ["Python", "Spark", "Snowflake", "SQL", "ETL"],
      link: "https://github.com/AbhinavPadala12/nyc-transit-pipeline",
    },
    {
      title: "Railway Reservation System",
      desc: "Engineered a booking platform with authentication, dynamic search, and database-driven workflows using modular REST APIs and a clean backend architecture.",
      tech: ["Python", "Flask", "HTML", "Jinja", "REST APIs"],
      link: "https://github.com/AbhinavPadala12/Railway-Reservation-System",
    },
  ]

  return (
    <section id="projects" className="section-wrapper">
      {/* Header */}
      <div className="text-center">
        <h2 className="mt-3 text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-100">
          Take a look at some of the projects I’ve built.
        </h2>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {projects.map((p) => (
          <ProjectCard key={p.title} {...p} />
        ))}
      </div>

      {/* Bottom Button */}
      <div className="mt-10 flex justify-center">
        <a
          href="https://github.com/AbhinavPadala12?tab=repositories"
          target="_blank"
          rel="noreferrer"
          className="px-6 py-3 rounded-xl border border-slate-300
                     hover:bg-slate-50 transition
                     dark:border-slate-700 dark:hover:bg-slate-900
                     text-slate-900 dark:text-slate-100"
        >
          Browse All Projects ↗
        </a>
      </div>
    </section>
  )
}
