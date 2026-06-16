"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { BookOpen, Monitor, Brain, ArrowRight } from "lucide-react";

const cards = [
  { icon: BookOpen, title: "Highway Code Guide", desc: "Everything from road signs to right-of-way rules — your foundation for the theory test." },
  { icon: Monitor, title: "Official DVSA Practice", desc: "The exact question bank used in real tests, available on the official DVSA app." },
  { icon: Brain, title: "Hazard Perception Tips", desc: "Understand scoring, common clips, and how to avoid the auto-click penalty." },
];

export default function TheorySection() {
  return (
    <section className="py-24 px-4 bg-[#F8F9FF]">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <span className="text-[#E63946] text-xs font-bold tracking-widest uppercase">Theory Test</span>
            <h2 className="section-heading mt-2">Pass Your Theory First Time</h2>
            <p className="section-sub">The theory test is your gateway to practical lessons. We'll help you prepare the right way.</p>
          </motion.div>
        </div>
        <div className="grid sm:grid-cols-3 gap-6 mb-10">
          {cards.map(({ icon: Icon, title, desc }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.5 }}
              className="card p-6 text-center"
            >
              <div className="w-12 h-12 bg-[#003366] rounded-xl flex items-center justify-center mx-auto mb-4">
                <Icon className="w-6 h-6 text-[#FFD700]" />
              </div>
              <h3 className="font-semibold text-[#003366] mb-2">{title}</h3>
              <p className="text-gray-500 text-sm">{desc}</p>
            </motion.div>
          ))}
        </div>
        <div className="text-center">
          <Link href="/theory" className="btn-navy">
            Theory Test Resources <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
