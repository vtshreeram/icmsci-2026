"use client";

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

export default function MobileNav() {
  return (
    <select
      onChange={(e) => (window.location.href = e.target.value)}
      className="bg-white text-slate-700 text-sm px-3 py-2 rounded-lg border border-slate-300"
    >
      {navLinks.map((link) => (
        <option key={link.href} value={link.href}>
          {link.label}
        </option>
      ))}
    </select>
  );
}
