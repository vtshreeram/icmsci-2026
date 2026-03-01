import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Venue | ICMSCI 2026",
  description: "ICMSCI 2026 is held at Surya Engineering College, Erode, Tamil Nadu, India.",
};

const travelOptions = [
  {
    icon: (
      <svg className="w-5 h-5 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
      </svg>
    ),
    bg: "bg-blue-100",
    mode: "By Air",
    detail: "Coimbatore International Airport (CJB) — approximately 100 km from the venue.",
  },
  {
    icon: (
      <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
      </svg>
    ),
    bg: "bg-green-100",
    mode: "By Train",
    detail: "Erode Junction (ED) — well connected to all major cities across India.",
  },
  {
    icon: (
      <svg className="w-5 h-5 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    bg: "bg-amber-100",
    mode: "By Road",
    detail: "Located on NH 79 (Perundurai Highway) — easily accessible by bus, cab, or private vehicle.",
  },
];

export default function EventLocation() {
  return (
    <div className="min-h-screen">
      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <div className="max-w-2xl animate-fade-in">
            <p className="section-label" style={{ color: "#93c5fd" }}>ICMSCI 2026</p>
            <h1 className="mb-4">Venue</h1>
            <p className="text-blue-100 body-lg">
              Surya Engineering College, Erode, Tamil Nadu — a sprawling 20-acre campus.
            </p>
          </div>
        </div>
      </section>

      {/* Venue Card */}
      <section className="section bg-slate-50">
        <div className="container">
          <div className="max-w-3xl mx-auto space-y-5">
            <div className="card p-8">
              <div className="flex flex-col sm:flex-row items-start gap-6">
                <div className="icon-box icon-box-xl bg-primary flex-shrink-0" style={{ borderRadius: "16px" }}>
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <div>
                  <h2 className="h3 mb-1">Surya Engineering College</h2>
                  <p className="body-lg text-primary font-medium mb-1">Erode, Tamil Nadu — 638107, India</p>
                  <p className="small mb-5">
                    Perundurai Highway, Kathirampatti, Mettukadai
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <a
                      href="https://www.google.com/maps/search/Hotels/@11.3172788,77.5952633,12.19z"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-secondary"
                      style={{ padding: "0.625rem 1.25rem", fontSize: "0.875rem" }}
                    >
                      Nearby Hotels
                    </a>
                    <a
                      href="https://www.google.com/maps/search/attractions/@11.3332963,77.5950688,11.83z"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-secondary"
                      style={{ padding: "0.625rem 1.25rem", fontSize: "0.875rem" }}
                    >
                      Nearby Attractions
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Getting There */}
            <div className="card p-8">
              <h3 className="h4 mb-6">Getting There</h3>
              <div className="space-y-5">
                {travelOptions.map((opt, idx) => (
                  <div key={idx} className="flex items-start gap-4">
                    <div className={`icon-box icon-box-md ${opt.bg} flex-shrink-0`}>
                      {opt.icon}
                    </div>
                    <div>
                      <p className="font-semibold text-slate-800 mb-0.5">{opt.mode}</p>
                      <p className="body">{opt.detail}</p>
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
