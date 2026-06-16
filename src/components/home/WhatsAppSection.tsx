"use client";

import { motion } from "framer-motion";
import { MessageCircle, Phone, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function WhatsAppSection() {
  return (
    <section className="py-24 px-4 bg-[#003366]">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="w-20 h-20 bg-[#25D366] rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
            <MessageCircle className="w-10 h-10 text-white" />
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
            Not Sure Where to Start?
          </h2>
          <p className="text-blue-200 text-lg mb-10 max-w-xl mx-auto">
            Message us on WhatsApp to check availability, ask about packages, or just say hello. No pressure, no sales pitch — just a helpful conversation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/441610001234?text=Hi%20James!%20I'd%20like%20to%20find%20out%20more%20about%20driving%20lessons."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp text-lg px-8 py-4"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp James Now
            </a>
            <a href="tel:+441610001234" className="btn-secondary text-lg px-8 py-4">
              <Phone className="w-5 h-5" />
              0161 000 1234
            </a>
          </div>
          <p className="text-blue-400 text-sm mt-6">Usually responds within 1 hour during lesson hours.</p>
        </motion.div>
      </div>
    </section>
  );
}
