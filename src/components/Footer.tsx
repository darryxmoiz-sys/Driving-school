"use client";

import Link from "next/link";
import { Car, Phone, Mail, MapPin, ShieldCheck, Facebook, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#002244] text-white pt-16 pb-6">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 bg-[#E63946] rounded-lg flex items-center justify-center">
                <Car className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="font-display font-bold">Drive Confident</p>
                <p className="text-[#FFD700] text-[10px] tracking-wider">MANCHESTER</p>
              </div>
            </div>
            <p className="text-blue-300 text-sm leading-relaxed mb-4">
              DVSA Approved driving school serving Manchester and Greater Manchester. Friendly, patient, professional instruction since 2010.
            </p>
            <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-3 py-1.5 text-xs">
              <ShieldCheck className="w-4 h-4 text-[#FFD700]" />
              DVSA Approved ADI
            </div>
          </div>

          {/* Lessons */}
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wider text-[#FFD700] mb-4">Lessons</h3>
            <ul className="space-y-2 text-blue-300 text-sm">
              <li><Link href="/lessons" className="hover:text-white transition-colors">Single Lesson — £38</Link></li>
              <li><Link href="/lessons" className="hover:text-white transition-colors">Block of 10 — £340</Link></li>
              <li><Link href="/lessons" className="hover:text-white transition-colors">Block of 20 — £640</Link></li>
              <li><Link href="/intensive" className="hover:text-white transition-colors">5-Day Intensive — £975</Link></li>
              <li><Link href="/intensive" className="hover:text-white transition-colors">8-Day Intensive — £1,380</Link></li>
              <li><Link href="/lessons" className="hover:text-white transition-colors">Automatic Lessons</Link></li>
            </ul>
          </div>

          {/* Areas */}
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wider text-[#FFD700] mb-4">Areas Covered</h3>
            <ul className="space-y-2 text-blue-300 text-sm columns-2">
              {["Manchester","Salford","Stockport","Oldham","Trafford","Rochdale","Bury","Bolton","Wigan","Tameside","Stretford","Eccles"].map(a => (
                <li key={a} className="leading-relaxed">{a}</li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wider text-[#FFD700] mb-4">Contact</h3>
            <ul className="space-y-3 text-blue-300 text-sm">
              <li><a href="tel:+441610001234" className="flex items-center gap-2 hover:text-white transition-colors"><Phone className="w-4 h-4" />0161 000 1234</a></li>
              <li><a href="mailto:hello@driveconfident.co.uk" className="flex items-center gap-2 hover:text-white transition-colors"><Mail className="w-4 h-4" />hello@driveconfident.co.uk</a></li>
              <li><span className="flex items-start gap-2"><MapPin className="w-4 h-4 mt-0.5 shrink-0" />Manchester City Centre, Greater Manchester</span></li>
            </ul>
            <div className="flex gap-3 mt-5">
              <a href="#" className="w-9 h-9 bg-white/10 hover:bg-[#E63946] rounded-lg flex items-center justify-center transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 bg-white/10 hover:bg-[#E63946] rounded-lg flex items-center justify-center transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-blue-400">
          <p>© {new Date().getFullYear()} Drive Confident Manchester. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/contact" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/contact" className="hover:text-white transition-colors">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
