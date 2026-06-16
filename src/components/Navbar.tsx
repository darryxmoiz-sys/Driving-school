"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Car, Phone } from "lucide-react";

const navLinks = [
  { href: "/lessons", label: "Lessons & Pricing" },
  { href: "/intensive", label: "Intensive Courses" },
  { href: "/instructor", label: "Your Instructor" },
  { href: "/reviews", label: "Reviews" },
  { href: "/theory", label: "Theory Help" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [pathname]);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-[#003366] shadow-lg" : "bg-[#003366]/95"}`}>
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 text-white">
          <div className="w-8 h-8 bg-[#E63946] rounded-lg flex items-center justify-center">
            <Car className="w-4 h-4 text-white" />
          </div>
          <div>
            <span className="font-display font-bold text-base leading-tight block">Drive Confident</span>
            <span className="text-[#FFD700] text-[10px] font-medium tracking-wider">MANCHESTER · ADI APPROVED</span>
          </div>
        </Link>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map(link => (
            <Link
              key={link.href}
              href={link.href}
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                pathname === link.href ? "bg-white/20 text-white" : "text-blue-200 hover:text-white hover:bg-white/10"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <a href="tel:+441610001234" className="flex items-center gap-1.5 text-blue-200 hover:text-white transition-colors text-sm">
            <Phone className="w-4 h-4" />
            0161 000 1234
          </a>
          <Link href="/contact" className="bg-[#E63946] hover:bg-[#C02030] text-white text-sm font-semibold px-4 py-2 rounded-full transition-all">
            Book Now
          </Link>
        </div>

        {/* Mobile toggle */}
        <button onClick={() => setOpen(!open)} className="lg:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-colors">
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-[#002244] border-t border-white/10 px-4 py-4 space-y-1">
          {navLinks.map(link => (
            <Link
              key={link.href}
              href={link.href}
              className={`block px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                pathname === link.href ? "bg-white/20 text-white" : "text-blue-200 hover:text-white hover:bg-white/10"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-3 border-t border-white/10 flex gap-3">
            <a href="tel:+441610001234" className="flex-1 flex items-center justify-center gap-2 bg-white/10 text-white text-sm py-3 rounded-xl">
              <Phone className="w-4 h-4" /> Call Now
            </a>
            <Link href="/contact" className="flex-1 flex items-center justify-center bg-[#E63946] text-white text-sm font-semibold py-3 rounded-xl">
              Book Lesson
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
