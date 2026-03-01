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
      <body className="antialiased">
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

        <main className="pt-16 min-h-screen">{children}</main>

        {/* Footer */}
        <footer className="bg-primary text-white">
          <div className="container py-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-white/15 flex items-center justify-center">
                    <span className="text-white font-bold text-xs">ICM</span>
                  </div>
                  <h3 className="font-bold text-lg text-white">ICMSCI 2026</h3>
                </div>
                <p className="text-blue-200 text-sm leading-relaxed">
                  Second International Conference on Multi-Agent Systems for Collaborative Intelligence
                </p>
                <p className="text-blue-300 text-sm mt-2">March 2–4, 2026 · Erode, Tamil Nadu, India</p>
              </div>
              <div>
                <h3 className="font-semibold text-base mb-3 text-white">Quick Links</h3>
                <div className="flex flex-col gap-1.5">
                  <Link href="/call-for-paper" className="text-blue-200 hover:text-white text-sm transition-colors">Call for Papers</Link>
                  <Link href="/submission" className="text-blue-200 hover:text-white text-sm transition-colors">Paper Submission</Link>
                  <Link href="/registration" className="text-blue-200 hover:text-white text-sm transition-colors">Registration</Link>
                  <Link href="/speakers" className="text-blue-200 hover:text-white text-sm transition-colors">Keynote Speakers</Link>
                  <Link href="/presentation-schedule" className="text-blue-200 hover:text-white text-sm transition-colors">Schedule</Link>
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-base mb-3 text-white">Contact</h3>
                <p className="text-blue-200 text-sm">icmsciconference@gmail.com</p>
                <p className="text-blue-200 text-sm mt-1">+91-9789653809</p>
                <div className="mt-3">
                  <p className="text-blue-300 text-sm">Surya Engineering College</p>
                  <p className="text-blue-300 text-sm">Erode, Tamil Nadu 638107, India</p>
                </div>
              </div>
            </div>
            <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-2">
              <p className="text-blue-300 text-sm">© 2026 ICMSCI. All rights reserved.</p>
              <p className="text-blue-400 text-xs">Organized by Surya Engineering College · In partnership with IEEE</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
