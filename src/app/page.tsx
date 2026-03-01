import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "ICMSCI 2026 | International Conference on Multi-Agent Systems",
  description:
    "Second International Conference on Multi-Agent Systems for Collaborative Intelligence — March 2–4, 2026, Erode, Tamil Nadu, India",
};

const stats = [
  { value: "150+", label: "Expected Papers" },
  { value: "30+", label: "Countries" },
  { value: "3", label: "Conference Days" },
  { value: "IEEE", label: "Xplore Indexed" },
];

export default function Home() {
  return (
    <div className="min-h-screen">

      {/* ── HERO — full-bleed conference image ── */}
      <section
        style={{
          backgroundImage:
            "linear-gradient(135deg, rgba(10, 20, 50, 0.88) 0%, rgba(30, 64, 175, 0.75) 100%), url('https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1920&q=80&auto=format&fit=crop')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "92vh",
          display: "flex",
          alignItems: "center",
        }}
      >
        <div className="container py-20">
          <div className="max-w-3xl stagger-children">
            {/* Pill badge */}
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-8"
              style={{
                background: "rgba(255,255,255,0.10)",
                color: "#93c5fd",
                border: "1px solid rgba(255,255,255,0.18)",
                backdropFilter: "blur(8px)",
              }}
            >
              <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></span>
              March 2–4, 2026 · Erode, Tamil Nadu, India
            </div>

            <h1
              className="text-white mb-6"
              style={{ fontSize: "clamp(2rem, 5vw, 3.75rem)", lineHeight: 1.1 }}
            >
              Second International Conference on
              <span className="block" style={{ color: "#60a5fa" }}>
                Multi-Agent Systems
              </span>
              for Collaborative Intelligence
            </h1>

            <p className="mb-10 max-w-2xl" style={{ color: "#cbd5e1", fontSize: "1.125rem", lineHeight: 1.7 }}>
              An international forum to present and discuss the most recent research innovations
              and their effective applications in Multi-Agent Systems and Collaborative Intelligence.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link
                href="/submission"
                className="btn-primary"
                style={{ fontSize: "1rem", padding: "0.875rem 2rem" }}
              >
                Submit Your Paper
              </Link>
              <Link
                href="/call-for-paper"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "0.875rem 2rem",
                  borderRadius: "0.5rem",
                  fontWeight: 600,
                  border: "2px solid rgba(255,255,255,0.35)",
                  color: "white",
                  fontSize: "1rem",
                  transition: "all 0.2s",
                }}
              >
                View Call for Papers
              </Link>
            </div>

            <div className="flex flex-wrap gap-6">
              {["IEEE Xplore Indexed", "Peer Reviewed", "Travel Grants Available"].map((label) => (
                <div key={label} className="flex items-center gap-2" style={{ color: "#94a3b8" }}>
                  <svg className="w-4 h-4 flex-shrink-0" style={{ color: "#4ade80" }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-sm font-medium">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS STRIP ── */}
      <div style={{ background: "#0f172a" }}>
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4" style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
            {stats.map((s, i) => (
              <div
                key={s.label}
                className="py-7 px-6 text-center"
                style={{ borderRight: i < 3 ? "1px solid rgba(255,255,255,0.06)" : "none" }}
              >
                <p
                  className="text-white font-bold"
                  style={{ fontFamily: "var(--font-heading)", fontSize: "2rem", lineHeight: 1 }}
                >
                  {s.value}
                </p>
                <p className="text-xs mt-1 font-medium uppercase tracking-widest" style={{ color: "#475569" }}>
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── IMPORTANT DATES ── */}
      <section className="section bg-slate-50">
        <div className="container">
          <div className="text-center mb-10">
            <h2 className="text-center mb-3">Important Dates</h2>
            <p className="body-lg text-slate-600">Mark your calendar for these key deadlines</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="card card-hover p-6">
              <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <p className="text-sm text-primary font-semibold mb-1">Final Paper Submission</p>
              <p className="h3 text-slate-800">18 January, 2026</p>
            </div>
            <div className="card card-hover p-6 border-l-4 border-l-amber-500">
              <div className="w-10 h-10 rounded-lg bg-amber-100 flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <p className="text-sm text-amber-600 font-semibold mb-1">Registration Deadline</p>
              <p className="h3 text-slate-800">17 February, 2026</p>
            </div>
            <div className="card card-hover p-6">
              <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <p className="text-sm text-green-600 font-semibold mb-1">Conference Date</p>
              <p className="h3 text-slate-800">2–4 March, 2026</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── CONFERENCE SCOPE ── */}
      <section className="section bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-center mb-8">Conference Scope</h2>
            <div className="card p-8">
              <p className="body mb-6">
                Multi-Agent System research has progressed over the last few years, and several effective
                applications of this technology are already in practice. The recently developed AI system
                design in the form of a multi-agent system (MAS) has the ability to mitigate the challenges
                posed by social bias and lead to more accurate decision-making, irrespective of the task difficulty.
              </p>
              <p className="body mb-6">
                ICMSCI 2026 provides an international forum to present and discuss about the most recent research
                innovations and their effective applications, as well as the evaluation of the approach&apos;s impact
                and enable technology transfer. The conference aims to present, discuss, and disseminate the latest
                developments and the most important outcomes related to real-world collaborative applications.
              </p>
              <p className="body">
                It provides a unique opportunity to bring multi-disciplinary experts, academicians and research
                practitioners together to exchange their experience in the development and deployment of Multi-Agent
                Systems and promote agent-oriented approach and tools to solve the potential challenges in collaborative applications.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── QUICK LINKS ── */}
      <section className="section bg-slate-50">
        <div className="container">
          <h2 className="text-center mb-10">What&apos;s at ICMSCI 2026</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="card card-hover p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="h4 mb-2">Travel Grant</h4>
                  <p className="small">
                    Travel grants will be offered to individuals who present at the event and are chosen as
                    recipients of the best paper award.
                  </p>
                </div>
              </div>
            </div>

            <div className="card card-hover p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <div>
                  <h4 className="h4 mb-2">Publication</h4>
                  <p className="small mb-2">
                    All registered and presented papers will be submitted for inclusion into IEEE Xplore.
                  </p>
                  <Link href="/publication" className="text-primary font-medium text-sm hover:underline">
                    Learn more →
                  </Link>
                </div>
              </div>
            </div>

            <div className="card card-hover p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </div>
                <div>
                  <h4 className="h4 mb-2">Call for Papers</h4>
                  <p className="small mb-2">
                    Topics include Artificial Intelligence and Agent-based Systems. Submit your research today.
                  </p>
                  <Link href="/call-for-paper" className="text-primary font-medium text-sm hover:underline">
                    View topics →
                  </Link>
                </div>
              </div>
            </div>

            <div className="card card-hover p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="h4 mb-2">Venue</h4>
                  <p className="small mb-2">
                    Surya Engineering College, Erode, Tamil Nadu — 638107, India
                  </p>
                  <Link href="/event-location" className="text-primary font-medium text-sm hover:underline">
                    Get directions →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── ABOUT COLLEGE — with campus image ── */}
      <section className="section bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="card overflow-hidden">
              {/* Campus image header */}
              <div
                style={{
                  height: "260px",
                  backgroundImage:
                    "linear-gradient(rgba(15, 23, 42, 0.45), rgba(30, 64, 175, 0.65)), url('https://images.unsplash.com/photo-1562774053-701939374585?w=1200&q=80&auto=format&fit=crop')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  display: "flex",
                  alignItems: "flex-end",
                }}
              >
                <div className="p-8">
                  <h2 className="text-white" style={{ marginBottom: "0.25rem" }}>
                    About Surya Engineering College
                  </h2>
                  <p style={{ color: "#93c5fd", fontSize: "0.875rem" }}>
                    Erode, Tamil Nadu, India · Est. 2008
                  </p>
                </div>
              </div>
              {/* Content */}
              <div className="p-8">
                <p className="body mb-4">
                  Surya Engineering College (SEC), Erode is a self-financing Engineering College, instituted in
                  the year 2008 under the auspices of Sri Andavar Educational and Charitable Trust. The campus
                  spreads over a sprawling 20 acres of land.
                </p>
                <p className="body">
                  Having well groomed academicians and leaders of the corporate sphere for close to four years,
                  Surya boasts a legacy of Excellence &amp; Integrity. &apos;Ever Greater,&apos; Surya aims at being an
                  Engineering College with a passion for academic excellence, uncompromising human values, sensitive
                  social conscience and an abiding commitment to improve the quality of life.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA SECTION ── */}
      <section className="section bg-primary">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-white mb-4">Ready to Submit Your Paper?</h2>
            <p className="text-blue-100 mb-8 text-lg">
              Join researchers from around the world at ICMSCI 2026 and contribute to the future of Multi-Agent Systems.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/submission" className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                Submit Paper
              </Link>
              <Link href="/contact" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
