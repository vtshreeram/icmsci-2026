import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Call for Papers | ICMSCI 2026",
  description: "ICMSCI 2026 invites original research in Artificial Intelligence and Agent-based Systems.",
};

const tracks = [
  {
    id: "01",
    title: "Track 1 — Artificial Intelligence",
    accentClass: "border-t-blue-700",
    badgeClass: "bg-blue-100",
    labelClass: "text-blue-800",
    dotColor: "#1d4ed8",
    topics: [
      "Cognitive Systems",
      "Neural Networks",
      "Intelligent User Interfaces",
      "Multi-Modal Learning",
      "Creative or Generative AI",
      "Automated Quantum Machine Learning",
      "Intelligent Language Modelling",
      "Augmented Analytics",
      "Artificial Intelligence Operations (AIOps)",
      "AI for IoT and Digital Twins",
    ],
  },
  {
    id: "02",
    title: "Track 2 — Agent-based Systems",
    accentClass: "border-t-amber-500",
    badgeClass: "bg-amber-100",
    labelClass: "text-amber-700",
    dotColor: "#d97706",
    topics: [
      "Multi-Robot Systems and Virtual Agents",
      "Human Agent Interaction, User Interfaces",
      "Mobile Agents",
      "Swarm and Collective Intelligence",
      "Emotional Intelligence",
      "Agent-Oriented Software Engineering Practices",
      "Autonomous Agents",
      "Big Data Modelling and Multi-Sensor Systems",
      "Multi-Agent System Development Frameworks",
      "Agent Engineering and Applications",
    ],
  },
];

const guidelines = [
  "Papers must be original and not simultaneously submitted to another journal or conference.",
  "Maximum 6–8 pages including all figures, tables, and references.",
  "Follow IEEE conference paper format strictly (A4, two-column).",
  "All papers undergo double-blind peer review by the Technical Program Committee.",
];

export default function CallForPaper() {
  return (
    <div className="min-h-screen">
      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <div className="max-w-2xl animate-fade-in">
            <p className="section-label" style={{ color: "#93c5fd" }}>ICMSCI 2026</p>
            <h1 className="mb-4">Call for Papers</h1>
            <p className="text-blue-100 body-lg">
              Inviting original research contributions in Artificial Intelligence and Agent-based Systems.
            </p>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="section bg-slate-50">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="card p-8">
              <p className="body">
                ICMSCI 2026 invites articles in two broad research tracks. The topic areas listed below are
                illustrative — sub-topics related to the main categories are equally acceptable. Prospective
                articles may address one or more of the listed sub-topics without limitation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tracks */}
      <section className="section bg-white" style={{ paddingTop: "1rem" }}>
        <div className="container">
          <div className="space-y-6">
            {tracks.map((track) => (
              <div key={track.id} className={`card p-8 border-t-4 ${track.accentClass}`}>
                <div className="flex items-center gap-4 mb-6">
                  <div className={`icon-box icon-box-md ${track.badgeClass}`}>
                    <span className={`${track.labelClass} font-bold text-sm`}>{track.id}</span>
                  </div>
                  <h2 className="h3">{track.title}</h2>
                </div>
                <ul className="grid md:grid-cols-2 gap-y-3 gap-x-8">
                  {track.topics.map((topic, idx) => (
                    <li key={idx} className="bullet-item">
                      <span className="bullet-dot" style={{ background: track.dotColor }}></span>
                      <span>{topic}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Submission Guidelines */}
      <section className="section bg-slate-50" style={{ paddingTop: "1rem" }}>
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="card p-8">
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
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-white" style={{ paddingTop: "1rem" }}>
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="card p-8 bg-primary text-white text-center">
              <h3 className="h4 mb-3" style={{ color: "white" }}>Ready to Submit?</h3>
              <p className="text-blue-100 mb-6">Download the template and submit via email or visit the submission page.</p>
              <Link href="/submission" className="inline-flex items-center gap-2 bg-white text-primary px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                Go to Submission
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
