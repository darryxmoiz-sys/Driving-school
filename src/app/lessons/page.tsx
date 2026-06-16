"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Car, Clock, MapPin, Star, ArrowRight } from "lucide-react";
import Link from "next/link";

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };

const packages = [
  {
    name: "Single Lesson",
    price: "£38",
    duration: "1 hour",
    description: "Perfect for getting started or topping up your skills at your own pace.",
    features: ["Fully qualified DVSA ADI","Dual-controlled vehicle","Tailored to your ability","Flexible scheduling","Manual or automatic"],
    popular: false,
    cta: "Book a Lesson",
  },
  {
    name: "Block of 10",
    price: "£340",
    duration: "10 × 1 hour",
    description: "Our most popular option — save £40 and build consistent progress with regular lessons.",
    features: ["Save £40 vs single rate","Priority booking slots","Progress tracker included","Dual-controlled vehicle","Free theory resources"],
    popular: true,
    cta: "Get Best Value",
  },
  {
    name: "Block of 20",
    price: "£640",
    duration: "20 × 1 hour",
    description: "Ideal for nervous beginners or those starting from scratch. Maximum savings.",
    features: ["Save £120 vs single rate","Structured learning plan","Mock test included","Hazard perception prep","Dedicated instructor"],
    popular: false,
    cta: "Start Your Journey",
  },
];

const faqs = [
  { q: "How many lessons will I need?", a: "The DVSA average is 45 hours of professional tuition plus 22 hours of private practice. However, everyone learns at a different pace — we'll give you an honest assessment after your first lesson." },
  { q: "Manual or automatic — which should I choose?", a: "Manual licences allow you to drive both manual and automatic cars, so we generally recommend manual for younger learners. Automatic is a great option if you struggle with coordination or have a disability. We offer both." },
  { q: "What happens if I need to cancel?", a: "We ask for 48 hours' notice to reschedule or cancel without charge. Cancellations within 48 hours may incur a fee equivalent to the lesson cost." },
  { q: "Can I use my own car?", a: "Unfortunately no — for insurance and safety reasons, all lessons are conducted in our DVSA-compliant dual-controlled vehicle." },
  { q: "Do you offer lessons on weekends and evenings?", a: "Yes! We offer lessons 7 days a week from 7am to 8pm on weekdays and 8am to 6pm at weekends, subject to availability." },
];

export default function LessonsPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="bg-[#003366] text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial="hidden" animate="visible" variants={fadeUp}>
            <span className="bg-[#E63946] text-white text-xs font-bold px-3 py-1 rounded-full tracking-widest uppercase mb-4 inline-block">Lessons & Pricing</span>
            <h1 className="font-display text-4xl md:text-5xl font-bold mt-4 mb-6">Transparent Pricing.<br/>No Hidden Costs.</h1>
            <p className="text-blue-200 text-lg max-w-2xl mx-auto">
              Every lesson includes a fully qualified DVSA-approved instructor, a modern dual-controlled car, and a personalised learning plan. Pick the option that works for you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Packages */}
      <section className="py-20 px-4 bg-[#F8F9FF]">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {packages.map((pkg, i) => (
              <motion.div
                key={pkg.name}
                initial="hidden" whileInView="visible" viewport={{ once: true }}
                variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { delay: i * 0.15, duration: 0.6 } } }}
                className={`relative rounded-2xl overflow-hidden ${pkg.popular ? "ring-2 ring-[#E63946] shadow-card-hover" : "shadow-card"} bg-white`}
              >
                {pkg.popular && (
                  <div className="bg-[#E63946] text-white text-xs font-bold text-center py-2 tracking-widest uppercase">
                    ⭐ Most Popular
                  </div>
                )}
                <div className="p-8">
                  <h3 className="font-display text-xl font-bold text-[#003366]">{pkg.name}</h3>
                  <p className="text-gray-500 text-sm mt-1">{pkg.duration}</p>
                  <div className="mt-4 mb-2">
                    <span className="font-display text-5xl font-black text-[#003366]">{pkg.price}</span>
                  </div>
                  <p className="text-gray-600 text-sm mb-6">{pkg.description}</p>
                  <ul className="space-y-3 mb-8">
                    {pkg.features.map(f => (
                      <li key={f} className="flex items-center gap-3 text-sm text-gray-700">
                        <CheckCircle2 className="w-4 h-4 text-[#2ECC71] shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link href="/contact" className={pkg.popular ? "btn-primary w-full justify-center" : "btn-navy w-full justify-center"}>
                    {pkg.cta} <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What's included */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="section-heading">Every Lesson Includes</h2>
            <p className="section-sub">We believe in complete transparency — here's exactly what you get with every booking.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Car, title: "Modern Dual-Control Car", desc: "Our latest dual-controlled vehicle keeps you and your instructor in full control at all times." },
              { icon: Star, title: "ADI Qualified Instructor", desc: "Your instructor holds a current DVSA ADI badge and undergoes regular standards checks." },
              { icon: MapPin, title: "Local Test Routes", desc: "We train you on the exact test routes used at your local test centre — no surprises on test day." },
              { icon: Clock, title: "Flexible Scheduling", desc: "Early mornings, evenings, and weekends available. Your schedule, your choice." },
            ].map(({ icon: Icon, title, desc }, i) => (
              <motion.div
                key={title}
                initial="hidden" whileInView="visible" viewport={{ once: true }}
                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } } }}
                className="card p-6 text-center"
              >
                <div className="w-12 h-12 bg-[#F8F9FF] rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-6 h-6 text-[#003366]" />
                </div>
                <h3 className="font-semibold text-[#003366] mb-2">{title}</h3>
                <p className="text-gray-500 text-sm">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4 bg-[#F8F9FF]">
        <div className="max-w-3xl mx-auto">
          <h2 className="section-heading text-center mb-12">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial="hidden" whileInView="visible" viewport={{ once: true }}
                variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0, transition: { delay: i * 0.1, duration: 0.5 } } }}
                className="card p-6"
              >
                <h3 className="font-semibold text-[#003366] mb-2">{faq.q}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-[#003366] text-center text-white">
        <h2 className="font-display text-3xl font-bold mb-4">Ready to get started?</h2>
        <p className="text-blue-200 mb-8">Book your first lesson today — just £20 for new students.</p>
        <Link href="/contact" className="btn-secondary">
          Book Now <ArrowRight className="w-4 h-4" />
        </Link>
      </section>
    </div>
  );
}
