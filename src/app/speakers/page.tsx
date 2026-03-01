import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Keynote Speakers | ICMSCI 2026",
  description: "Distinguished keynote speakers at ICMSCI 2026 — International Conference on Multi-Agent Systems.",
};

const speakers = [
  {
    name: "Dr. D. Vinod Kumar",
    initials: "DV",
    title: "Chair, IEEE AES Chapter — Madras Section",
    affiliation: "Vinayaka Mission's Kirupanada Variyar Engineering College, Salem, India",
  },
  {
    name: "Dr. Minwoo Jake Lee",
    initials: "ML",
    title: "Faculty, Computer Science",
    affiliation: "University of North Carolina at Charlotte, USA",
  },
  {
    name: "Dr. Jennie Si",
    initials: "JS",
    title: "Professor, Electrical Engineering",
    affiliation: "Arizona State University, United States",
  },
  {
    name: "Prof. Dr. Fernando Buarque",
    initials: "FB",
    title: "IEEE Computational Intelligence in Latin America Task Force",
    affiliation: "University of Pernambuco, Brazil",
  },
];

export default function Speakers() {
  return (
    <div className="min-h-screen">
      {/* Page Header */}
      <section className="page-header">
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
          <div className="grid md:grid-cols-2 gap-6">
            {speakers.map((speaker, idx) => (
              <div key={idx} className="card card-hover p-7">
                <div className="flex items-start gap-5">
                  <div className="avatar avatar-lg" style={{ background: idx % 2 === 0 ? "#1e40af" : "#0f766e", minWidth: "4rem" }}>
                    {speaker.initials}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="h4 mb-1">{speaker.name}</h3>
                    {speaker.title && (
                      <p className="text-primary font-medium text-sm mb-2">{speaker.title}</p>
                    )}
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
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
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
