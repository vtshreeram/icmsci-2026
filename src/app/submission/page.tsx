import Link from "next/link";

export default function Submission() {
  const guidelines = [
    "Each research paper must clearly address one or more of the topics included in ICMSCI 2026 Call for Papers.",
    "Manuscripts contributed must not have previously been published, presented, or accepted for publication in any other conference or journal.",
    "Multiple submissions from the same corresponding author will not be encouraged.",
    "The submitted manuscript should contain all author related information – name, affiliation, and contact details must be mentioned only in the first page.",
    "The manuscript must be submitted in MS Word/LaTex compatible format text. The final manuscript length should be 6-8 pages.",
    "The paper should not include any header or footer information in the top/bottom margins (e.g. do not include page numbers, copyright notices, etc.).",
    "The authors should carefully proofread the manuscript before submission in order to eliminate the grammatical and typographical errors.",
  ];

  return (
    <div className="min-h-screen py-12 px-4 bg-slate-50">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold text-slate-800">Paper Submission</h1>
          <p className="text-slate-600 mt-2">Submit your research to ICMSCI 2026</p>
        </div>

        <div className="card p-6 mb-6 bg-blue-50 border-blue-200">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-800">Submit via Email</h3>
              <p className="text-blue-600 font-medium">icmsciconference@gmail.com</p>
            </div>
          </div>
          <p className="text-slate-600 mt-4">
            Authors are invited to submit original papers, which have not been published elsewhere 
            and are not currently under consideration for another journal, conference or workshop.
          </p>
        </div>

        <div className="card p-6 mb-6">
          <h3 className="text-lg font-bold text-slate-800 mb-4">Paper Templates</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <a 
              href="https://www.ieee.org/content/dam/ieee-org/ieee/web/org/conferences/conference-template-a4.docx"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 rounded-xl bg-slate-50 border border-slate-200 hover:border-blue-300 hover:bg-blue-50 transition-all"
            >
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <div>
                <p className="text-slate-800 font-medium">MS Word Template</p>
                <p className="text-slate-500 text-sm">Download .docx</p>
              </div>
            </a>
            <a 
              href="https://www.ieee.org/content/dam/ieee-org/ieee/web/pubs/conference-latex-template_10-17-19.zip"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 rounded-xl bg-slate-50 border border-slate-200 hover:border-blue-300 hover:bg-blue-50 transition-all"
            >
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <div>
                <p className="text-slate-800 font-medium">LaTeX Template</p>
                <p className="text-slate-500 text-sm">Download .zip</p>
              </div>
            </a>
          </div>
        </div>

        <div className="card p-6 mb-6">
          <h3 className="text-lg font-bold text-slate-800 mb-4">Submission Guidelines</h3>
          <ul className="space-y-4">
            {guidelines.map((guideline, idx) => (
              <li key={idx} className="flex items-start gap-3 text-slate-600">
                <span className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-blue-600 text-xs font-bold">{idx + 1}</span>
                </span>
                {guideline}
              </li>
            ))}
          </ul>
        </div>

        <div className="card p-6">
          <h3 className="text-lg font-bold text-slate-800 mb-4">Review Process</h3>
          <ul className="space-y-3 text-slate-600">
            <li className="flex items-start gap-3">
              <span className="text-blue-600 mt-1">•</span>
              Paper submissions should be limited to a maximum of 6-8 pages, including the bibliography and any possible appendices.
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-600 mt-1">•</span>
              Submissions longer than 8 pages and without specified template will be rejected without review.
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-600 mt-1">•</span>
              All submissions will be double-blind reviewed by the technical program committee.
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-600 mt-1">•</span>
              Articles will be subject to plagiarism check before being sent for review process.
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-600 mt-1">•</span>
              Accepted papers will be published in the conference proceedings provided at least one author registers and presents.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
