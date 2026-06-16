"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ShieldCheck, ArrowRight, MessageCircle } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative bg-[#003366] min-h-screen flex items-center overflow-hidden pt-16">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)", backgroundSize: "40px 40px" }} />
      </div>

      {/* Road animation */}
      <div className="absolute bottom-0 left-0 right-0 h-32 overflow-hidden">
        <svg viewBox="0 0 1440 120" className="w-full h-full" preserveAspectRatio="none">
          <rect width="1440" height="120" fill="#002244" />
          <rect y="54" width="1440" height="12" fill="#1a1a2e" />
          {/* Road dashes */}
          <line x1="0" y1="60" x2="1440" y2="60" stroke="#FFD700" strokeWidth="3" strokeDasharray="60 40" className="road-line" />
        </svg>
      </div>

      {/* Animated car SVG */}
      <div className="absolute bottom-16 right-8 md:right-24 car-float hidden sm:block">
        <svg width="200" height="90" viewBox="0 0 200 90" xmlns="http://www.w3.org/2000/svg">
          {/* Car body */}
          <rect x="10" y="35" width="180" height="40" rx="8" fill="#E63946" />
          {/* Car roof */}
          <path d="M40 35 L60 10 L140 10 L160 35 Z" fill="#C02030" />
          {/* Windshield */}
          <path d="M65 30 L75 12 L125 12 L135 30 Z" fill="#B8D4FF" opacity="0.8" />
          {/* Windows */}
          <rect x="45" y="18" width="18" height="14" rx="2" fill="#B8D4FF" opacity="0.6" />
          <rect x="137" y="18" width="18" height="14" rx="2" fill="#B8D4FF" opacity="0.6" />
          {/* Wheels */}
          <circle cx="45" cy="75" r="14" fill="#1a1a2e" />
          <circle cx="45" cy="75" r="7" fill="#888" />
          <circle cx="155" cy="75" r="14" fill="#1a1a2e" />
          <circle cx="155" cy="75" r="7" fill="#888" />
          {/* Headlights */}
          <rect x="175" y="45" width="14" height="8" rx="2" fill="#FFD700" opacity="0.9" />
          {/* Taillights */}
          <rect x="5" y="45" width="10" height="8" rx="2" fill="#ff6b6b" />
          {/* DVSA stripe */}
          <rect x="80" y="36" width="40" height="6" fill="#FFD700" opacity="0.3" rx="2" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-24 relative z-10">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6"
          >
            <span className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white text-xs font-semibold px-4 py-2 rounded-full">
              <ShieldCheck className="w-4 h-4 text-[#FFD700]" />
              DVSA Approved Driving Instructor · Manchester
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.05] mb-6"
          >
            Learn to Drive<br/>
            in Manchester<br/>
            <span className="text-[#FFD700]">with Confidence.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="text-blue-200 text-lg md:text-xl leading-relaxed mb-10 max-w-xl"
          >
            Patient, professional driving lessons from a DVSA Approved ADI. 96% first-time pass rate. First lesson from just <span className="text-[#FFD700] font-semibold">£20</span>.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 mb-12"
          >
            <Link href="/contact" className="btn-primary text-lg px-8 py-4">
              Book First Lesson <ArrowRight className="w-5 h-5" />
            </Link>
            <Link href="/lessons" className="btn-secondary text-lg px-8 py-4">
              View Packages
            </Link>
            <a
              href="https://wa.me/441610001234"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp text-lg px-8 py-4"
            >
              <MessageCircle className="w-5 h-5" /> WhatsApp Us
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-wrap gap-6"
          >
            {[
              { value: "96%", label: "First-time pass rate" },
              { value: "800+", label: "Students passed" },
              { value: "5★", label: "Average rating" },
            ].map(stat => (
              <div key={stat.label} className="text-center">
                <p className="font-display text-3xl font-black text-[#FFD700]">{stat.value}</p>
                <p className="text-blue-300 text-xs mt-0.5">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
