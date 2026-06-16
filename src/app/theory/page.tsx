"use client";

import { motion } from "framer-motion";
import { BookOpen, Monitor, Brain, Target, ExternalLink, CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };

const resources = [
  { icon: Monitor, title: "Official DVSA Practice Tests", desc: "The only official DVSA revision app — practice the exact question bank used in real tests.", link: "https://www.safedrivingforlife.info/shop/official-dvsa-theory-test-practice/", external: true },
  { icon: BookOpen, title: "The Highway Code", desc: "Every question in the theory test is based on the Highway Code. Read it cover to cover at least once.", link: "https://www.gov.uk/guidance/the-highway-code", external: true },
  { icon: Brain, title: "Hazard Perception Guide", desc: "Understand how the hazard perception clips are scored and common mistakes to avoid.", link: "https://www.gov.uk/hazard-perception-test", external: true },
  { icon: Target, title: "Book Your Theory Test", desc: "Ready to sit your test? Book directly through the official DVSA portal.", link: "https://www.gov.uk/book-theory-test", external: true },
];

const tips = [
  { num: "01", title: "Start with the Highway Code", desc: "Don't skip this. The Highway Code is the foundation of every theory test question. Read it once all the way through before starting practice tests — you'll be surprised how much sticks." },
  { num: "02", title: "Use the Official DVSA App Daily", desc: "Practice at least 30 questions a day using the DVSA's official revision app. It tracks your weak areas and focuses your practice where it matters most." },
  { num: "03", title: "Watch Hazard Perception Videos", desc: "The hazard perception part catches many people out. Watch clips on YouTube to understand the timing of clicks and the difference between developing and actual hazards." },
  { num: "04", title: "Take Multiple Mock Tests", desc: "Aim to consistently score 50/50 on the multiple choice section and 44/75 on hazard perception in practice before you book the real test." },
  { num: "05", title: "Book Early to Choose Your Slot", desc: "Theory test centres fill up quickly. Once you're confident with your revision, book as soon as possible to avoid long waits." },
  { num: "06", title: "Pass Theory Before Intensive Course", desc: "If you're planning an intensive course, you must pass your theory test first. We recommend completing this at least 2 weeks before your intensive start date." },
];

export default function TheoryPage() {
  return (
    <div className="pt-20">
      <section className="bg-[#003366] text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial="hidden" animate="visible" variants={fadeUp}>
            <span className="bg-[#2ECC71] text-white text-xs font-bold px-3 py-1 rounded-full tracking-widest uppercase mb-4 inline-block">Theory Test Help</span>
            <h1 className="font-display text-4xl md:text-5xl font-bold mt-4 mb-6">Pass Your Theory Test<br/>First Time</h1>
            <p className="text-blue-200 text-lg max-w-2xl mx-auto">
              The theory test is the gateway to your practical driving lessons. Here's everything you need to know to prepare effectively and walk out with a pass certificate.
            </p>
          </motion.div>
        </div>
      </section>

      {/* About the test */}
      <section className="py-20 px-4 bg-[#F8F9FF]">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-display text-3xl font-bold text-[#003366] mb-6">What Does the Theory Test Involve?</h2>
              <div className="space-y-4 text-gray-600 text-sm leading-relaxed">
                <p>The UK theory test has two parts, both taken in the same sitting at a DVSA test centre. You must pass both parts on the same day to receive a pass certificate.</p>
                <p><strong className="text-[#003366]">Part 1 — Multiple Choice:</strong> 50 questions from the DVSA question bank, covering the Highway Code, road signs, safety, and driving technique. You need 43/50 to pass. You have 57 minutes.</p>
                <p><strong className="text-[#003366]">Part 2 — Hazard Perception:</strong> 14 video clips filmed from a driver's viewpoint. You click whenever you spot a developing hazard. You need 44/75 to pass.</p>
                <p>The test costs £23 and must be taken at an official DVSA test centre. Your pass certificate is valid for 2 years — your practical test must happen within that window.</p>
              </div>
            </div>
            <div className="space-y-4">
              {[
                { label: "Multiple Choice questions", value: "50", colour: "bg-[#003366]" },
                { label: "Pass mark (multiple choice)", value: "43/50", colour: "bg-[#2ECC71]" },
                { label: "Hazard Perception clips", value: "14", colour: "bg-[#003366]" },
                { label: "Pass mark (hazard perception)", value: "44/75", colour: "bg-[#2ECC71]" },
                { label: "Test fee", value: "£23", colour: "bg-[#E63946]" },
                { label: "Pass certificate valid for", value: "2 years", colour: "bg-[#FFD700] text-gray-900" },
              ].map(item => (
                <div key={item.label} className="flex items-center gap-4 card p-4">
                  <span className={`${item.colour} text-white px-3 py-1.5 rounded-lg font-bold text-sm min-w-[70px] text-center`}>{item.value}</span>
                  <span className="text-gray-700 text-sm">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tips */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="section-heading text-center mb-4">6 Tips to Pass First Time</h2>
          <p className="section-sub text-center mb-12">From James — based on 15 years of seeing students succeed and struggle with the theory test.</p>
          <div className="grid md:grid-cols-2 gap-6">
            {tips.map((tip, i) => (
              <motion.div
                key={tip.num}
                initial="hidden" whileInView="visible" viewport={{ once: true }}
                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { delay: i * 0.08, duration: 0.5 } } }}
                className="card p-6 flex gap-5"
              >
                <span className="font-display text-4xl font-black text-[#003366]/10">{tip.num}</span>
                <div>
                  <h3 className="font-semibold text-[#003366] mb-2">{tip.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{tip.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Resources */}
      <section className="py-20 px-4 bg-[#F8F9FF]">
        <div className="max-w-4xl mx-auto">
          <h2 className="section-heading text-center mb-4">Official Resources</h2>
          <p className="section-sub text-center mb-12">We only recommend official DVSA resources — there's no shortcut, but these are the best tools available.</p>
          <div className="grid sm:grid-cols-2 gap-6">
            {resources.map(({ icon: Icon, title, desc, link }, i) => (
              <motion.a
                key={title}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                initial="hidden" whileInView="visible" viewport={{ once: true }}
                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } } }}
                className="card p-6 flex gap-4 group cursor-pointer"
              >
                <div className="w-12 h-12 bg-[#003366] rounded-xl flex items-center justify-center shrink-0 group-hover:bg-[#E63946] transition-colors">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-semibold text-[#003366]">{title}</h3>
                    <ExternalLink className="w-3 h-3 text-gray-400" />
                  </div>
                  <p className="text-gray-500 text-sm">{desc}</p>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-[#003366] text-center text-white">
        <h2 className="font-display text-3xl font-bold mb-4">Already Got Your Theory Pass?</h2>
        <p className="text-blue-200 mb-8">Great news — you're ready to start your practical lessons. Book now and get your first lesson for just £20.</p>
        <Link href="/contact" className="btn-secondary">
          Book a Lesson <ArrowRight className="w-4 h-4" />
        </Link>
      </section>
    </div>
  );
}
