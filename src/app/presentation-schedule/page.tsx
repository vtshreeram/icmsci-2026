import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Presentation Schedule | ICMSCI 2026",
  description: "Conference presentation schedule for ICMSCI 2026 — March 2–4, 2026.",
};

const days = [
  {
    label: "Day 01",
    date: "02 March 2026",
    badgeStyle: { background: "#dbeafe", color: "#1e40af" },
    timeStyle: { color: "#1e40af" },
    events: [
      { time: "09:30 – 10:30 AM", activity: "Inauguration & Keynote Talk – 1" },
      { time: "10:30 – 01:00 PM", activity: "Session 1" },
      { time: "01:00 – 02:00 PM", activity: "Lunch Break" },
      { time: "02:00 – 04:00 PM", activity: "Session 2" },
      { time: "04:00 – 05:30 PM", activity: "Session 3" },
    ],
  },
  {
    label: "Day 02",
    date: "03 March 2026",
    badgeStyle: { background: "#fef3c7", color: "#92400e" },
    timeStyle: { color: "#d97706" },
    events: [
      { time: "09:00 – 01:00 PM", activity: "Session 4" },
      { time: "01:00 – 02:00 PM", activity: "Lunch Break" },
      { time: "02:00 – 04:00 PM", activity: "Session 5" },
      { time: "04:00 – 05:30 PM", activity: "Session 6" },
    ],
  },
  {
    label: "Day 03",
    date: "04 March 2026",
    badgeStyle: { background: "#dcfce7", color: "#15803d" },
    timeStyle: { color: "#059669" },
    events: [
      { time: "09:00 – 01:00 PM", activity: "Session 7" },
      { time: "01:00 – 02:00 PM", activity: "Lunch Break" },
      { time: "02:00 – 04:00 PM", activity: "Session 8" },
      { time: "04:00 – 05:30 PM", activity: "Session 9 & Valedictory" },
    ],
  },
];

const papers = [
  { id: "ICMSCI-405",  title: "Autonomous Underwater Vehicle for Real-Time Pipeline Defect Detection",             authors: "J. Jaiganesh, Renoye R, Mohamed N S",                           day: 1, session: 1, time: "10:30 – 10:50 AM" },
  { id: "ICMSCI-898",  title: "Resilient Multi-Modal IoT Crowd Monitoring System with Self-Healing Sensor Architecture", authors: "S. Ramesh, B. Rohith, K. Chetananand, R. Manikandan",       day: 1, session: 1, time: "10:50 – 11:10 AM" },
  { id: "ICMSCI-366",  title: "Simulating Emergency Teamwork Behavior with Multi-Agent LLMs",                     authors: "Atsushi Shimoda, Rei Kobori, Keito Takahashi, Zhang Yatong",   day: 1, session: 1, time: "11:10 – 11:30 AM" },
  { id: "ICMSCI-992",  title: "Temporal Artifact Analysis for AI-Generated Video Detection",                      authors: "Vijayakumar S D, Karunakaran P, Balasubramaniam C",             day: 1, session: 1, time: "11:30 – 11:50 AM" },
  { id: "ICMSCI-1089", title: "Automated NLP-Powered Reporting for Colon Cancer Diagnosis",                       authors: "T A Mohanaprakash, Lohit S, Rakshan M",                         day: 1, session: 1, time: "11:50 AM – 12:10 PM" },
  { id: "ICMSCI-998",  title: "Plant Disease Prediction Using Ensemble Risk Scoring Engine",                       authors: "Pavithra P, Sukumar P",                                         day: 1, session: 1, time: "12:10 – 12:30 PM" },
  { id: "ICMSCI-797",  title: "The Smart Fall Detection and Emergency Alert System",                               authors: "Shankar R, Avishkar G, Mohamed Irfan S",                        day: 1, session: 1, time: "12:30 – 12:50 PM" },
  { id: "ICMSCI-787",  title: "Latent Regime-Aware Market Prediction Using Stacked LSTM",                         authors: "Amudha L, Vishal V S, Manoj N",                                 day: 1, session: 2, time: "02:00 – 02:20 PM" },
  { id: "ICMSCI-774",  title: "Robust Real-Time Respiratory Rate Estimation Using Wi-Fi CSI",                     authors: "S K Manikandan, M Nisha Angeline, V Suganya",                   day: 1, session: 2, time: "02:20 – 02:40 PM" },
  { id: "ICMSCI-1048", title: "Smart Battery Management System for Electric Vehicles",                             authors: "Ramraj B, Rajesh S, Indra Kumar M",                              day: 1, session: 2, time: "02:40 – 03:00 PM" },
  { id: "ICMSCI-820",  title: "PATHFINDER: Intelligent Footwear for the Blind",                                   authors: "Preethi S, Chithrida M P, Dharani M",                            day: 1, session: 2, time: "03:00 – 03:20 PM" },
  { id: "ICMSCI-709",  title: "Shape Memory Alloy Spring-Actuator Using Spread Spectrum PWM",                     authors: "K. Muralidharan, G. Muthukumaran",                              day: 1, session: 2, time: "03:20 – 03:40 PM" },
];

export default function PresentationSchedule() {
  return (
    <div className="min-h-screen">
      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <div className="max-w-2xl animate-fade-in">
            <p className="section-label" style={{ color: "#93c5fd" }}>ICMSCI 2026</p>
            <h1 className="mb-4">Presentation Schedule</h1>
            <p className="text-blue-100 body-lg">
              March 2–4, 2026 · 20-minute slots · PowerPoint format
            </p>
          </div>
        </div>
      </section>

      {/* Info bar */}
      <div className="bg-white border-b border-slate-200">
        <div className="container py-4">
          <div className="flex flex-wrap gap-6">
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="small"><strong className="text-slate-700">Duration:</strong> 20 minutes per paper</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span className="small"><strong className="text-slate-700">Format:</strong> PowerPoint (PPT)</span>
            </div>
          </div>
        </div>
      </div>

      <section className="section bg-slate-50">
        <div className="container">
          <div className="max-w-4xl mx-auto space-y-8">

            {/* Day Schedules */}
            {days.map((day) => (
              <div key={day.label}>
                <div className="flex items-center gap-3 mb-4">
                  <span className="timeline-day-badge" style={day.badgeStyle}>{day.label}</span>
                  <span className="small font-medium text-slate-500">{day.date}</span>
                </div>
                <div className="space-y-2">
                  {day.events.map((event, idx) => (
                    <div key={idx} className="schedule-row">
                      <span className="schedule-time md:w-44 flex-shrink-0" style={day.timeStyle}>
                        {event.time}
                      </span>
                      <span className="text-slate-700 font-medium">{event.activity}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}

            {/* Paper Presentations */}
            <div className="card overflow-hidden">
              <div className="px-7 py-5 border-b border-slate-100 bg-slate-50">
                <h3 className="h4">Paper Presentations</h3>
                <p className="small mt-1">Selected papers · Full schedule in conference proceedings</p>
              </div>
              <div className="divide-y divide-slate-100">
                {papers.map((paper, idx) => (
                  <div
                    key={idx}
                    className="p-5 hover:bg-slate-50 transition-colors"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-start gap-3 sm:gap-5">
                      <div className="flex-shrink-0">
                        <span className="badge badge-blue">{paper.id}</span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-semibold text-slate-800 leading-snug mb-1">{paper.title}</p>
                        <p className="small mb-2">{paper.authors}</p>
                        <p className="caption">
                          Day {paper.day} · Session {paper.session} · {paper.time}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
