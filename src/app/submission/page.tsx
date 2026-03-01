import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Paper Submission | ICMSCI 2026",
  description: "Submit your research paper to ICMSCI 2026. Download templates and review submission guidelines.",
};

const guidelines = [
  "Each paper must clearly address one or more topics in the ICMSCI 2026 Call for Papers.",
  "Manuscripts must not have been previously published, presented, or accepted elsewhere.",
  "Multiple submissions from the same corresponding author are discouraged.",
  "Author information (name, affiliation, contact) must appear only on the first page.",
  "Submit in MS Word or LaTeX format. Final manuscript length: 6–8 pages.",
  "Do not include headers, footers, page numbers, or copyright notices in the margins.",
  "Carefully proofread the manuscript before submission to eliminate grammatical errors.",
];

const reviewPoints = [
  "Maximum 6–8 pages including bibliography and appendices.",
  "Submissions exceeding 8 pages or not using the specified template will be rejected without review.",
  "All submissions undergo double-blind review by the Technical Program Committee.",
  "Papers are subject to plagiarism check before being sent for review.",
  "Accepted papers are published provided at least one author registers and presents.",
];

export default function Submission() {
  return (
    <div className="min-h-screen">
      {/* Page Header */}
      <section
        className="page-header"
        style={{
          backgroundImage:
            "linear-gradient(rgba(15, 23, 42, 0.80), rgba(30, 64, 175, 0.84)), url('https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1920&q=80&auto=format&fit=crop')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container">
          <div className="max-w-2xl animate-fade-in">
            <p className="section-label" style={{ color: "#93c5fd" }}>ICMSCI 2026</p>
            <h1 className="mb-4">Paper Submission</h1>
            <p className="text-blue-100 body-lg">
              Submit your original research to ICMSCI 2026 for peer review and IEEE Xplore publication.
            </p>
          </div>
        </div>
      </section>

      <section className="section bg-slate-50">
        <div className="container">
          <div className="max-w-3xl mx-auto space-y-6">

            {/* Submit via Email */}
            <div className="card p-7">
              <div className="flex items-start gap-5">
                <div className="icon-box icon-box-md bg-blue-100 flex-shrink-0">
                  <svg className="w-5 h-5 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="h4 mb-1">Submit via Email</h3>
                  <a href="mailto:icmsciconference@gmail.com" className="text-primary font-bold text-lg hover:underline">
                    icmsciconference@gmail.com
                  </a>
                  <p className="body mt-3">
                    Authors are invited to submit original papers not published elsewhere and not currently
                    under consideration for another journal, conference, or workshop.
                  </p>
                </div>
              </div>
            </div>

            {/* Templates */}
            <div className="card p-7">
              <h3 className="h4 mb-5">Paper Templates</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                <a
                  href="https://www.ieee.org/content/dam/ieee-org/ieee/web/org/conferences/conference-template-a4.docx"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-5 rounded-xl bg-slate-50 border border-slate-200 hover:border-primary hover:bg-blue-50 transition-all group"
                >
                  <div className="icon-box icon-box-md bg-blue-100 group-hover:bg-blue-200 transition-colors">
                    <svg className="w-5 h-5 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-slate-800">MS Word Template</p>
                    <p className="small">Download .docx</p>
                  </div>
                </a>
                <a
                  href="https://www.ieee.org/content/dam/ieee-org/ieee/web/pubs/conference-latex-template_10-17-19.zip"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-5 rounded-xl bg-slate-50 border border-slate-200 hover:border-primary hover:bg-blue-50 transition-all group"
                >
                  <div className="icon-box icon-box-md bg-blue-100 group-hover:bg-blue-200 transition-colors">
                    <svg className="w-5 h-5 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-slate-800">LaTeX Template</p>
                    <p className="small">Download .zip</p>
                  </div>
                </a>
              </div>
            </div>

            {/* Submission Guidelines */}
            <div className="card p-7">
              <h3 className="h4 mb-6">Submission Guidelines</h3>
              <ul className="space-y-4">
                {guidelines.map((g, idx) => (
                  <li key={idx} className="step-item">
                    <span className="step-number">{idx + 1}</span>
                    <span className="body">{g}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Review Process */}
            <div className="card p-7">
              <h3 className="h4 mb-6">Review Process</h3>
              <ul className="space-y-3">
                {reviewPoints.map((point, idx) => (
                  <li key={idx} className="bullet-item">
                    <span className="bullet-dot"></span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
