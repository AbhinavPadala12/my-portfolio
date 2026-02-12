// src/sections/Expertise.jsx

export default function Expertise() {
  const items = [
    {
      title: "Full-Stack Development",
      desc: "Building responsive web apps with React, modern UI patterns, APIs, and production-ready architectures.",
      img: "/expertise/fullstack.png",
    },
    {
      title: "Cloud & DevOps",
      desc: "Deploying services with Docker and CI/CD, working with AWS, and designing reliable cloud infrastructure.",
      img: "/expertise/cloud.png",
    },
    {
      title: "Backend & Distributed Systems",
      desc: "Designing scalable REST APIs, microservices, and systems focused on performance, reliability, and clean design.",
      img: "/expertise/backend.png",
    },
    {
      title: "Data & Databases",
      desc: "Designing schemas, optimizing queries, and working with SQL/NoSQL to build fast, consistent data layers.",
      img: "/expertise/data.png",
    },
    {
      title: "AI / Machine Learning",
      desc: "Applying ML fundamentals with practical experience in deep learning and NLP to build intelligent features.",
      // IMPORTANT: rename your file to machine-learning.webp (no spaces)
      img: "/expertise/machine-learning.webp",
    },
  ]

  return (
    <section id="expertise" className="section-wrapper">
      {/* Header */}
      <div className="text-center">
        <p className="text-xs text-orange-500 uppercase tracking-widest font-extrabold">
          My Technical Expertise
        </p>
        <h2 className="mt-3 text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-100">
          What I Build & Work On
        </h2>
        <p className="mt-3 text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
          Specialized in backend systems, cloud infrastructure, and machine learning solutions. Building scalable, production-ready software with modern engineering practices.
        </p>
      </div>

      {/* Cards */}
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {items.map((it) => (
          <div
            key={it.title}
            className="rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden
                       dark:border-slate-800 dark:bg-slate-950"
          >
            <div className="h-40 bg-slate-100 dark:bg-slate-900">
              <img
                src={it.img}
                alt={it.title}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>

            <div className="p-6">
              <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">
                {it.title}
              </h3>
              <p className="mt-2 text-slate-600 dark:text-slate-300 leading-relaxed">
                {it.desc}
              </p>
            </div>
          </div>
        ))}

        {/* CTA CARD (6th card) */}
        <div
          className="rounded-2xl border border-orange-300 bg-orange-50 p-6 shadow-sm
                     dark:border-orange-700 dark:bg-orange-950 flex flex-col justify-between"
        >
          <div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">
              Let’s Work Together
            </h3>
            <p className="mt-2 text-slate-700 dark:text-slate-300 leading-relaxed">
              Looking for a software engineer who can adapt across roles and ship
              real-world solutions? Let’s connect.
            </p>
          </div>

          <a
            href="#contact"
            className="mt-6 inline-flex justify-center rounded-xl bg-orange-500 px-5 py-3
                       text-white font-medium hover:bg-orange-600 transition"
          >
            Get in touch
          </a>
        </div>
      </div>
    </section>
  )
}
