"use client";

import Link from "next/link";
import "./globals.css";

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
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <Link href="/" className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-blue-800 flex items-center justify-center">
                  <span className="text-white font-bold text-sm">ICM</span>
                </div>
                <div>
                  <span className="text-slate-800 font-bold text-lg">ICMSCI</span>
                  <span className="text-blue-600 text-xs font-semibold ml-1">2026</span>
                </div>
              </Link>
              
              <div className="hidden lg:flex items-center gap-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="nav-link text-sm"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
              
              <div className="lg:hidden">
                <select 
                  onChange={(e) => window.location.href = e.target.value}
                  className="bg-white text-slate-700 text-sm px-3 py-2 rounded-lg border border-slate-300"
                >
                  {navLinks.map((link) => (
                    <option key={link.href} value={link.href}>
                      {link.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </nav>

        <main className="pt-16 min-h-screen bg-slate-50">
          {children}
        </main>

        {/* Footer */}
        <footer className="bg-blue-800 text-white mt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="font-bold text-lg mb-3">ICMSCI 2026</h3>
                <p className="text-blue-200 text-sm leading-relaxed">
                  Second International Conference on Multi-Agent Systems for Collaborative Intelligence
                </p>
                <p className="text-blue-200 text-sm mt-2">March 2-4, 2026 | Erode, Tamil Nadu, India</p>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-3">Quick Links</h3>
                <div className="flex flex-col gap-2">
                  <Link href="/call-for-paper" className="text-blue-200 hover:text-white text-sm transition-colors">Call for Papers</Link>
                  <Link href="/submission" className="text-blue-200 hover:text-white text-sm transition-colors">Paper Submission</Link>
                  <Link href="/registration" className="text-blue-200 hover:text-white text-sm transition-colors">Registration</Link>
                  <Link href="/speakers" className="text-blue-200 hover:text-white text-sm transition-colors">Speakers</Link>
                </div>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-3">Contact Us</h3>
                <p className="text-blue-200 text-sm">icmsciconference@gmail.com</p>
                <p className="text-blue-200 text-sm mt-1">Surya Engineering College</p>
                <p className="text-blue-200 text-sm">Erode, Tamil Nadu 638107, India</p>
              </div>
            </div>
            <div className="border-t border-blue-700 mt-8 pt-8 text-center">
              <p className="text-blue-300 text-sm">© 2026 ICMSCI. All rights reserved. | Organized by Surya Engineering College</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
