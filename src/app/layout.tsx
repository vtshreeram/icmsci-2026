import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";
import MobileNav from "./components/MobileNav";
import NavLink from "./components/NavLink";

export const metadata: Metadata = {
  title: "ICMSCI 2026 | International Conference on Multi-Agent Systems",
  description:
    "Second International Conference on Multi-Agent Systems for Collaborative Intelligence — March 2–4, 2026, Erode, Tamil Nadu, India",
};

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/committee", label: "Committee" },
  { href: "/call-for-paper", label: "Call for Paper" },
  { href: "/speakers", label: "Speakers" },
  { href: "/submission", label: "Submission" },
  { href: "/publication", label: "Publication" },
  { href: "/registration", label: "Registration" },
  { href: "/event-location", label: "Venue" },
  { href: "/contact", label: "Contact" },
  { href: "/presentation-schedule", label: "Schedule" },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased flex flex-col min-h-screen">
        {/* Navigation */}
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-slate-200 shadow-sm">
          <div className="container">
            <div className="flex items-center justify-between h-16">
              <Link href="/" className="flex items-center gap-3 group">
                <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center transition-transform group-hover:scale-105">
                  <span className="text-white font-bold text-sm">ICM</span>
                </div>
                <div>
                  <span className="text-slate-800 font-bold text-lg leading-none block">ICMSCI</span>
                  <span className="text-primary text-xs font-semibold">2026</span>
                </div>
              </Link>

              <div className="hidden lg:flex items-center gap-0.5">
                {navLinks.map((link) => (
                  <NavLink key={link.href} href={link.href} label={link.label} />
                ))}
              </div>

              <div className="lg:hidden">
                <MobileNav />
              </div>
            </div>
          </div>
        </nav>

        <main className="pt-16 flex-1">{children}</main>

        {/* Footer — slate-900 (#0f172a): distinct from primary-blue CTA, high contrast */}
        <footer style={{ background: "#0f172a" }}>
          <div className="container" style={{ paddingTop: "3.5rem", paddingBottom: "2.5rem" }}>

            {/* Top row */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pb-10" style={{ borderBottom: "1px solid rgba(255,255,255,0.08)" }}>

              {/* Brand */}
              <div>
                <div className="flex items-center gap-2.5 mb-4">
                  <div className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                       style={{ background: "#1e40af" }}>
                    <span className="text-white font-bold text-xs tracking-wide">ICM</span>
                  </div>
                  <div>
                    <span className="text-white font-bold text-base leading-none block">ICMSCI</span>
                    <span className="font-semibold text-xs" style={{ color: "#60a5fa" }}>2026</span>
                  </div>
                </div>
                <p className="text-sm leading-relaxed mb-2" style={{ color: "#94a3b8" }}>
                  Second International Conference on Multi-Agent Systems for Collaborative Intelligence
                </p>
                <p className="text-xs" style={{ color: "#64748b" }}>March 2–4, 2026 · Erode, Tamil Nadu, India</p>

                {/* IEEE badge */}
                <div className="inline-flex items-center gap-2 mt-4 px-3 py-1.5 rounded-md"
                     style={{ background: "rgba(30,64,175,0.25)", border: "1px solid rgba(96,165,250,0.2)" }}>
                  <span className="text-xs font-bold" style={{ color: "#60a5fa" }}>IEEE</span>
                  <span className="text-xs" style={{ color: "#64748b" }}>Xplore Indexed</span>
                </div>
              </div>

              {/* Quick Links */}
              <div>
                <h3 className="text-white font-semibold text-sm mb-4 tracking-wide uppercase" style={{ letterSpacing: "0.08em" }}>
                  Quick Links
                </h3>
                <div className="flex flex-col gap-2.5">
                  {[
                    { href: "/call-for-paper",        label: "Call for Papers" },
                    { href: "/submission",             label: "Paper Submission" },
                    { href: "/registration",           label: "Registration" },
                    { href: "/speakers",               label: "Keynote Speakers" },
                    { href: "/presentation-schedule",  label: "Schedule" },
                    { href: "/committee",              label: "Committee" },
                  ].map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="text-sm transition-colors hover:text-white"
                      style={{ color: "#94a3b8" }}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Contact */}
              <div>
                <h3 className="text-white font-semibold text-sm mb-4 tracking-wide uppercase" style={{ letterSpacing: "0.08em" }}>
                  Contact
                </h3>
                <div className="space-y-2.5">
                  <div className="flex items-center gap-2">
                    <svg className="w-3.5 h-3.5 flex-shrink-0" style={{ color: "#60a5fa" }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <a href="mailto:icmsciconference@gmail.com" className="text-sm hover:text-white transition-colors" style={{ color: "#94a3b8" }}>
                      icmsciconference@gmail.com
                    </a>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-3.5 h-3.5 flex-shrink-0" style={{ color: "#60a5fa" }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <p className="text-sm" style={{ color: "#94a3b8" }}>+91-9789653809</p>
                  </div>
                  <div className="flex items-start gap-2 pt-1">
                    <svg className="w-3.5 h-3.5 flex-shrink-0 mt-0.5" style={{ color: "#60a5fa" }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <div>
                      <p className="text-sm" style={{ color: "#94a3b8" }}>Surya Engineering College</p>
                      <p className="text-xs mt-0.5" style={{ color: "#64748b" }}>Erode, Tamil Nadu 638107, India</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom bar */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-6">
              <p className="text-xs" style={{ color: "#475569" }}>
                © 2026 ICMSCI. All rights reserved.
              </p>
              <p className="text-xs" style={{ color: "#334155" }}>
                Organized by Surya Engineering College · In partnership with IEEE CIS
              </p>
            </div>

          </div>
        </footer>
      </body>
    </html>
  );
}
