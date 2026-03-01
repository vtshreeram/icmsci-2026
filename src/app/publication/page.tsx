import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Publication | ICMSCI 2026",
  description: "All registered and presented papers at ICMSCI 2026 will be submitted for inclusion in IEEE Xplore.",
};

const highlights = [
  {
    icon: (
      <svg className="w-5 h-5 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    bg: "bg-blue-100",
    title: "Peer Reviewed",
    desc: "Rigorous double-blind peer review by the Technical Program Committee.",
  },
  {
    icon: (
      <svg className="w-5 h-5 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    bg: "bg-amber-100",
    title: "IEEE Indexed",
    desc: "Indexed in IEEE Xplore Digital Library and major academic databases.",
  },
  {
    icon: (
      <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
      </svg>
    ),
    bg: "bg-green-100",
    title: "Global Reach",
    desc: "Worldwide visibility, citation opportunities, and long-term archival.",
  },
];

export default function Publication() {
  return (
    <div className="min-h-screen">
      {/* Page Header */}
      <section
        className="page-header"
        style={{
          backgroundImage:
            "linear-gradient(rgba(15, 23, 42, 0.80), rgba(30, 64, 175, 0.84)), url('https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=1920&q=80&auto=format&fit=crop')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container">
          <div className="max-w-2xl animate-fade-in">
            <p className="section-label" style={{ color: "#93c5fd" }}>ICMSCI 2026</p>
            <h1 className="mb-4">Publication</h1>
            <p className="text-blue-100 body-lg">
              All registered and presented papers will be submitted for inclusion in IEEE Xplore Digital Library.
            </p>
          </div>
        </div>
      </section>

      {/* IEEE Card */}
      <section className="section bg-slate-50">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="card p-8 mb-6">
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
                <div className="icon-box icon-box-xl bg-primary flex-shrink-0" style={{ borderRadius: "16px" }}>
                  <span className="text-white font-bold text-xl">IEEE</span>
                </div>
                <div>
                  <h2 className="h3 mb-2">IEEE Xplore Digital Library</h2>
                  <p className="body mb-5">
                    All registered and presented papers will be submitted for inclusion into IEEE Xplore,
                    the world&apos;s leading professional association for technical professionals.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <div className="px-4 py-2.5 rounded-lg bg-slate-50 border border-slate-200">
                      <p className="text-xs text-slate-500 font-medium mb-0.5">ISBN</p>
                      <p className="text-primary font-bold text-sm">979-8-3315-6898-6</p>
                    </div>
                    <div className="px-4 py-2.5 rounded-lg bg-slate-50 border border-slate-200">
                      <p className="text-xs text-slate-500 font-medium mb-0.5">DVD ISBN</p>
                      <p className="text-primary font-bold text-sm">979-8-3315-6897-9</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="section bg-white" style={{ paddingTop: "0" }}>
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="grid sm:grid-cols-3 gap-4 mb-6">
              {highlights.map((h, idx) => (
                <div key={idx} className="card p-6 text-center">
                  <div className={`icon-box icon-box-md ${h.bg} mx-auto mb-4`}>
                    {h.icon}
                  </div>
                  <h4 className="h5 mb-2">{h.title}</h4>
                  <p className="small">{h.desc}</p>
                </div>
              ))}
            </div>

            {/* Author Ethics */}
            <div className="card p-8">
              <h3 className="h4 mb-3">Author Ethics</h3>
              <p className="body mb-5">
                All authors must adhere to IEEE publication ethics guidelines. Plagiarism, data fabrication,
                and duplicate submission are strictly prohibited. Please refer to the IEEE Author Center for
                detailed requirements.
              </p>
              <a
                href="https://conferences.ieeeauthorcenter.ieee.org/author-ethics/ethical-requirements/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary font-semibold hover:underline"
              >
                IEEE Author Ethics Guidelines
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
