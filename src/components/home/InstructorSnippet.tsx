"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ShieldCheck, Star, Users, ArrowRight } from "lucide-react";

export default function InstructorSnippet() {
  return (
    <section className="py-24 px-4 bg-[#F8F9FF]">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative">
              <div className="w-full aspect-square max-w-sm mx-auto bg-gradient-to-br from-[#003366] to-[#004488] rounded-3xl flex items-center justify-center shadow-card-hover">
                <div className="text-center text-white/30">
                  <Users className="w-24 h-24 mx-auto" />
                  <p className="text-sm mt-2">Instructor Photo</p>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 bg-white rounded-2xl shadow-card p-4">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-6 h-6 text-[#003366]" />
                  <div>
                    <p className="font-bold text-[#003366] text-sm">DVSA Approved</p>
                    <div className="flex gap-0.5 mt-0.5">
                      {[1,2,3,4,5].map(s => <Star key={s} className="w-3 h-3 text-[#FFD700] fill-[#FFD700]" />)}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="text-[#E63946] text-xs font-bold tracking-widest uppercase">Your Instructor</span>
            <h2 className="font-display text-3xl font-bold text-[#003366] mt-2 mb-5">Meet James Carter, ADI</h2>
            <p className="text-gray-600 text-sm leading-relaxed mb-5">
              With over 15 years of experience and 800+ students passed, James is one of Manchester's most trusted DVSA Approved Driving Instructors. Patient, encouraging, and genuinely passionate about helping nervous learners build real confidence.
            </p>
            <p className="text-gray-600 text-sm leading-relaxed mb-8">
              James holds a Grade A DVSA Standards Check rating, an enhanced DBS certificate, and is registered on the ORDIT trainer register — meaning he meets the very highest professional standards.
            </p>
            <div className="grid grid-cols-3 gap-4 mb-8">
              {[
                { value: "15+", label: "Years teaching" },
                { value: "800+", label: "Students passed" },
                { value: "Grade A", label: "DVSA rating" },
              ].map(s => (
                <div key={s.label} className="card p-4 text-center">
                  <p className="font-display font-black text-[#003366] text-xl">{s.value}</p>
                  <p className="text-xs text-gray-500 mt-0.5">{s.label}</p>
                </div>
              ))}
            </div>
            <Link href="/instructor" className="btn-navy">
              Learn More About James <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
