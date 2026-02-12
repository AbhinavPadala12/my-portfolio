import { X, FileText } from "lucide-react"

export default function ResumeModal({ open, onClose }) {
  if (!open) return null

  return (
    <div
      className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center px-4"
      onClick={onClose}
    >
      <div
        className="w-full max-w-lg rounded-2xl bg-white p-6 shadow-xl
                   dark:bg-slate-950 dark:border dark:border-slate-800"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
              Which resume would you like to view?
            </h3>
            <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">
              Choose the version that best matches what you’re interested in.
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-900 transition"
            aria-label="Close"
          >
            <X className="w-5 h-5 text-slate-500 dark:text-slate-300" />
          </button>
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href="/resumes/software-engineer.pdf"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl
                       bg-slate-900 text-white hover:opacity-95 transition
                       dark:bg-white dark:text-slate-900"
          >
            <FileText className="w-4 h-4" />
            Software Engineering
          </a>

          <a
            href="/resumes/artificial-intelligence.pdf"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl
                       border border-slate-300 hover:bg-slate-50 transition
                       dark:border-slate-700 dark:hover:bg-slate-900 dark:text-slate-100"
          >
            <FileText className="w-4 h-4" />
            Artificial Intelligence
          </a>
        </div>
      </div>
    </div>
  )
}
