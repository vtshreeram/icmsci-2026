import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Keynote Speakers | ICMSCI 2026",
  description:
    "Distinguished keynote speakers at ICMSCI 2026 — International Conference on Multi-Agent Systems.",
};

const speakers = [
  {
    name: "Dr. D. Vinod Kumar",
    initials: "DV",
    title: "Chair, IEEE AES Chapter — Madras Section",
    affiliation: "Vinayaka Mission's Kirupanada Variyar Engineering College, Salem, India",
    gradient: "linear-gradient(135deg, #1e40af 0%, #1d4ed8 100%)",
    accentColor: "#60a5fa",
  },
  {
    name: "Dr. Minwoo Jake Lee",
    initials: "ML",
    title: "Faculty, Computer Science",
    affiliation: "University of North Carolina at Charlotte, USA",
    gradient: "linear-gradient(135deg, #0f766e 0%, #0d9488 100%)",
    accentColor: "#2dd4bf",
  },
  {
    name: "Dr. Jennie Si",
    initials: "JS",
    title: "Professor, Electrical Engineering",
    affiliation: "Arizona State University, United States",
    gradient: "linear-gradient(135deg, #7c3aed 0%, #6d28d9 100%)",
    accentColor: "#a78bfa",
  },
  {
    name: "Prof. Dr. Fernando Buarque",
    initials: "FB",
    title: "IEEE Computational Intelligence in Latin America Task Force",
    affiliation: "University of Pernambuco, Brazil",
    gradient: "linear-gradient(135deg, #b45309 0%, #d97706 100%)",
    accentColor: "#fbbf24",
  },
];

export default function Speakers() {
  return (
    <div className="min-h-screen">
      {/* Page Header */}
      <section
        className="page-header"
        style={{
          backgroundImage:
            "linear-gradient(rgba(15, 23, 42, 0.80), rgba(30, 64, 175, 0.85)), url('https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=1920&q=80&auto=format&fit=crop')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container">
          <div className="max-w-2xl animate-fade-in">
            <p className="section-label" style={{ color: "#93c5fd" }}>ICMSCI 2026</p>
            <h1 className="mb-4">Keynote Speakers</h1>
            <p className="text-blue-100 body-lg">
              Distinguished experts sharing insights on Multi-Agent Systems and Collaborative Intelligence.
            </p>
          </div>
        </div>
      </section>

      {/* Speakers Grid */}
      <section className="section bg-slate-50">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-8">
            {speakers.map((speaker, idx) => (
              <div key={idx} className="card card-hover overflow-hidden">
                {/* Coloured header band */}
                <div
                  style={{
                    background: speaker.gradient,
                    padding: "2rem 2rem 1.5rem",
                    display: "flex",
                    alignItems: "center",
                    gap: "1.25rem",
                  }}
                >
                  {/* Large initial avatar */}
                  <div
                    style={{
                      width: "72px",
                      height: "72px",
                      borderRadius: "50%",
                      background: "rgba(255,255,255,0.15)",
                      border: "2px solid rgba(255,255,255,0.35)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                      fontSize: "1.5rem",
                      fontWeight: 700,
                      color: "white",
                      fontFamily: "var(--font-heading)",
                      backdropFilter: "blur(4px)",
                    }}
                  >
                    {speaker.initials}
                  </div>
                  <div>
                    <h3
                      style={{
                        color: "white",
                        fontSize: "1.125rem",
                        fontWeight: 700,
                        marginBottom: "0.25rem",
                        lineHeight: 1.3,
                      }}
                    >
                      {speaker.name}
                    </h3>
                    {speaker.title && (
                      <p style={{ color: speaker.accentColor, fontSize: "0.8125rem", fontWeight: 500 }}>
                        {speaker.title}
                      </p>
                    )}
                  </div>
                </div>
                {/* Card body */}
                <div className="p-6">
                  <div className="flex items-start gap-3">
                    <svg
                      className="w-4 h-4 flex-shrink-0 mt-0.5"
                      style={{ color: "#94a3b8" }}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                      />
                    </svg>
                    <p className="small">{speaker.affiliation}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call for Speakers */}
      <section className="section bg-white" style={{ paddingTop: "0" }}>
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="card p-8">
              <div className="flex items-start gap-4">
                <div className="icon-box icon-box-md bg-blue-100 flex-shrink-0">
                  <svg className="w-5 h-5 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="h4 mb-2">Call for Speakers</h3>
                  <p className="body mb-4">
                    We are continuously inviting distinguished experts to serve as keynote speakers.
                    If you are interested in presenting at ICMSCI 2026, please contact the organizing committee.
                  </p>
                  <Link href="/contact" className="btn-primary" style={{ display: "inline-flex", width: "auto" }}>
                    Get in Touch
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
