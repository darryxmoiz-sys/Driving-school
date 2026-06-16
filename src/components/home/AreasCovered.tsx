"use client";

import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

const areas = [
  { name: "Manchester City Centre", testCentre: true },
  { name: "Salford", testCentre: true },
  { name: "Stockport", testCentre: true },
  { name: "Didsbury", testCentre: false },
  { name: "Trafford / Stretford", testCentre: false },
  { name: "Oldham", testCentre: true },
  { name: "Rochdale", testCentre: false },
  { name: "Bury", testCentre: false },
  { name: "Bolton", testCentre: true },
  { name: "Wigan", testCentre: false },
  { name: "Tameside / Ashton", testCentre: false },
  { name: "Eccles", testCentre: false },
  { name: "Cheadle", testCentre: false },
  { name: "Chorlton", testCentre: false },
  { name: "Hulme", testCentre: false },
  { name: "Ancoats", testCentre: false },
];

export default function AreasCovered() {
  return (
    <section className="py-24 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <span className="text-[#E63946] text-xs font-bold tracking-widest uppercase">Coverage Area</span>
            <h2 className="section-heading mt-2">Areas We Cover</h2>
            <p className="section-sub">We offer pickup and drop-off across Manchester and Greater Manchester. Test centre locations marked with ★</p>
          </motion.div>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
          {areas.map((area, i) => (
            <motion.div
              key={area.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04, duration: 0.4 }}
              className={`flex items-center gap-2 px-4 py-3 rounded-xl text-sm font-medium transition-all hover:-translate-y-0.5 cursor-default ${
                area.testCentre
                  ? "bg-[#003366] text-white shadow-md"
                  : "bg-[#F8F9FF] text-gray-700 border border-gray-200"
              }`}
            >
              <MapPin className={`w-3.5 h-3.5 shrink-0 ${area.testCentre ? "text-[#FFD700]" : "text-[#003366]"}`} />
              <span className="leading-tight">{area.name}{area.testCentre ? " ★" : ""}</span>
            </motion.div>
          ))}
        </div>
        <p className="text-center text-gray-400 text-xs mt-6">★ DVSA Driving Test Centre nearby. Not sure if we cover your area? <a href="tel:+441610001234" className="text-[#003366] font-semibold hover:underline">Give us a call</a>.</p>
      </div>
    </section>
  );
}
