"use client";

import { motion } from "framer-motion";
import { Zap, Calendar, CheckCircle2, Clock, ArrowRight, AlertTriangle } from "lucide-react";
import Link from "next/link";

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };

const courses = [
  { days: "5 Days", hours: "30 Hours", price: "£975", desc: "A fast-track introduction — best suited to those with some prior driving experience or recent lapsed drivers.", ideal: "Prior experience", includes: ["Daily 6-hour sessions","Mock test on day 4","Test on day 5","Theory test support","Dedicated instructor"] },
  { days: "8 Days", hours: "48 Hours", price: "£1,380", desc: "The sweet spot for complete beginners who want to pass quickly without feeling rushed.", ideal: "Beginners", best: true, includes: ["Daily 6-hour sessions","Two mock tests","Theory coaching","Test booking assistance","Progress daily debrief","Post-test lesson if needed"] },
  { days: "12 Days", hours: "72 Hours", price: "£1,890", desc: "Maximum preparation for anxious learners or those who want to pass with complete confidence.", ideal: "Nervous learners", includes: ["Flexible daily schedule","Multiple mock tests","Full test route mastery","Theory test prep","1-to-1 hazard coaching","Free resit lesson"] },
];

export default function IntensivePage() {
  return (
    <div className="pt-20">
      <section className="bg-[#003366] text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial="hidden" animate="visible" variants={fadeUp}>
            <span className="bg-[#FFD700] text-[#003366] text-xs font-bold px-3 py-1 rounded-full tracking-widest uppercase mb-4 inline-block">Fast-Track Your Licence</span>
            <h1 className="font-display text-4xl md:text-5xl font-bold mt-4 mb-6">Intensive Driving Courses<br/>in Manchester</h1>
            <p className="text-blue-200 text-lg max-w-2xl mx-auto">
              Pass your driving test in as little as 5 days with our structured intensive courses. Designed for committed learners who want results — fast.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <div className="bg-white/10 rounded-xl px-5 py-3 text-center">
                <div className="font-display text-2xl font-bold text-[#FFD700]">96%</div>
                <div className="text-xs text-blue-200 mt-1">First-time pass rate</div>
              </div>
              <div className="bg-white/10 rounded-xl px-5 py-3 text-center">
                <div className="font-display text-2xl font-bold text-[#FFD700]">5 days</div>
                <div className="text-xs text-blue-200 mt-1">Fastest course</div>
              </div>
              <div className="bg-white/10 rounded-xl px-5 py-3 text-center">
                <div className="font-display text-2xl font-bold text-[#FFD700]">ADI</div>
                <div className="text-xs text-blue-200 mt-1">Fully qualified instructor</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Warning */}
      <section className="bg-[#FFF8E1] border-b border-[#FFD700] py-4 px-4">
        <div className="max-w-4xl mx-auto flex items-start gap-3 text-sm text-gray-700">
          <AlertTriangle className="w-5 h-5 text-[#FFD700] shrink-0 mt-0.5" />
          <p><strong>Important:</strong> You must have passed your theory test before booking an intensive course that includes a practical driving test. We can help you prepare — see our <Link href="/theory" className="text-[#003366] font-semibold underline">Theory Test Help</Link> page.</p>
        </div>
      </section>

      {/* Courses */}
      <section className="py-20 px-4 bg-[#F8F9FF]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="section-heading">Choose Your Course</h2>
            <p className="section-sub">All courses include test booking assistance and are structured around your test centre's availability.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {courses.map((c, i) => (
              <motion.div
                key={c.days}
                initial="hidden" whileInView="visible" viewport={{ once: true }}
                variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { delay: i * 0.15, duration: 0.6 } } }}
                className={`relative rounded-2xl overflow-hidden bg-white ${c.best ? "ring-2 ring-[#E63946] shadow-card-hover" : "shadow-card"}`}
              >
                {c.best && <div className="bg-[#E63946] text-white text-xs font-bold text-center py-2 tracking-widest">⭐ BEST FOR BEGINNERS</div>}
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-[#003366] rounded-xl flex items-center justify-center">
                      <Zap className="w-5 h-5 text-[#FFD700]" />
                    </div>
                    <div>
                      <h3 className="font-display text-xl font-bold text-[#003366]">{c.days}</h3>
                      <p className="text-xs text-gray-500">{c.hours} total</p>
                    </div>
                  </div>
                  <div className="mb-2">
                    <span className="font-display text-4xl font-black text-[#003366]">{c.price}</span>
                  </div>
                  <span className="text-xs bg-[#F8F9FF] text-[#003366] font-semibold px-2 py-1 rounded-full">Ideal for: {c.ideal}</span>
                  <p className="text-gray-600 text-sm mt-4 mb-6">{c.desc}</p>
                  <ul className="space-y-2 mb-8">
                    {c.includes.map(f => (
                      <li key={f} className="flex items-center gap-2 text-sm text-gray-700">
                        <CheckCircle2 className="w-4 h-4 text-[#2ECC71] shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link href="/contact" className={c.best ? "btn-primary w-full justify-center" : "btn-navy w-full justify-center"}>
                    Enquire Now <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="section-heading text-center mb-12">How Your Intensive Week Works</h2>
          <div className="space-y-6">
            {[
              { day: "Day 1", title: "Foundations & Controls", desc: "We start with vehicle familiarisation, clutch control, moving off and stopping, steering technique, and gear changes. By end of day you'll be driving confidently in quiet residential streets." },
              { day: "Day 2–3", title: "Town & Junctions", desc: "We progress to busier roads, T-junctions, crossroads, roundabouts, and dual carriageways. Each session ends with a full debrief and written progress notes." },
              { day: "Day 4", title: "Mock Test", desc: "A full 40-minute mock test conducted exactly like the real thing. Detailed feedback on every minor and serious fault, followed by targeted practice on weak areas." },
              { day: "Final Day", title: "Test Day", desc: "A short warm-up drive on the test route, then your official DVSA driving test. We'll be there to support you before and after. Most students pass on this day." },
            ].map((item, i) => (
              <motion.div
                key={item.day}
                initial="hidden" whileInView="visible" viewport={{ once: true }}
                variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0, transition: { delay: i * 0.1, duration: 0.5 } } }}
                className="flex gap-6 card p-6"
              >
                <div className="w-16 h-16 bg-[#003366] rounded-xl flex items-center justify-center shrink-0">
                  <span className="text-[#FFD700] font-display font-bold text-xs text-center leading-tight">{item.day}</span>
                </div>
                <div>
                  <h3 className="font-semibold text-[#003366] mb-1">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-[#003366] text-center text-white">
        <h2 className="font-display text-3xl font-bold mb-4">Limited Intensive Course Slots Available</h2>
        <p className="text-blue-200 mb-8 max-w-xl mx-auto">Intensive courses book up fast. Contact us today to check availability and reserve your dates.</p>
        <Link href="/contact" className="btn-secondary">
          Check Availability <ArrowRight className="w-4 h-4" />
        </Link>
      </section>
    </div>
  );
}
