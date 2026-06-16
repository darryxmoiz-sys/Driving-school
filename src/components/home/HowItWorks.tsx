"use client";

import { motion } from "framer-motion";
import { MessageSquare, CalendarCheck, Car, Award } from "lucide-react";

const steps = [
  { icon: MessageSquare, step: "Step 1", title: "Enquire", desc: "Call, WhatsApp, or fill in our online form. We'll discuss your needs, experience level, and recommend the right package." },
  { icon: CalendarCheck, step: "Step 2", title: "Book", desc: "Pick your first lesson slot. We offer early mornings, evenings, and weekends to fit around your life." },
  { icon: Car, step: "Step 3", title: "Learn", desc: "Your instructor collects you from home. Every lesson is tailored to your progress and follows a structured learning plan." },
  { icon: Award, step: "Step 4", title: "Pass", desc: "When you're ready, you sit your practical test. Our 96% first-time pass rate speaks for itself." },
];

export default function HowItWorks() {
  return (
    <section className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <span className="text-[#E63946] text-xs font-bold tracking-widest uppercase">Simple Process</span>
            <h2 className="section-heading mt-2">How It Works</h2>
            <p className="section-sub">Four straightforward steps from enquiry to licence.</p>
          </motion.div>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connecting line desktop */}
          <div className="hidden lg:block absolute top-10 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-[#003366] via-[#E63946] to-[#003366] opacity-20" />
          {steps.map(({ icon: Icon, step, title, desc }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              className="text-center relative"
            >
              <div className="w-20 h-20 bg-[#003366] rounded-2xl flex items-center justify-center mx-auto mb-5 relative z-10 shadow-lg">
                <Icon className="w-8 h-8 text-[#FFD700]" />
              </div>
              <p className="text-[#E63946] text-xs font-bold tracking-widest uppercase mb-1">{step}</p>
              <h3 className="font-display text-lg font-bold text-[#003366] mb-2">{title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
