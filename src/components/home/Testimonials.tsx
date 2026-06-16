"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Star, Quote, ArrowRight } from "lucide-react";

const testimonials = [
  { name: "Emily T.", area: "Didsbury", text: "Passed first time with just 3 minors! James is incredibly patient and explains everything so clearly. Couldn't recommend him more.", rating: 5 },
  { name: "Ryan P.", area: "Salford", text: "Did the 8-day intensive — completely terrified going in, licence in my pocket by Friday. The mock tests on day 4 made the real thing feel easy.", rating: 5 },
  { name: "Sophie W.", area: "Stockport", text: "Failed twice with another school before switching to James. He found my problem areas immediately. Passed third time with flying colours!", rating: 5 },
  { name: "Priya S.", area: "Oldham", text: "As someone with driving anxiety, I was dreading it. James never once made me feel judged. I actually enjoy driving now — that's a miracle!", rating: 5 },
  { name: "Daniel H.", area: "Trafford", text: "Professional, punctual, and genuinely good fun. The block of 10 was amazing value. I'll be recommending James to everyone.", rating: 5 },
  { name: "Alex M.", area: "Wigan", text: "Passed with ZERO minors at age 35. James explains the reasoning behind everything which helped me actually understand rather than just copy. Brilliant.", rating: 5 },
];

export default function Testimonials() {
  return (
    <section className="py-24 px-4 bg-[#F8F9FF]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <span className="text-[#E63946] text-xs font-bold tracking-widest uppercase">Student Success</span>
            <h2 className="section-heading mt-2">What Our Students Say</h2>
            <div className="flex items-center justify-center gap-1 mt-3">
              {[1,2,3,4,5].map(s => <Star key={s} className="w-5 h-5 text-[#FFD700] fill-[#FFD700]" />)}
              <span className="text-gray-500 text-sm ml-2">4.9 from 312 reviews</span>
            </div>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (i % 3) * 0.1, duration: 0.5 }}
              className="card p-6 flex flex-col"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <p className="font-semibold text-[#003366]">{t.name}</p>
                  <p className="text-xs text-gray-400">{t.area}</p>
                </div>
                <Quote className="w-5 h-5 text-[#E63946]/30" />
              </div>
              <div className="flex gap-0.5 mb-3">
                {[1,2,3,4,5].map(s => <Star key={s} className="w-3.5 h-3.5 text-[#FFD700] fill-[#FFD700]" />)}
              </div>
              <p className="text-gray-600 text-sm leading-relaxed flex-1">{t.text}</p>
              <div className="mt-4 pt-3 border-t border-gray-100">
                <span className="text-xs text-[#2ECC71] font-semibold">✓ Verified Pass</span>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link href="/reviews" className="btn-navy">
            Read All 312 Reviews <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
