import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Registration | ICMSCI 2026",
  description: "Register for ICMSCI 2026. View registration fees, inclusions, and guidelines.",
};

const fees = [
  { category: "Indian Student Members",          ieeeCis: "₹ 9,600",  ieee: "₹ 10,100", nonIeee: "₹ 10,600" },
  { category: "Indian Faculty / Research Scholars", ieeeCis: "₹ 9,750",  ieee: "₹ 10,250", nonIeee: "₹ 10,750" },
  { category: "Indian Listeners",                ieeeCis: "₹ 6,500",  ieee: "₹ 7,000",  nonIeee: "₹ 7,500"  },
  { category: "Foreign Authors",                 ieeeCis: "$130",      ieee: "$150",      nonIeee: "$170"      },
  { category: "Foreign Listeners",               ieeeCis: "$110",      ieee: "$130",      nonIeee: "$140"      },
];

const inclusions = [
  "Individual certificates for all authors",
  "Conference bag",
  "DVD Conference Proceedings",
  "Conference agenda",
  "ID card and lanyard",
  "Conference pen and scribbling pad",
  "Presentation and networking opportunity",
  "Refreshment breaks (morning & evening)",
  "Lunch",
  "Publication of 1 accepted paper in the proceedings",
];

const guidelines = [
  "Registered members should notify the committee about their payment immediately.",
  "Corresponding authors of accepted papers must sign and submit the Publishing Agreement Copyright form.",
  "After completing payment, participants must send a scanned copy of the registration receipt.",
  "No modifications to the paper will be accepted after submitting the final documents.",
  "One paper presentation and publication is allowed per registration.",
  "Authors of accepted papers may contact the coordinator for late registration with coordinator approval.",
];

export default function Registration() {
  return (
    <div className="min-h-screen">
      {/* Page Header */}
      <section
        className="page-header"
        style={{
          backgroundImage:
            "linear-gradient(rgba(15, 23, 42, 0.78), rgba(30, 64, 175, 0.82)), url('https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1920&q=80&auto=format&fit=crop')",
          backgroundSize: "cover",
          backgroundPosition: "center top",
        }}
      >
        <div className="container">
          <div className="max-w-2xl animate-fade-in">
            <p className="section-label" style={{ color: "#93c5fd" }}>ICMSCI 2026</p>
            <h1 className="mb-4">Registration</h1>
            <p className="text-blue-100 body-lg">
              Register for ICMSCI 2026 · Deadline: 17 February 2026
            </p>
          </div>
        </div>
      </section>

      <section className="section bg-slate-50">
        <div className="container">
          <div className="max-w-4xl mx-auto space-y-6">

            {/* Fee Table */}
            <div className="card overflow-hidden">
              <div className="p-6 border-b border-slate-100">
                <h3 className="h4">Registration Fee</h3>
              </div>
              <div className="overflow-x-auto">
                <table className="data-table">
                  <thead>
                    <tr>
                      <th>Category</th>
                      <th className="text-center">IEEE CIS Members</th>
                      <th className="text-center">IEEE Members</th>
                      <th className="text-center">Non-IEEE Members</th>
                    </tr>
                  </thead>
                  <tbody>
                    {fees.map((fee, idx) => (
                      <tr key={idx}>
                        <td className="font-medium text-slate-700">{fee.category}</td>
                        <td className="text-center">
                          <span className="text-primary font-bold">{fee.ieeeCis}</span>
                        </td>
                        <td className="text-center">{fee.ieee}</td>
                        <td className="text-center">{fee.nonIeee}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Inclusions */}
            <div className="card p-8">
              <h3 className="h4 mb-6">Registration Includes</h3>
              <div className="grid sm:grid-cols-2 gap-y-3 gap-x-8">
                {inclusions.map((item, idx) => (
                  <div key={idx} className="bullet-item">
                    <span className="bullet-dot"></span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Guidelines */}
            <div className="card p-8">
              <h3 className="h4 mb-6">Registration Guidelines</h3>
              <ul className="space-y-4">
                {guidelines.map((g, idx) => (
                  <li key={idx} className="step-item">
                    <span className="step-number">{idx + 1}</span>
                    <span className="body">{g}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Cancellation */}
            <div className="card p-6 border-l-4 border-l-red-500">
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
                <div>
                  <h4 className="font-bold text-red-600 mb-1">Cancellation & Refund Policy</h4>
                  <p className="body">After registration, no refunds or cancellations are permitted under any circumstances.</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
