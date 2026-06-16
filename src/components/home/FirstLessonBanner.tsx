"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Flame, ArrowRight } from "lucide-react";

function getCountdown() {
  const now = new Date();
  const end = new Date(now);
  end.setHours(23, 59, 59, 0);
  const diff = end.getTime() - now.getTime();
  const h = Math.floor(diff / 3600000);
  const m = Math.floor((diff % 3600000) / 60000);
  const s = Math.floor((diff % 60000) / 1000);
  return { h, m, s };
}

export default function FirstLessonBanner() {
  const [time, setTime] = useState(getCountdown());

  useEffect(() => {
    const timer = setInterval(() => setTime(getCountdown()), 1000);
    return () => clearInterval(timer);
  }, []);

  const pad = (n: number) => String(n).padStart(2, "0");

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="py-20 px-4 bg-[#E63946] relative overflow-hidden"
    >
      {/* Background circles */}
      <div className="absolute -top-20 -right-20 w-80 h-80 bg-white/5 rounded-full" />
      <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-white/5 rounded-full" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="flex items-center justify-center gap-2 mb-4">
          <Flame className="w-6 h-6 text-[#FFD700] animate-pulse" />
          <span className="text-white/80 text-sm font-semibold uppercase tracking-widest">Limited Offer</span>
          <Flame className="w-6 h-6 text-[#FFD700] animate-pulse" />
        </div>
        <h2 className="font-display text-4xl md:text-5xl font-black text-white mb-3">
          First Lesson Only <span className="text-[#FFD700]">£20</span>
        </h2>
        <p className="text-white/80 text-lg mb-8">Limited spaces available for new students this month. Book today and save £18 off our standard rate.</p>

        {/* Countdown */}
        <div className="flex items-center justify-center gap-4 mb-10">
          <div className="bg-white/20 rounded-xl px-5 py-3 min-w-[70px]">
            <p className="font-display text-3xl font-black text-white">{pad(time.h)}</p>
            <p className="text-white/60 text-xs mt-0.5">Hours</p>
          </div>
          <span className="font-display text-2xl font-black text-white/60">:</span>
          <div className="bg-white/20 rounded-xl px-5 py-3 min-w-[70px]">
            <p className="font-display text-3xl font-black text-white">{pad(time.m)}</p>
            <p className="text-white/60 text-xs mt-0.5">Minutes</p>
          </div>
          <span className="font-display text-2xl font-black text-white/60">:</span>
          <div className="bg-white/20 rounded-xl px-5 py-3 min-w-[70px]">
            <p className="font-display text-3xl font-black text-white">{pad(time.s)}</p>
            <p className="text-white/60 text-xs mt-0.5">Seconds</p>
          </div>
        </div>

        <p className="text-white/60 text-xs mb-6">Offer resets daily. One per new student. Cannot be combined with other offers.</p>
        <Link href="/contact" className="bg-white text-[#E63946] font-bold px-8 py-4 rounded-full hover:bg-[#F8F9FF] transition-all hover:shadow-lg hover:-translate-y-0.5 inline-flex items-center gap-2 text-lg">
          Claim £20 First Lesson <ArrowRight className="w-5 h-5" />
        </Link>
      </div>
    </motion.section>
  );
}
