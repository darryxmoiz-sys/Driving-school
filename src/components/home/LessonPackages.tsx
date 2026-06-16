"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { CheckCircle2, ArrowRight } from "lucide-react";

const packages = [
  {
    name: "Single Lesson",
    price: "£38",
    per: "per hour",
    features: ["DVSA Approved ADI", "Dual-controlled car", "Flexible booking", "Manual or automatic"],
    cta: "Book a Lesson",
    popular: false,
  },
  {
    name: "Block of 10",
    price: "£340",
    per: "save £40",
    features: ["DVSA Approved ADI", "Priority booking", "Progress tracker", "Free theory resources", "Mock test guidance"],
    cta: "Best Value",
    popular: true,
  },
  {
    name: "Intensive Course",
    price: "From £975",
    per: "5–12 days",
    features: ["Pass in days", "Test included", "Daily debriefs", "Route mastery", "Mock test included"],
    cta: "Learn More",
    href: "/intensive",
    popular: false,
  },
];

export default function LessonPackages() {
  return (
    <section className="py-24 px-4 bg-[#F8F9FF]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <span className="text-[#E63946] text-xs font-bold tracking-widest uppercase">Our Packages</span>
            <h2 className="section-heading mt-2">Choose Your Path to Passing</h2>
            <p className="section-sub">All lessons include a fully qualified ADI and a dual-controlled car. No hidden costs.</p>
          </motion.div>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {packages.map((pkg, i) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              className={`relative rounded-2xl bg-white overflow-hidden ${pkg.popular ? "ring-2 ring-[#E63946] shadow-card-hover scale-105" : "shadow-card"}`}
            >
              {pkg.popular && (
                <div className="bg-[#E63946] text-white text-xs font-bold text-center py-2.5 tracking-widest uppercase">
                  ⭐ Most Popular
                </div>
              )}
              <div className="p-8">
                <h3 className="font-display text-lg font-bold text-[#003366]">{pkg.name}</h3>
                <div className="mt-3 mb-1">
                  <span className="font-display text-4xl font-black text-[#003366]">{pkg.price}</span>
                </div>
                <p className="text-gray-400 text-xs mb-6">{pkg.per}</p>
                <ul className="space-y-3 mb-8">
                  {pkg.features.map(f => (
                    <li key={f} className="flex items-center gap-3 text-sm text-gray-700">
                      <CheckCircle2 className="w-4 h-4 text-[#2ECC71] shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href={pkg.href || "/contact"}
                  className={`w-full justify-center flex items-center gap-2 font-semibold py-3 rounded-full transition-all ${pkg.popular ? "btn-primary" : "btn-navy"}`}
                >
                  {pkg.cta} <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link href="/lessons" className="text-[#003366] font-medium text-sm hover:text-[#E63946] transition-colors">
            View full pricing details →
          </Link>
        </div>
      </div>
    </section>
  );
}
