"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MessageCircle, MapPin, Clock, CheckCircle2, Send } from "lucide-react";

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", type: "", message: "", preferred: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="pt-20">
      <section className="bg-[#003366] text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial="hidden" animate="visible" variants={fadeUp}>
            <span className="bg-[#E63946] text-white text-xs font-bold px-3 py-1 rounded-full tracking-widest uppercase mb-4 inline-block">Contact & Booking</span>
            <h1 className="font-display text-4xl md:text-5xl font-bold mt-4 mb-6">Ready to Start?<br/>Let's Talk.</h1>
            <p className="text-blue-200 text-lg max-w-2xl mx-auto">
              Fill in the form below or reach out directly. We usually respond within 2 hours during working hours.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="space-y-6">
              <h2 className="font-display text-2xl font-bold text-[#003366]">Get in Touch</h2>
              {[
                { icon: Phone, label: "Call Us", value: "0161 000 1234", href: "tel:+441610001234" },
                { icon: Mail, label: "Email", value: "hello@driveconfident.co.uk", href: "mailto:hello@driveconfident.co.uk" },
                { icon: MessageCircle, label: "WhatsApp", value: "Message us directly", href: "https://wa.me/441610001234" },
                { icon: MapPin, label: "Area", value: "Manchester & Greater Manchester" },
              ].map(({ icon: Icon, label, value, href }) => (
                <div key={label} className="flex gap-4 card p-4">
                  <div className="w-10 h-10 bg-[#003366] rounded-xl flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5 text-[#FFD700]" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 font-medium uppercase tracking-wider">{label}</p>
                    {href ? (
                      <a href={href} className="font-semibold text-[#003366] hover:text-[#E63946] transition-colors text-sm">{value}</a>
                    ) : (
                      <p className="font-semibold text-[#003366] text-sm">{value}</p>
                    )}
                  </div>
                </div>
              ))}

              <div className="card p-5">
                <div className="flex items-center gap-2 mb-3">
                  <Clock className="w-4 h-4 text-[#003366]" />
                  <h3 className="font-semibold text-[#003366] text-sm">Lesson Hours</h3>
                </div>
                <div className="space-y-1.5 text-sm text-gray-600">
                  <div className="flex justify-between"><span>Monday – Friday</span><span className="font-medium">7:00am – 8:00pm</span></div>
                  <div className="flex justify-between"><span>Saturday</span><span className="font-medium">8:00am – 6:00pm</span></div>
                  <div className="flex justify-between"><span>Sunday</span><span className="font-medium">8:00am – 4:00pm</span></div>
                </div>
              </div>

              <a
                href="https://wa.me/441610001234?text=Hi%20James!%20I'd%20like%20to%20book%20a%20driving%20lesson."
                target="_blank" rel="noopener noreferrer"
                className="btn-whatsapp w-full justify-center"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp Us Directly
              </a>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="card p-12 text-center"
                >
                  <div className="w-16 h-16 bg-[#2ECC71] rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-[#003366] mb-3">Enquiry Received!</h3>
                  <p className="text-gray-600">Thanks {form.name}! We'll be in touch within 2 hours. If you need an immediate response, WhatsApp us directly.</p>
                </motion.div>
              ) : (
                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="card p-8">
                  <h3 className="font-display text-2xl font-bold text-[#003366] mb-6">Booking Enquiry Form</h3>
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1.5">Full Name *</label>
                        <input
                          required type="text" placeholder="Your name"
                          value={form.name} onChange={e => setForm({...form, name: e.target.value})}
                          className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#003366] focus:border-transparent transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1.5">Phone Number *</label>
                        <input
                          required type="tel" placeholder="07xxx xxx xxx"
                          value={form.phone} onChange={e => setForm({...form, phone: e.target.value})}
                          className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#003366] focus:border-transparent transition-all"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">Email Address</label>
                      <input
                        type="email" placeholder="you@example.com"
                        value={form.email} onChange={e => setForm({...form, email: e.target.value})}
                        className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#003366] focus:border-transparent transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">What are you interested in? *</label>
                      <select
                        required value={form.type} onChange={e => setForm({...form, type: e.target.value})}
                        className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#003366] focus:border-transparent transition-all bg-white"
                      >
                        <option value="">Select an option…</option>
                        <option>Single Lesson (£38)</option>
                        <option>Block of 10 Lessons (£340)</option>
                        <option>Block of 20 Lessons (£640)</option>
                        <option>5-Day Intensive Course</option>
                        <option>8-Day Intensive Course</option>
                        <option>12-Day Intensive Course</option>
                        <option>Automatic Lessons</option>
                        <option>Just enquiring / not sure yet</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">Preferred contact method</label>
                      <div className="flex gap-3">
                        {["Phone call", "WhatsApp", "Email"].map(opt => (
                          <label key={opt} className="flex items-center gap-2 cursor-pointer">
                            <input
                              type="radio" name="preferred" value={opt}
                              onChange={e => setForm({...form, preferred: e.target.value})}
                              className="accent-[#003366]"
                            />
                            <span className="text-sm text-gray-700">{opt}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">Anything else? (optional)</label>
                      <textarea
                        rows={4} placeholder="e.g. your area, availability, previous experience…"
                        value={form.message} onChange={e => setForm({...form, message: e.target.value})}
                        className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#003366] focus:border-transparent transition-all resize-none"
                      />
                    </div>
                    <button type="submit" className="btn-primary w-full justify-center text-base py-4">
                      <Send className="w-5 h-5" />
                      Send Enquiry
                    </button>
                    <p className="text-xs text-gray-400 text-center">We respond within 2 hours during lesson hours. Your details are never shared.</p>
                  </form>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
