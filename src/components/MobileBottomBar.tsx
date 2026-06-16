"use client";

import Link from "next/link";
import { Phone, MessageCircle, CalendarCheck } from "lucide-react";

export default function MobileBottomBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-white border-t border-gray-200 shadow-[0_-4px_20px_rgba(0,0,0,0.08)]">
      <div className="grid grid-cols-3 divide-x divide-gray-200">
        <a
          href="tel:+441610001234"
          className="flex flex-col items-center justify-center py-3 gap-1 text-[#003366] hover:bg-[#F8F9FF] transition-colors active:scale-95"
        >
          <Phone className="w-5 h-5" />
          <span className="text-[10px] font-semibold uppercase tracking-wide">Call Now</span>
        </a>
        <a
          href="https://wa.me/441610001234?text=Hi!%20I'd%20like%20to%20enquire%20about%20driving%20lessons."
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-3 gap-1 bg-[#25D366] text-white hover:bg-[#1ebe57] transition-colors active:scale-95"
        >
          <MessageCircle className="w-5 h-5" />
          <span className="text-[10px] font-semibold uppercase tracking-wide">WhatsApp</span>
        </a>
        <Link
          href="/contact"
          className="flex flex-col items-center justify-center py-3 gap-1 bg-[#E63946] text-white hover:bg-[#C02030] transition-colors active:scale-95"
        >
          <CalendarCheck className="w-5 h-5" />
          <span className="text-[10px] font-semibold uppercase tracking-wide">Book Lesson</span>
        </Link>
      </div>
    </div>
  );
}
