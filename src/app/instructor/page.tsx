"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Award, Users, Heart, ArrowRight } from "lucide-react";
import Link from "next/link";

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };

export default function InstructorPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="bg-[#003366] text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial="hidden" animate="visible" variants={fadeUp}>
            <span className="bg-[#E63946] text-white text-xs font-bold px-3 py-1 rounded-full tracking-widest uppercase mb-4 inline-block">Your Instructor</span>
            <h1 className="font-display text-4xl md:text-5xl font-bold mt-4 mb-6">Meet James Carter, ADI</h1>
            <p className="text-blue-200 text-lg max-w-2xl mx-auto">A patient, encouraging, and highly experienced DVSA Approved Driving Instructor based in Manchester — helping learners pass with confidence since 2010.</p>
          </motion.div>
        </div>
      </section>

      {/* Profile */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <div className="relative">
                <div className="w-full aspect-[3/4] bg-gradient-to-br from-[#003366] to-[#004488] rounded-2xl flex items-center justify-center">
                  <div className="text-center text-white/40">
                    <Users className="w-24 h-24 mx-auto mb-4" />
                    <p className="text-sm">Professional Photo</p>
                  </div>
                </div>
                <div className="absolute -bottom-4 -right-4 bg-white rounded-2xl shadow-card p-4 flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#003366] rounded-xl flex items-center justify-center">
                    <ShieldCheck className="w-5 h-5 text-[#FFD700]" />
                  </div>
                  <div>
                    <p className="font-bold text-[#003366] text-sm">DVSA Approved</p>
                    <p className="text-xs text-gray-500">ADI Licence No. 123456</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={{ ...fadeUp, visible: { ...fadeUp.visible, transition: { delay: 0.2, duration: 0.6 } } }}>
              <h2 className="font-display text-3xl font-bold text-[#003366] mb-6">A Driving Instructor Who Actually Cares</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  I became a driving instructor because I remembered how terrifying sitting in a car for the first time felt. Nobody should feel anxious or judged when they're learning one of life's most important skills.
                </p>
                <p>
                  Since qualifying as a DVSA Approved Driving Instructor (ADI) in 2010, I've helped over 800 students — from nervous teenagers to anxious adults returning to the wheel after years away — pass their test and drive with lasting confidence.
                </p>
                <p>
                  I teach both manual and automatic lessons, and I take the time to understand how each student learns best. Whether you need lots of reassurance, clear clinical feedback, or simply someone to make you laugh to calm the nerves — I adapt my style to suit you.
                </p>
                <p>
                  My 96% first-time pass rate speaks for itself, but what I'm proudest of is the feedback I get from students who say they actually <em>enjoy</em> their lessons.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 mt-8">
                {[
                  { icon: Award, label: "15+ Years", sub: "Teaching experience" },
                  { icon: Users, label: "800+", sub: "Students passed" },
                  { icon: ShieldCheck, label: "Grade A", sub: "DVSA Standards Check" },
                  { icon: Heart, label: "5 Stars", sub: "Average review rating" },
                ].map(({ icon: Icon, label, sub }) => (
                  <div key={label} className="card p-4 flex items-center gap-3">
                    <div className="w-9 h-9 bg-[#F8F9FF] rounded-lg flex items-center justify-center shrink-0">
                      <Icon className="w-4 h-4 text-[#003366]" />
                    </div>
                    <div>
                      <p className="font-bold text-[#003366] text-sm">{label}</p>
                      <p className="text-xs text-gray-500">{sub}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Qualifications */}
      <section className="py-20 px-4 bg-[#F8F9FF]">
        <div className="max-w-4xl mx-auto">
          <h2 className="section-heading text-center mb-12">Qualifications & Credentials</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              { title: "DVSA Approved Driving Instructor (ADI)", desc: "Fully licensed and regularly assessed by the Driver and Vehicle Standards Agency. ADI badge number available on request." },
              { title: "Enhanced DBS Checked", desc: "Cleared to work with vulnerable adults and learners under 18. Certificate renewed annually." },
              { title: "First Aid Certified", desc: "Holds a current Emergency First Aid at Work (EFAW) certificate — because safety comes first." },
              { title: "IAM RoadSmart Member", desc: "Advanced driver qualification, demonstrating a commitment to the highest standard of driving on UK roads." },
              { title: "ORDIT Registered", desc: "Registered on the DVSA's Official Register of Driving Instructor Trainers — qualified to train other instructors." },
              { title: "Manual & Automatic Specialist", desc: "Licensed and experienced to teach in both manual gearbox and automatic transmission vehicles." },
            ].map((q, i) => (
              <motion.div
                key={q.title}
                initial="hidden" whileInView="visible" viewport={{ once: true }}
                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } } }}
                className="card p-6 flex gap-4"
              >
                <ShieldCheck className="w-6 h-6 text-[#2ECC71] shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-[#003366] mb-1">{q.title}</h3>
                  <p className="text-gray-500 text-sm">{q.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-[#003366] text-center text-white">
        <h2 className="font-display text-3xl font-bold mb-4">Book Your First Lesson with James</h2>
        <p className="text-blue-200 mb-8">First lesson is just £20 for new students. No commitment required.</p>
        <Link href="/contact" className="btn-secondary">
          Get in Touch <ArrowRight className="w-4 h-4" />
        </Link>
      </section>
    </div>
  );
}
