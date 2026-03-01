import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | ICMSCI 2026",
  description: "Contact the ICMSCI 2026 organizing committee for general and registration inquiries.",
};

export default function Contact() {
  return (
    <div className="min-h-screen">
      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <div className="max-w-2xl animate-fade-in">
            <p className="section-label" style={{ color: "#93c5fd" }}>ICMSCI 2026</p>
            <h1 className="mb-4">Contact Us</h1>
            <p className="text-blue-100 body-lg">
              Reach out to the organizing committee for any queries or clarifications.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="section bg-slate-50">
        <div className="container">
          <div className="max-w-3xl mx-auto space-y-5">
            <div className="grid md:grid-cols-2 gap-5">
              {/* General */}
              <div className="card p-7">
                <div className="flex items-center gap-3 mb-5">
                  <div className="icon-box icon-box-md bg-blue-100">
                    <svg className="w-5 h-5 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <h3 className="h4">General Information</h3>
                </div>
                <div className="space-y-4">
                  <div>
                    <p className="info-label">Contact Person</p>
                    <p className="info-value font-semibold">Prof. L. Kalaiselvi</p>
                  </div>
                  <div>
                    <p className="info-label">Designation</p>
                    <p className="info-value">Associate Professor & Head, Dept. of ECE, Surya Engineering College, Erode, India</p>
                  </div>
                  <div>
                    <p className="info-label">Email</p>
                    <a href="mailto:icmsciconference@gmail.com" className="text-primary font-medium hover:underline text-sm">
                      icmsciconference@gmail.com
                    </a>
                  </div>
                  <div>
                    <p className="info-label">Phone</p>
                    <p className="info-value">+91-9789653809</p>
                  </div>
                </div>
              </div>

              {/* Registration */}
              <div className="card p-7">
                <div className="flex items-center gap-3 mb-5">
                  <div className="icon-box icon-box-md bg-amber-100">
                    <svg className="w-5 h-5 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <h3 className="h4">Registration</h3>
                </div>
                <div className="space-y-4">
                  <div>
                    <p className="info-label">Contact Person</p>
                    <p className="info-value font-semibold">Prof. M. Sowmiya</p>
                  </div>
                  <div>
                    <p className="info-label">Designation</p>
                    <p className="info-value">Assistant Professor, Dept. of ECE, Surya Engineering College, Erode, India</p>
                  </div>
                  <div>
                    <p className="info-label">Email</p>
                    <a href="mailto:icmsciconference@gmail.com" className="text-amber-600 font-medium hover:underline text-sm">
                      icmsciconference@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Message Form */}
            <div className="card p-8">
              <h3 className="h4 mb-6">Send a Message</h3>
              <form className="space-y-5">
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="block info-label mb-2">Your Name</label>
                    <input
                      type="text"
                      className="w-full"
                      placeholder="Full name"
                    />
                  </div>
                  <div>
                    <label className="block info-label mb-2">Email Address</label>
                    <input
                      type="email"
                      className="w-full"
                      placeholder="you@email.com"
                    />
                  </div>
                </div>
                <div>
                  <label className="block info-label mb-2">Subject</label>
                  <input
                    type="text"
                    className="w-full"
                    placeholder="What is your inquiry about?"
                  />
                </div>
                <div>
                  <label className="block info-label mb-2">Message</label>
                  <textarea
                    rows={5}
                    className="w-full resize-none"
                    placeholder="Your message..."
                  ></textarea>
                </div>
                <div>
                  <button type="submit" className="btn-primary">
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
